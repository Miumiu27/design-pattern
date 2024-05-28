import mysql, { Connection } from "mysql2";

class Database {
  private static instance: Database;

  private connection: Connection;

  private constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "mydatabase",
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getConnection(): Connection {
    return this.connection;
  }
}

export default Database;
