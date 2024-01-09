// src/index.js
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import petRoutes from "./routes/petRoutes.mjs";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI; // Set this environment variable in your .env file
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check for successful connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use("/api/pets", petRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; // Export the app for testing purposes
