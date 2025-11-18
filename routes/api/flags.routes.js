const express = require('express');
const router = express.Router();
const flagController = require('../../controllers/flags.controller');

router.get('/', flagController.getAllFlags);

module.exports = router;