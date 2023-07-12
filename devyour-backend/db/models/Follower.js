const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const FollowerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    follower: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true, strict: true });

const Follower = model("Follower", FollowerSchema);

module.exports = Follower;