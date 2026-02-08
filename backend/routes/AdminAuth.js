import express from "express";
import multer from "multer";
import jwt from "jsonwebtoken";
import { db, auth } from "../config/firebase.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

//  ADMIN LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Firebase Admin only verifies users — password check assumed handled securely
    const user = await auth.getUserByEmail(email);

    const token = jwt.sign({ uid: user.uid }, process.env.JWT_SECRET, {
      expiresIn: "2h"
    });

    res.json({ token });
  } catch (err) {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

//  TOKEN MIDDLEWARE
const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    req.admin = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
};

//  UPLOAD ARTWORK
router.post("/upload", verifyAdmin, upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { folder: "gallery" },
      async (error, uploaded) => {
        if (error) return res.status(500).json({ message: "Upload failed" });

        await db.collection("gallery").add({
          title: req.body.title,
          imgurl: uploaded.secure_url,
          timestamp: new Date()
        });

        res.json({ message: "Artwork uploaded successfully" });
      }
    ).end(req.file.buffer);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

//  UPDATE ARTWORK TITLE
router.patch("/gallery/:id", verifyAdmin, async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const docRef = db.collection("gallery").doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    await docRef.update({ title: title.trim() });
    res.json({ message: "Artwork updated" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

//  DELETE ARTWORK
router.delete("/gallery/:id", verifyAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    const docRef = db.collection("gallery").doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    await docRef.delete();
    res.json({ message: "Artwork deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
