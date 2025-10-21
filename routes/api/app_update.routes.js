const express = require('express');
const router = express.Router();

const appUpddateController = require('../../controllers/api/app_update.controller');

router.get('/check-updates', appUpddateController.checkUpdate);

router.post('/add', appUpddateController.addApplication);

module.exports = router;