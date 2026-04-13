const CrudRepositories = require("./crud-repositories");
const { City } = require("../models");


class CityRepositories extends CrudRepositories {
    constructor(){
        super(City);
    }
}

module.exports = CityRepositories;