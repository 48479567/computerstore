const { Product } = require('../models')
const { get, post } = require('../config/http/middlewares')

const getProductById = async (req, res) => {
  return await get.getResourceById(req, res, Product, 404)
}
const getProducts = async (req, res) => {
  return await get.getResources(req, res, Product, 404)
}

const createProduct = async (req, res) => { 
  return await post.createResource(req, res, Product, 400)
}

const product = {
  getProductById,
  getProducts,
  createProduct
}
module.exports = product