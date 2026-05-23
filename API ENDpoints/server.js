const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./taskroutes");

const app = express();

// Middleware
app.use(express.json());

// Routes use
app.use("/api", taskRoutes);

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/taskdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
console.log("Server file started");