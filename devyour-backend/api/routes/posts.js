const express = require("express");
const app = express.Router();

const { Post } = require('../../db');

const Joi = require("joi");
const { outputError } = require("../../utility/errors");
const { authUser } = require("../../middleware/auth");

/**
 * new post
 * @path /api/posts
 */
app.post("/", authUser, async (req, res) => {
    const user = req.user._id;

    const schema = Joi.object().keys({
        cover: Joi.string().optional(),
        description: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const post = await new Post({ user, ...data }).save();

        return res.status(201).json(post._doc);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * @path /api/posts
 */
app.get("/", authUser, async (req, res) => {
    try {
        const posts = await Post.find({}, "-__v", { lean: true }).populate({ path: "user", select: "-__v -password" }).populate({ path: "comments", populate: { path: "user", select: "-__v -password" } });

        return res.status(200).json(posts);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * @path /api/posts/:post_id
 */
app.get("/:post_id", authUser, async (req, res) => {
    const _id = req.params.post_id;

    try {
        const post = await Post.find({ _id }, "-__v", { lean: true }).populate({ path: "user", select: "-__v -password" }).populate({ path: "comments", populate: { path: "user", select: "-__v -password" } });

        return res.status(200).json(post);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * @path /api/posts/:post_id
 */
app.put("/", authUser, async (req, res) => {
    const user = req.user.post_id;

    const schema = Joi.object().keys({
        cover: Joi.string().optional(),
        description: Joi.string().optional(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        await Post.updateOne({ user, _id }, { ...data });

        return res.status(200).json({ message: "Post updated" });
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * @path /api/posts/:post_id
 */
app.delete("/", authUser, async (req, res) => {
    const user = req.user.post_id;

    try {
        await Post.deleteOne({ user, _id });

        return res.status(200).json({ message: "Post deleted" });
    } catch (err) {
        outputError(req, error);
    }
});



module.exports = app;