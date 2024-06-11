import mysql from 'mysql2/promise';

class Database {
  private static instance: Database;
  private connection: mysql.Pool;

  private constructor() {
    this.connection = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'exam_design_pattern',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getConnection(): mysql.Pool {
    return this.connection;
  }

  public async testConnection(): Promise<void> {
    try {
      const connection = await this.connection.getConnection();
      await connection.ping();
      connection.release();
      console.log("Database connection successful.");
    } catch (error) {
      console.error("Database connection failed:", error);
      throw error;
    }
  }
}

export default Database;
