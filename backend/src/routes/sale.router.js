const router = require('express').Router()
const { Sale } = require('../models')

const { get, post, put, del } = require('../controllers/http')

router.get('/', (req, res) => get.getResources(req, res, Sale, 404))
router.get('/:id', (req, res) => get.getResourceById(req, res, Sale, 404))
router.post('/', (req, res) => post.createResource(req, res, Sale, 400))
router.put('/:id')

module.exports = router
