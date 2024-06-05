import { Request, Response } from 'express';
import Database from '../../configs/database';
import { OkPacket, RowDataPacket } from 'mysql2';

export const getAllContent = async (req: Request, res: Response) => {
  try {
    const connection = Database.getInstance().getConnection();
    const [results] = await connection.query<RowDataPacket[]>('SELECT * FROM contents');
    res.status(200).json(results);
  } catch (error) {
    console.error('Error retrieving contents:', error);
    res.status(500).send('Error retrieving contents');
  }
};

export const deleteContent = async (req: Request, res: Response) => {
  const { content_id } = req.params;

  try {
    const connection = Database.getInstance().getConnection();
    const [results] = await connection.query<RowDataPacket[]>('SELECT * FROM contents WHERE content_id = ?', [content_id]);

    if (results.length === 0) {
      return res.status(404).send('Content not found');
    }

    await connection.query<OkPacket>('DELETE FROM contents WHERE content_id = ?', [content_id]);
    res.status(200).send(`Content with ID: ${content_id} deleted successfully`);
  } catch (error) {
    console.error('Error deleting content:', error);
    res.status(500).send('Error deleting content');
  }
};

export const getOtherContent = async (req: Request, res: Response) => {
  try {
    const connection = Database.getInstance().getConnection();
    const [results] = await connection.query<RowDataPacket[]>('SELECT * FROM contents WHERE contentType != ?', ['Document']);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).send('Error fetching content');
  }
};

export const getAllDocument = async (req: Request, res: Response) => {
  try {
    const connection = Database.getInstance().getConnection();
    const [results] = await connection.query<RowDataPacket[]>('SELECT * FROM contents WHERE contentType = ?', ['Document']);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).send('Error fetching documents');
  }
};
