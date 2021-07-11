const express = require("express");
const path = require("path");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.static(__dirname + "/public"));
app.use(express.json());

// Connect to Database
connectDB();

// Template engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Enable CORS
app.use(cors());

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
