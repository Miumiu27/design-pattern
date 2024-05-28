import { ContentManager } from '../abstractions/ContentManager';
import { StorageService } from '../interfaces/StorageService';
import ContentFactory from '../../middlewares/factories/ContentFactory';
import Database from '../../configs/database';
import { OkPacket } from 'mysql2';
import { ContentType } from '../../models/content/Content';

class GoogleDriveContentManager extends ContentManager {
  private factory = new ContentFactory();

  constructor(storageService: StorageService) {
    super(storageService);
  }

  public async createContent(contentData: any, file: Express.Multer.File | null): Promise<void> {
    const { content_id, title, contentType, status, body } = contentData;
    const createdAt = new Date();
    const lastModifiedAt = new Date();
    let content;

    if (contentType === ContentType.Image || contentType === ContentType.Video) {
      if (!file) {
        throw new Error('File is required for Image and Video content types');
      }
      const path = await this.storageService.uploadFile(file.path, file.originalname, file.mimetype);
      content = contentType === ContentType.Image
        ? this.factory.createImageContent(content_id, title, createdAt, lastModifiedAt, status, path)
        : this.factory.createVideoContent(content_id, title, createdAt, lastModifiedAt, status, path);
    } else {
      content = this.factory.createDocumentContent(content_id, title, createdAt, lastModifiedAt, status, body);
    }

    const connection = Database.getInstance().getConnection();
    connection.query('INSERT INTO contents SET ?', content, (err, result: OkPacket) => {
      if (err) {
        throw new Error(`Error inserting content: ${err.message}`);
      }
    });
  }
}

export default GoogleDriveContentManager;
