const express = require('express')
const router = express.Router()

router.use('/category', require('./category.router'))
router.use('/product', require('./product.router'))
router.use('/purchase', require('./purchase.router'))
router.use('/sale', require('./sale.router'))
router.use('/user', require('./user.router'))


module.exports = router