import { Request, Response } from 'express';
import { ContentType } from '../../models/content/Content';
import Database from '../../configs/database';
import { OkPacket } from 'mysql2';
import ContentFactory from '../../middlewares/factories/ContentFactory';
import AbstractContentFactory from '../../middlewares/factories/AbstractContentFactory';
import GoogleDriveService from '../../services/GoogleDriveService';

const factory: AbstractContentFactory = new ContentFactory();
const storageService = new GoogleDriveService();

export const createContent = async (req: Request, res: Response) => {
  const { content_id, title, contentType, status, body } = req.body;
  const file = req.file;

  const createdAt = new Date();
  const lastModifiedAt = new Date();

  let content;
  try {
    let path = '';
    if (contentType === ContentType.Image || contentType === ContentType.Video) {
      if (!file) {
        return res.status(400).send('File is required for Image and Video content types');
      }
      path = await storageService.uploadFile(file.path, file.originalname, file.mimetype);
    }

    switch (contentType) {
      case ContentType.Document:
        content = factory.createDocumentContent(content_id, title, createdAt, lastModifiedAt, status, body);
        break;
      case ContentType.Image:
        content = factory.createImageContent(content_id, title, createdAt, lastModifiedAt, status, path);
        break;
      case ContentType.Video:
        content = factory.createVideoContent(content_id, title, createdAt, lastModifiedAt, status, path);
        break;
      default:
        return res.status(400).send('Invalid content type');
    }

    const connection = Database.getInstance().getConnection();
    connection.query('INSERT INTO contents SET ?', content, (err, result: OkPacket) => {
      if (err) {
        console.error('Error inserting content:', err);
        return res.status(500).send('Error inserting content');
      }
      res.status(201).send(`Content added with ID: ${result.insertId}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send('An unknown error occurred');
    }
  }
};