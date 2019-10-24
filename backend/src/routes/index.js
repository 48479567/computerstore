const express = require('express')
const router = express.Router()

const { category, product, purchase, sale, user } = require('../controllers')

router.get('/users', user.getUsers)
router.get('/user/:id', user.getUserById)
router.get('/products', product.getProducts)
router.get('/product/:id', product.getProductById)
router.get('/categories', category.getCategories)
router.get('/category/:id', category.getCategoryById)
router.get('/purchases', purchase.getPurchases)
router.get('/purchase/:id', purchase.getPurchaseById)
router.get('/sales', sale.getSales)
router.get('/sale/:id', sale.getSaleById)


router.post('/user',)
router.post('/product', product.createProduct)
router.post('/category', category.createCategory)
router.post('/purchase', purchase.createPurchase)
router.post('/sale', sale.createSale)

router.post('/user/:id')

router.put('/user/:id')
router.put('/user/:id')
router.put('/product/:id')
router.put('/category/:id')
router.put('/sale/:id')

module.exports = router