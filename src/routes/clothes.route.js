"use strict";

const express=require("express");

const clothRouter=express.Router();

const {Clothes}=require("../models/index");

clothRouter.get("/clothes",getAllHandler)
clothRouter.get("/clothes/:id",getOneHandler)
clothRouter.post("/clothes",addClothesHandler)
clothRouter.put("/clothes/:id",updateClothesHandler)
clothRouter.delete("/clothes/:id",deleteClothesHandler)

async function getAllHandler(req,res){

    // let allFood=await Food.findAll();
    // res.status(200).send(allFood);

    Clothes.readRecord().then(response=>{
        res.status(200).send(response)
    }).catch(console.error)
}

async function getOneHandler(req,res){
    let id=req.params.id;
    let oneCloth=await Clothes.readRecord(id);
    res.status(200).send(oneCloth);
}

async function addClothesHandler(req,res){
    
    let newCloth=req.body;
    let addedCloth = await Clothes.createRecord(newCloth);
    res.status(201).send(addedCloth);
}

async function updateClothesHandler(req,res){

    let clothesDate=req.body;
    let id=req.params.id;
    let updatedClothes= await Clothes.updateRecord(id,clothesDate);
    res.send(updatedClothes);
}

async function deleteClothesHandler(req,res){
    let id=req.params.id;
    let deletedCloth=await Clothes.deleteRecord(id);
    res.status(204).send(deletedCloth);
}

module.exports=clothRouter;