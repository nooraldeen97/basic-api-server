"use strict";

const express=require("express");

const router=express.Router();

const {Food}=require("../models/index");

router.get("/food",getAllHandler)
router.get("/food/:id",getOneHandler)
router.post("/food",addFoodHandler)
router.put("/food/:id",updateFoodHandler)
router.delete("/food/:id",deleteFoodHandler)

async function getAllHandler(req,res){

    let allFood=await Food.readRecord();
    res.status(200).send(allFood);

    // Food.findAll().then(response=>{
    //     res.status(200).send(response)
    // }).catch(console.error)
}

async function getOneHandler(req,res){
    let id=req.params.id;
    let oneFood=await Food.readRecord(id);
    res.status(200).send(oneFood);
}

async function addFoodHandler(req,res){
    
    let newFood=req.body;
    let addedFood = await Food.createRecord(newFood);
    res.status(201).send(addedFood);
}

async function updateFoodHandler(req,res){

    let foodDate=req.body;
    let id=req.params.id;
    let oneFood=await Food.updateRecord(id,foodDate);
    res.send(oneFood);
}

async function deleteFoodHandler(req,res){
    let id=req.params.id;
    let deletedFood=await Food.deleteRecord(id);
    res.status(204).send(deletedFood);
}

module.exports=router;