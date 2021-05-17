const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Hi this is running on port ${port}`);
});
app.listen(port, () => {
  console.log(`This app is running at http://localhost:${port}`);
});
