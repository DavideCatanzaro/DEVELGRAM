const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URI);

        console.log("MonngoDB Atlas connected...")
    } catch (error) {
        throw error
    }
}

const models = {
    User: require("./models/User"),
    Post: require("./models/Post"),
    Comment: require("./models/Comment"),
    Follower: require("./models/Follower"),
};

module.exports = {
    connect,
    ...models,
}