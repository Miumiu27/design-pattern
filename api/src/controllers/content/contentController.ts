import { Request, Response } from 'express';
import Database from '../../configs/database';
import { OkPacket, RowDataPacket ,QueryResult} from 'mysql2';



export const getAllContent = (req: Request, res: Response) => {
  try {
    const connection = Database.getInstance().getConnection();
    connection.query('SELECT * FROM contents', (err, results: RowDataPacket[]) => {
      if (err) {
        console.error('Error retrieving contents:', err);
        return res.status(500).send('Error retrieving contents');
      }
      res.status(200).json(results);
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send('An unknown error occurred');
    }
  }
};

export const deleteContent = (req: Request, res: Response) => {
  const { content_id } = req.params;

  try {
    const connection = Database.getInstance().getConnection();
    connection.query('SELECT * FROM contents WHERE content_id = ?', [content_id], (err, results: RowDataPacket[]) => {
      if (err) {
        console.error('Error retrieving content:', err);
        return res.status(500).send('Error retrieving content');
      }
      if (results.length === 0) {
        return res.status(404).send('Content not found');
      }
      const content = results[0];

      connection.query('DELETE FROM contents WHERE content_id = ?', [content_id], (err, result: OkPacket) => {
        if (err) {
          console.error('Error deleting content:', err);
          return res.status(500).send('Error deleting content');
        }
        res.status(200).send(`Content with ID: ${content_id} deleted successfully`);
      });
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send('An unknown error occurred');
    }
  }
};


export const getOtherContent = (req: Request, res: Response) => {
  try {
    const connection = Database.getInstance().getConnection();
    connection.query('SELECT * FROM contents WHERE contentType != ?', ['Document'], (err, results: QueryResult) => {
      if (err) {
        console.error('Error fetching content:', err);
        return res.status(500).send('Error fetching content');
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).send('Error fetching content');
  }
};
