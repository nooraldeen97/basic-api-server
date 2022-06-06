"use strict";
require("dotenv").config();
const { Sequelize , DataTypes } = require("sequelize");
const Food=require("./food.model")

// const DATABASE_URL=process.env.DATABASE_URL;


// Connects to our database depending on the URI as an environmental variable
// console.log(process.env.NODE_ENV);
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// const optionalObject={};
// our connection object
// We will configure our connection options for production
let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
        }
        : {};

const sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);



module.exports={
    db:sequelize, //for real connection and will use it in index.js
    Food:Food(sequelize,DataTypes) // for creating the table and will use it in our routes
}










