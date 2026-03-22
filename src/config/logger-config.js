
// from winston Logger documentation --->(https://www.npmjs.com/package/winston)
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customformate = printf(({ level, message,  timestamp }) => {
  return `${timestamp} :[${level}]  : ${message}`;
});

const logger = createLogger ({
    format: combine(
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        customformate
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combined.log'})
    ],
})

module.exports = logger;