'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const clothes = require('./clothes.js');
const food = require('./food.js');
const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
let sequlizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};
let sequelize = new Sequelize(POSTGRES_URL, sequlizeOptions);

module.exports = {
    db: sequelize,
    Clothes: clothes(sequelize, DataTypes),
    Food: food(sequelize, DataTypes),
}