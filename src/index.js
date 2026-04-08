const express = require('express');

const { ServerConfig,Logger }  = require("./config/index.");
const apiRoute = require('./routes')

const app = express();

app.use('/api', apiRoute);

app.listen(ServerConfig.PORT,()=>{
    console.log(`server is running on ${ServerConfig.PORT}`);
    Logger.info("successfully started the server", "root", {})
});