const router = require('express').Router()
const { User } = require('../models')

const { get, post, put, del } = require('../controllers/http')

router.get('/', (req, res) => get.getResources(req, res, User, 404))
router.get('/:id', (req, res) => get.getResourceById(req, res, User, 404))
router.post('/', (req, res) => post.createResource(req, res, User, 400))
router.post('/',)
router.put('/:id')

module.exports = router

