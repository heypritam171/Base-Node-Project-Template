const { StatusCodes } =  require("http-status-codes");
const ErrorResponce = require("../utils/common/error-response");
const AppError = require("../utils/errors/app-errors");


function validatecreateRequest(req, res, next){
    if(!req.body?.name){
     
        ErrorResponce.message = "Something went wrong while creating city";
        ErrorResponce.error = new AppError(["City name not found in the incoming request "], StatusCodes.BAD_REQUEST);

        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ErrorResponce });
    }
  next();
}

module.exports = {
    validatecreateRequest
};