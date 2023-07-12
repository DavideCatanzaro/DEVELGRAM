const { User } = require("../db");
const { verifyToken } = require("../utility/auth");
const { outputError } = require("../utility/errors");

const authUser = async (req, res, next) => {
    const bearerToken = req.headers.authorization || req.headers["authorization"] || null;

    if (bearerToken == null) return res.status(403).json({ message: "Not Authorized" });

    const _token = bearerToken.split(" ");

    if (_token[0] !== "Bearer") return res.status(403).json({ message: "Not Authorized" });

    if (!_token[1]) return res.status(403).json({ message: "Not Authorized" });

    const token = _token[1];

    try {
        const encoded_token = verifyToken(token);

        const { _id } = encoded_token;

        const user = await User.findOne({ _id }, "-__v -password", { lean: true });

        req.user = user;

        return next();

    } catch(error) {
        outputError(res, error);
    }
}

module.exports = {
    authUser,
}