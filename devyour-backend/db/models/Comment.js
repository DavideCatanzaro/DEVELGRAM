const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true, strict: true });

const Comment = model("Comment", CommentSchema);

module.exports = Comment;