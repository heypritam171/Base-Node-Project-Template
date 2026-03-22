const express = require('express');

const{ serverConfig , logger} = require('./config');

const apiRouts = require('./routes');

const app = express();

app.use('/api', apiRouts);

app.listen(serverConfig.PORT,() =>{
    console.log(`Server is  running on port ${serverConfig.PORT}`);
    logger.info("successfully started the server", {});
})