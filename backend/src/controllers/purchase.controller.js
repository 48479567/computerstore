const { Purchase } = require('../models')
const { get, post } = require('../config/http/middlewares')

const getPurchaseById = async (req, res) => {
  return await get.getResourceById(req, res, Purchase, 404)
}
const getPurchases = async (req, res) => {
  return await get.getResources(req, res, Purchase, 404)
}

const createPurchase = async (req, res) => { 
  return await post.createResource(req, res, Purchase, 400)
}

module.exports = {
  getPurchaseById,
  getPurchases,
  createPurchase
}