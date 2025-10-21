const express = require('express');
const router = express.Router();

const placesController = require('../../controllers/api/places.controller.js');

router.get('/', placesController.getPlaces);

router.post('/add-place', placesController.addPlace);

module.exports = router;