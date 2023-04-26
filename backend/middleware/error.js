const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server error";

    // wrong mongodb ID error
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Dupicate ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message, 400);
    }


    // Wrong JWT token
    if (err.code === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, try again`
        err = new ErrorHandler(message, 400);
    }

    // JWT expire error
    if (err.code === "TokenExpiredError") {
        const message = `Json Web Token is expired, try again`
        err = new ErrorHandler(message, 400);
    }


    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};