const { statusCodes, StatusCodes } = require('http-status-codes');
const { Model, where } = require("sequelize");
// const { Logger } = require("../config/logger-config");
const logger = require('../config/logger-config');
const AppError = require("../utils/errors/app-errors");


class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = this.model.create(data);
        return response;

    }

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if (!response) {
        throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
        }
        return response;

    }

    async get(data) {
        const response = await this.model.findByPk(data);
        if(!response){
            throw new AppError("Not able to find resource",StatusCodes.NOT_FOUND );
        }
        return response;

    }

    async getAll() {
        const response = this.model.findAll();
        return response;

    }

    
    async update(id, data) {

        const response = await this.model.update(data, { // data --> {col: vlaue....}
            where: {
                id: id
            }
        });

        if(response[0] === 0){
            throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
        }
        return response;

    }

}

module.exports = CrudRepository;