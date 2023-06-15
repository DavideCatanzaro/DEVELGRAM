const express = require("express");
const bodyParser = require("body-parser");
const followersData = require('./follow.json')
const app = express();
app.use(bodyParser.json())

app.get("/api/followers-data", (req, res) => {
  res.json(followersData.follower);
});

app.listen(3000, () => {
  console.log("Stiamo ascoltando sulla porta: https://localhost:3001");
});
