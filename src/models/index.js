"use strict";
require("dotenv").config();
const { Sequelize , DataTypes } = require("sequelize");
const Collection = require("./collection-class");
const Food=require("./food.model")
const Clothes=require("./clothes.model");
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


const foodTable=new Collection(Food(sequelize,DataTypes));
const clothesTable=new Collection(Clothes(sequelize,DataTypes));

module.exports={
    db:sequelize, //for real connection and will use it in index.js
    Food:foodTable, // for creating the table and will use it in our routes
    Clothes:clothesTable // for creating the table and will use it in our routes
}










