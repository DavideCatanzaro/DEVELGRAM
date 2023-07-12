const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { outputError } = require("../../utility/errors");
const { User } = require("../../db");

/**
 * Create a new user
 * @path /api/users
 */
app.post("/", async (req, res) => {
    const schema = Joi.object().keys({
        username: Joi.string().required().error(new Error("Username is required")),
        email: Joi.string().required().error(new Error("Email is required")),
        password: Joi.string().required().error(new Error("Password is required")),
        firstName: Joi.string().required().error(new Error("Firstname is required")),
        lastName: Joi.string().required().error(new Error("Lastname is required")),
        image: Joi.string().optional(),
        cover: Joi.string().optional(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        data.password = bcrypt.hashSync(data.password, 12);

        const user = await User.create({ ...data });

        delete user._doc.password;

        return res.status(201).json({ ...user._doc });

    } catch(error) {
        outputError(req, error);
    }
});

/**
 * @path /api/users
 */
app.get("/", async (req, res) => {
    try {
        const users = await User.find({}, "-__v", { lean: true })

        return res.status(200).json(users);
    } catch (err) {
        outputError(req, error);
    }
});


module.exports = app;