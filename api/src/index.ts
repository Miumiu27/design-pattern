import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contentRoutes from "./routes/contentRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import path from "path";
dotenv.config();

const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/src/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", contentRoutes);
app.use("/api", userRoutes);
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
