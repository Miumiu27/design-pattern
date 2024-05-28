import { Request, Response } from "express";
import Database from "../../configs/database";
import bcrypt from "bcrypt";
import { User } from "../../models/user/User";
import { OkPacket, RowDataPacket } from "mysql2";

export const createUser = async (req: Request, res: Response) => {
  const {
    user_id,
    name,
    firstname,
    department,
    job,
    adresse,
    role,
    sexe,
    email,
    tel,
    birthdate,
    password,
  } = req.body;

  let profileImage = req.file?.path;

  if (profileImage) {
    profileImage = profileImage.replace(/\\/g, "/");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
      user_id,
      name,
      firstname,
      department,
      job,
      adresse,
      role,
      sexe,
      email,
      tel,
      birthdate: new Date(birthdate),
      password: hashedPassword,
      profile_image: profileImage || "",
    };

    const connection = Database.getInstance().getConnection();
    connection.query(
      "INSERT INTO users SET ?",
      newUser,
      (err, result: OkPacket) => {
        if (err) {
          console.error("Error inserting user:", err);
          return res.status(500).send("Error inserting user");
        }
        res.status(201).send(`User added with ID: ${result.insertId}`);
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal server error");
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const userId = req.params.user_id;

  const connection = Database.getInstance().getConnection();
  connection.query(
    "DELETE FROM users WHERE user_id = ?",
    [userId],
    (err, result: OkPacket) => {
      if (err) {
        console.error("Error deleting user:", err);
        return res.status(500).send("Error deleting user");
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("User not found");
      }

      res.status(200).send(`User deleted with ID: ${userId}`);
    }
  );
};

export const getAllUsers = (req: Request, res: Response) => {
  const connection = Database.getInstance().getConnection();
  connection.query("SELECT * FROM users", (err, results: RowDataPacket[]) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).send("Error fetching users");
    }

    res.status(200).json(results);
  });
};
