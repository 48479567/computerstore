const router = require('express').Router()
const { Category } = require('../models')

const { get, post, put, del } = require('../controllers/http')

router.get('/', (req, res) => get.getResources(req, res, Category, 404))
router.get('/:id', (req, res) => get.getResourceById(req, res, Category, 404))
router.post('/', (req, res) => post.createResource(req, res, Category, 400))
router.put('/:id', (req, res) => put.updateResource(req, res, Category, 400))

module.exports = router