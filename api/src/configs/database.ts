import mysql from 'mysql2/promise';

class Database {
  private static instance: Database;
  private connection: mysql.Pool;

  private constructor() {
    this.connection = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'mydatabase',
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
}

export default Database;
