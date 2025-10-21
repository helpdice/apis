const express = require('express');
const router = express.Router();
const countryController = require('../../../../controllers/api/countries/v1/country.controller');

router.use('/', require('./country.routes'));
router.use('/city', require('./city.routes'));
router.use('/state', require('./state.routes'));
router.get('/address', countryController.getAddress);

module.exports = router;