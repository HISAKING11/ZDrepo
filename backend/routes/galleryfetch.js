import express from "express";
import { db } from "../config/firebase.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("gallery").get();

    const gallery = snapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().title,
      imgurl: doc.data().imgurl,
    }));

    res.json(gallery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch gallery" });
  }
});

export default router;
