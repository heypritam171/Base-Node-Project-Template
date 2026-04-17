class AppError extends Error {
    constructor(message, StatusCode){
        super(message);
        this.StatusCode = StatusCode;
        this.explanation = message;
        this.name = "AppError";
    }
}

module.exports = AppError;