const express = require("express");
const app = express.Router();

const { Comment } = require("../../db");

const Joi = require("joi");
const { outputError } = require("../../utility/errors");
const { authUser } = require("../../middleware/auth");

/**
 * @path /api/comments
 */
app.post("/", authUser, async (req, res) => {
    const user = req.user._id;

    const schema = Joi.object().keys({
        post: Joi.string().required(),
        description: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const comment = await new Comment({ user, ...data }).save();

        return res.status(201).json(comment._doc);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * @path /api/comments
 */
app.get("/", authUser, async (req, res) => {
    try {
        const comments = await Comment.find({}, "-__v", { lean: true }).popupale({ path: "user", select: "-__v -password" });

        return res.status(200).json(comments);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * @path /api/comments/:comment_id
 */
app.get("/:comment_id", authUser, async (req, res) => {
    const _id = req.params.comment_id;

    try {
        const comment = await Comment.find({ _id }, "-__v", { lean: true }).popupale({ path: "user", select: "-__v -password" });

        return res.status(200).json(comment);
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * @path /api/comments/:comment_id
 */
app.put("/", authUser, async (req, res) => {
    const user = req.user.comment_id;

    const schema = Joi.object().keys({
        description: Joi.string().optional(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        await Comment.updateOne({ user, _id }, { ...data });

        return res.status(200).json({ message: "Comment updated" });
    } catch (err) {
        outputError(req, error);
    }
});

/**
 * @path /api/comments/:comment_id
 */
app.delete("/", authUser, async (req, res) => {
    const user = req.user.comment_id;

    try {
        await Comment.deleteOne({ user, _id });

        return res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
        outputError(req, error);
    }
});



module.exports = app;