const outputErrorDefaultOptions = {
    code: 500,
    message: "Internal Server Error",
    logError: true,
    outDefaultMessage: false,
}

const outputError = (res, error, options = { ...outputErrorDefaultOptions }) => {
    options = { ...outputErrorDefaultOptions, ...options };

    if (options.logError) console.log(error);
    return res.status(options.code).json({ message: options.outDefaultMessage ? options.message : error.message });
}

module.exports = {
    outputError,
}