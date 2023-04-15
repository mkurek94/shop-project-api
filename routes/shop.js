const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/api/products', shopController.getProducts);

module.exports = router;