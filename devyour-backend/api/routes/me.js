const express = require("express");
const { authUser } = require("../../middleware/auth");
const app = express.Router();

app.get("/", authUser, (req, res) => {
    const user = req.user;

    return res.status(200).json({ ...user });
});

module.exports = app;