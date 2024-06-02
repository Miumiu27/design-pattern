import { Request, Response } from 'express';
import GoogleDriveService from '../../services/GoogleDriveService';
import fs from 'fs'; 

const driveService = new GoogleDriveService();

export const downloadFile = async (req: Request, res: Response) => {
  const { fileId } = req.params;
  const destPath = `./downloads/${fileId}`;

  try {
    await driveService.downloadFile(fileId, destPath);

    res.download(destPath, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Error sending file');
      }
      fs.unlink(destPath, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          console.error('Error deleting file:', err);
        }
      });
    });
  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).send(error instanceof Error ? error.message : 'Unknown error');
  }
};
