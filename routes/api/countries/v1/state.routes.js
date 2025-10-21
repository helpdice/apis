const express = require('express');
const router = express.Router();
// const auth = require('../../../config/auth');
const stateController = require('../../../../controllers/api/countries/v1/state.controller');

router.get('', stateController.getAllStates);

module.exports = router;