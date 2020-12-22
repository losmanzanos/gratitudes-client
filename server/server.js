const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const db = require("pg");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("💣");
});

app.listen(port, () => {
  console.log(`👂👂 on PORT:${port}...`);
});
