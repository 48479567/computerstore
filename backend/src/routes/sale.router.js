const router = require('express').Router()
const { Sale, Product } = require('../models')

const { get, post, put, del, models } = require('../controllers/http')

const userId = '5dc36b934967ed31cc076620';

router.get('/', (req, res) => get.getResources(req, res, Sale, 404))
router.get('/:id', (req, res) => get.getResourceById(req, res, Sale, 404))
router.post('/', (req, res) => models.salepurchase(req, res, Sale, 400, { operation: 1, selector: 'sale' }))
router.put('/:id', (req, res) => put.updateResource(req, res, Sale, 400))

module.exports = router
