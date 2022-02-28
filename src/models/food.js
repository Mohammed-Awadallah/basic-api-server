
'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food', {
    foodName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foodOrigin: {
        type: DataTypes.STRING
    }
});

module.exports = Food;