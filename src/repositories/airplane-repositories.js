const CrudRepositories = require("./crud-repositories");
const { Airplane } = require('../models');


class AirplaneRepositories extends CrudRepositories {
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepositories;