const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
        default: null,
    }],
    cover: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true, strict: true });

const Post = model("Post", PostSchema);

module.exports = Post;