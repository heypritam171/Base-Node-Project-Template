const { StatusCodes } = require('http-status-codes');


//controller function
const info = (req, res)=>{
     return res
     .status(StatusCodes.OK)
     .json({
        success: true,
        message: "Api is live now",
        error:{},
        data:{}
     });
}


module.exports = {
    info
}