const express = require('express');

const router = express.Router();

router.use('/countries', require('./countries'));
router.use('/currencies', require('./currencies'));
router.use('/product', require('./product.routes'));
router.use('/places', require('./places.routes'));
router.use('/application', require('./app_update.routes'));

module.exports = router;
