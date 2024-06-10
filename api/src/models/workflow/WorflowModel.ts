import Database from '../../configs/database';
import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';

interface Workflow {
  id?: number;
  content_id: number;
  etat: string;
  date_modification: Date;
  user_id: number;
}

class WorkflowModel {
  private db = Database.getInstance().getConnection();

  private mapRowToWorkflow(row: RowDataPacket): Workflow {
    return {
      id: row.id,
      content_id: row.content_id,
      etat: row.etat,
      date_modification: new Date(row.date_modification),
      user_id: row.user_id
    };
  }

  async getAll(): Promise<Workflow[]> {
    const [rows] = await this.db.query<RowDataPacket[]>('SELECT * FROM workflow');
    return rows.map(this.mapRowToWorkflow);
  }

  async getById(id: number): Promise<Workflow | null> {
    const [rows] = await this.db.query<RowDataPacket[]>('SELECT * FROM workflow WHERE id = ?', [id]);
    return rows.length ? this.mapRowToWorkflow(rows[0]) : null;
  }

  async create(workflow: Workflow): Promise<number> {
    const [result] = await this.db.query<ResultSetHeader>(
      'INSERT INTO workflow (content_id, etat, date_modification, user_id) VALUES (?, ?, ?, ?)',
      [workflow.content_id, workflow.etat, workflow.date_modification, workflow.user_id]
    );
    return result.insertId;
  }

  async update(id: number, workflow: Workflow): Promise<boolean> {
    const [result] = await this.db.query<ResultSetHeader>(
      'UPDATE workflow SET content_id = ?, etat = ?, date_modification = ?, user_id = ? WHERE id = ?',
      [workflow.content_id, workflow.etat, workflow.date_modification, workflow.user_id, id]
    );
    return result.affectedRows > 0;
  }

  async delete(id: number): Promise<boolean> {
    const [result] = await this.db.query<ResultSetHeader>('DELETE FROM workflow WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

export default WorkflowModel;
