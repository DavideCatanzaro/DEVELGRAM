const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const followersData = require("./follow.json");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/followers-data", (req, res) => {
  res.status(200).send(JSON.stringify(followersData));
});


app.listen(3000, () => {
  console.log("Stiamo ascoltando sulla porta: https://localhost:3000");
});
