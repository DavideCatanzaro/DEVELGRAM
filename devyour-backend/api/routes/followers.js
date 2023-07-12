const express = require("express");
const app = express.Router();

const { Follower } = require("../../db");

const Joi = require("joi");
const { outputError } = require("../../utility/errors");
const { authUser } = require("../../middleware/auth");

/**
 * @path /api/followers
 */
app.post("/", authUser, async (req, res) => {
    const user = req.user._id;

    const schema = Joi.object().keys({
        follower: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const follower = await new Follower({ user, ...data }).save();

        return res.status(201).json(follower._doc);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * Get all current user followers
 * @path /api/followers
 */
app.get("/", authUser, async (req, res) => {
    const user = req.user._id;

    try {
        const followers = await Follower.find({ user }, "-__v", { lean: true }).populate({ path: "follower", select: "-__v -password" });

        return res.status(200).json(followers);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * Get all current user followers
 * @path /api/followers/following
 */
app.get("/following", authUser, async (req, res) => {
    const user = req.user._id;

    try {
        const followers = await Follower.find({ follower: user }, "-__v", { lean: true }).populate({ path: "user", select: "-__v -password" });

        return res.status(200).json(followers);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * Get all followers of a different user
 * @path /api/followers/:user_id
 */
app.get("/:user_id", authUser, async (req, res) => {
    const user = req.params.user_id;

    try {
        const comment = await Follower.find({ user }, "-__v", { lean: true }).populate({ path: "follower", select: "-__v -password" });

        return res.status(200).json(comment);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * Get all followers of a different user
 * @path /api/followers/following/:user_id
 */
app.get("/following/:user_id", authUser, async (req, res) => {
    const user = req.params.user_id;

    try {
        const comment = await Follower.find({ follower: user }, "-__v", { lean: true }).populate({ path: "user", select: "-__v -password" });

        return res.status(200).json(comment);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * @path /api/followers/:user_id
 */
app.delete("/:user_id", authUser, async (req, res) => {
    const user = req.user._id;
    const follower = req.params.user_id;

    try {
        await Follower.deleteOne({ user, follower });

        return res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
        outputError(req, error);
    }
});

module.exports = app;