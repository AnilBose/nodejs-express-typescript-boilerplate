import express from "express";
import connectDB from "./mongo/db";
import logger from "./utils/logger";
import { errorMiddleware } from "./middleware/errorMiddleware";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to log requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Use the routes
app.use(routes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
