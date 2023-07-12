const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { outputError } = require("../../utility/errors");
const { User } = require("../../db");
const { generateToken} = require("../../utility/auth");

/**
 * @path /api/auth/token
 */
app.post("/token", async (req, res) => {
    const schema = Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const user = await User.findOne({ email: data.email }, "-__v", { lean: true });

        if (user == null) return res.status(404).json({ message: "User not found" });

        const is_password_ok = bcrypt.compareSync(data.password, user.password);

        if (!is_password_ok) return res.status(404).json({ message: "User not found" });

        const token = generateToken({ _id: user._id, email: user.email, role: "user" });

        delete user.password;

        return res.status(200).json({ token, user });

    } catch (error) {
        outputError(res, error);
    }
});

module.exports = app;