import { ContentStrategy } from '../../../utils/interfaces/ContentStrategy';
import { Request, Response } from 'express';
import Database from '../../../configs/database';

export class DocumentStrategy implements ContentStrategy {
  async createContent(req: Request, res: Response): Promise<void> {
    const { content_id, title, status, body } = req.body;
    const createdAt = new Date();
    const lastModifiedAt = new Date();

    const connection = await Database.getInstance().getConnection();

    const conn = await connection.getConnection();

    try {
      await conn.beginTransaction();

      let documentId = content_id;
      if (!content_id) {
        const insertContentQuery = 'INSERT INTO contents (title, contentType, createdAt, lastModifiedAt, status) VALUES (?, ?, ?, ?, ?)';
        const [result]: any = await conn.query(insertContentQuery, [title, 'document', createdAt, lastModifiedAt, status]);
        documentId = result.insertId;
      } else {
        const updateContentQuery = 'UPDATE contents SET title = ?, lastModifiedAt = ?, status = ? WHERE content_id = ?';
        await conn.query(updateContentQuery, [title, lastModifiedAt, status, content_id]);
      }

      const getMaxVersionQuery = 'SELECT MAX(version) AS max_version FROM document_versions WHERE content_id = ?';
      const [versionResult]: any = await conn.query(getMaxVersionQuery, [documentId]);
      const newVersion = (versionResult[0].max_version || 0) + 1;

      const insertVersionQuery = 'INSERT INTO document_versions (content_id, version, body, created_at) VALUES (?, ?, ?, ?)';
      await conn.query(insertVersionQuery, [documentId, newVersion, body, createdAt]);

      await conn.commit();

      res.status(201).send(`Document added/updated with ID: ${documentId} and version: ${newVersion}`);
    } catch (error) {
      await conn.rollback();
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(400).send('An unknown error occurred');
      }
    } finally {
      conn.release();
    }
  }
}
