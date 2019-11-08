const router = require('express').Router()
const { Purchase } = require('../models')

const { get, post, put, del, models } = require('../controllers/http')

const userId = '5dc36b934967ed31cc076620';

router.get('/', (req, res) => get.getResources(req, res, Purchase, 404))
router.get('/:id', (req, res) => get.getResourceById(req, res, Purchase, 404))
router.post('/', (req, res) => models.salepurchase(req, res, Purchase, 400, { operation: -1, selector: 'investment' }))

router.put('/:id', (req, res) => put.updateResource(req, res, Purchase, 400))

module.exports = router