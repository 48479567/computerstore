const router = require('express').Router()
const { Product } = require('../models')

const { get, post, put, del } = require('../controllers/http')

router.get('/', (req, res) => get.getResources(req, res, Product, 404))
router.get('/:id', (req, res) => get.getResourceById(req, res, Product, 404))
router.post('/', (req, res) => post.createResource(req, res, Product, 400))
router.put('/:id')

module.exports = router