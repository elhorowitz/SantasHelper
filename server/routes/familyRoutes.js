const express = require('express');
const FamilyController = require('../controllers/familyController');

const FamilyRoutes = new express.Router();

FamilyRoutes.get('/api/family', FamilyController.read);

FamilyRoutes.post('/api/family', FamilyController.create);

FamilyRoutes.put('/api/family/:id', FamilyController.update);

FamilyRoutes.delete('/api/family/:id', FamilyController.destroy);

module.exports = FamilyRoutes;
