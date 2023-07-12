require('dotenv').config()

const express = require("express");
const app = express()

const db = require("./db")

const cors = require("cors");
const helmet = require("helmet");


app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));

const { SERVER_PORT: port, SERVER_HOST: host } = process.env;

db.connect();

app.listen(port, () => {
	console.log(`Server up and running on ${host}:${port}`);
});
