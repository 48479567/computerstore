const router = require('express').Router()
const { Purchase } = require('../models')

const { get, post, put, del } = require('../controllers/http')

router.get('/', (req, res) => get.getResources(req, res, Purchase, 404))
router.get('/:id', (req, res) => get.getResourceById(req, res, Purchase, 404))
router.post('/', (req, res) => post.createResource(req, res, Purchase, 400))
router.put('/:id')

module.exports = router