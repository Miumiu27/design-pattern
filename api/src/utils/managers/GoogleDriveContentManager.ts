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
    const { content_id, title, contentType, status, body, user_id } = contentData;
    const createdAt = new Date();
    const lastModifiedAt = new Date();
    let content;

    if (contentType === ContentType.Image || contentType === ContentType.Video) {
      if (!file) {
        throw new Error('File is required for Image and Video content types');
      }
      const path = await this.storageService.uploadFile(file.path, file.originalname, file.mimetype);
      content = contentType === ContentType.Image
        ? this.factory.createImageContent(content_id, title, createdAt, lastModifiedAt, status, path, user_id)
        : this.factory.createVideoContent(content_id, title, createdAt, lastModifiedAt, status, path, user_id);
    } else {
      content = this.factory.createDocumentContent(content_id, title, createdAt, lastModifiedAt, status, body, user_id);
    }

    const connection = Database.getInstance().getConnection();
    try {
      const [result]: [OkPacket, any] = await connection.query('INSERT INTO contents SET ?', content);
      console.log('Content inserted with ID:', result.insertId);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Error inserting content: ${err.message}`);
      } else {
        throw new Error(`Error inserting content: ${err}`);
      }
    }
  }
}

export default GoogleDriveContentManager;
