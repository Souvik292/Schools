import express from "express";
import mysql from "mysql2";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/schoolImages", express.static(path.join(__dirname, "schoolImages")));


const db = mysql.createConnection({
  host: "localhost",
  user:"root",
  password: "",
  database: "schoolDB",
  port: 3306
  
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "schoolImages/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// Add school
app.post("/api/addSchool", upload.single("image"), (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const imagePath = req.file ? `/schoolImages/${req.file.filename}` : "";

  const sql = `INSERT INTO schools (name, address, city, state, contact, image, email_id)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [name, address, city, state, contact, imagePath, email_id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "School added successfully!",imagePath });
  });
});

// Get all schools
app.get("/api/schools", (req, res) => {
  db.query("SELECT id, name, address, city,state,contact, image FROM schools", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
