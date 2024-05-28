import { google } from 'googleapis';
import fs from 'fs';
import { StorageService } from '../utils/interfaces/StorageService';


const SCOPE = ['https://www.googleapis.com/auth/drive'];

class GoogleDriveService implements StorageService {
  private async authorize() {
    const jwtClient = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      SCOPE
    );
    await jwtClient.authorize();
    return jwtClient;
  }

  public async uploadFile(filePath: string, fileName: string, mimeType: string): Promise<string> {
    const authClient = await this.authorize();
    const drive = google.drive({ version: 'v3', auth: authClient });

    const fileMetaData = {
      name: fileName,
      parents: ['1FZElZDdacZ0CgNRHU8DZqnmzCQTAESwh'] // ID du dossier drive actuelle
    };

    const media = {
      mimeType: mimeType,
      body: fs.createReadStream(filePath)
    };

    const response = await drive.files.create({
      requestBody: fileMetaData,
      media: media,
      fields: 'id, webViewLink'
    });

    return response.data.webViewLink!;
  }

  public async deleteFile(fileId: string): Promise<void> {
    const authClient = await this.authorize();
    const drive = google.drive({ version: 'v3', auth: authClient });

    await drive.files.delete({
      fileId: fileId
    });
  }

  public async downloadFile(fileId: string, destPath: string): Promise<void> {
    const authClient = await this.authorize();
    const drive = google.drive({ version: 'v3', auth: authClient });

    const dest = fs.createWriteStream(destPath);
    await drive.files.get(
      { fileId: fileId, alt: 'media' },
      { responseType: 'stream' },
      (err, res) => {
        if (err) {
          console.error('Error downloading file:', err);
          throw new Error('Error downloading file');
        }
        if (res && res.data) {
          res.data
            .on('end', () => {
              console.log('Downloaded file.');
            })
            .on('error', (err: any) => {
              console.error('Error downloading file:', err);
              throw new Error('Error downloading file');
            })
            .pipe(dest);
        } else {
          console.error('No response or data from Google Drive');
          throw new Error('No response or data from Google Drive');
        }
      }
    );
  }
}

export default GoogleDriveService;

