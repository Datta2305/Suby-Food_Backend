
const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Route to add a product
router.post('/add-product/:firmId', productController.addProduct);
router.get('/:firmId/products', productController.getProductByFirm);
router.delete('/:productId', productController.deleteProductById);

module.exports = router;