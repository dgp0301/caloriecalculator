const express = require("express");
const calculate = require("./controller/calculate");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send(`Hi this is running on port ${port}`);
});
app.use("/calculate", calculate);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ message: err.message });
});
app.listen(port, () => {
  console.log(`This app is running at http://localhost:${port}`);
});
