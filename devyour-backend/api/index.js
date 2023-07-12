const express = require("express");
const app = express.Router()

app.get("/status", (_, res) => {
    return res.status(200).json({ status: "Online" })
});

app.use("/users", require("./routes/users"));

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));
app.use("/comments", require("./routes/comments"));
app.use("/followers", require("./routes/followers"));

module.exports = app;