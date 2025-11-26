import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/test-project";

// CORS configuration
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const NODE_ENV = process.env.NODE_ENV || "development";

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }

    // In development, allow localhost origins
    if (NODE_ENV === "development") {
      const allowedOrigins = [
        FRONTEND_URL,
        "http://localhost:3000",
        "http://127.0.0.1:3000",
      ];

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    } else {
      // In production, only allow the specified frontend URL
      if (origin === FRONTEND_URL) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
  credentials: true, // Allow cookies and authentication headers
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  maxAge: 86400, // 24 hours
};

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error: unknown) => {
    console.error("❌ MongoDB connection error:", error);
  });

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "ok", message: "Backend is running!" });
});

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express backend!" });
});

app.post("/api/data", (req: Request, res: Response) => {
  const { name } = req.body;
  res.json({
    message: `Received: ${name}`,
    timestamp: new Date().toISOString(),
  });
});

// Example route using Mongoose
app.post("/api/users", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error: unknown) {
    res.status(400).json({ error: "Failed to create user", details: error });
  }
});

app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error: unknown) {
    res.status(500).json({ error: "Failed to fetch users", details: error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
