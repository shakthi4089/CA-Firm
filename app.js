const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Set EJS as template engine
app.set("view engine", "ejs");

// Views folder
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.render("pages/home");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});