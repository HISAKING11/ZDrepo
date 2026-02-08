import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import galleryRoute from "./routes/galleryfetch.js";
import adminAuthRoute from "./routes/AdminAuth.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "https://zdartgallery.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend + Firebase Admin connected" });
});

// routes must be before listen
app.use("/api/gallery", galleryRoute);
app.use("/api/admin", adminAuthRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
