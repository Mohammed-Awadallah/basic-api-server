'use strict';
const express = require('express');
const { Clothes } = require('../models/index');
const clothesRouter = express.Router();
clothesRouter.get('/clothes', getClothes);
clothesRouter.get('/clothes/:id', getClothingByID);
clothesRouter.post('/clothes', createClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);

async function getClothes(req, res) {
    const allClothes = await Clothes.findAll();
    res.status(200).json(allClothes);
}
async function getClothingByID(req, res) {
    const id = parseInt(req.params.id);
    const foundClothing = await Clothes.findOne({ where: { id: id } });
    res.status(200).json(foundClothing);
}

async function createClothes(req, res) {
    const obj = req.body;
    let newClothe = await Clothes.create(obj);
    res.status(201).json(newClothe);
}

async function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let foundClothing = await Clothes.findOne({ where: { id: id } });
    let updatedClothing = await foundClothing.update(obj);
    res.status(201).json(updatedClothing);
}

async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    const deletedClothing = await Clothes.destroy({ where: { id } });
    res.status(204).json(deletedClothing);
}

module.exports = clothesRouter;