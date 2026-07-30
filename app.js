const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to CA Firm Management System");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
