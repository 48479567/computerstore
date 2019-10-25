const { Sale } = require('../models')
const { get, post } = require('../config/http/middlewares')

const getSaleById = async (req, res) => {
  return await get.getResourceById(req, res, Sale, 404)
}
const getSales = async (req, res) => {
  return await get.getResources(req, res, Sale, 404)
}

const createSale = async (req, res) => { 
  return await post.createResource(req, res, Sale, 400)
}


const sale = {
  getSaleById,
  getSales,
  createSale
}
module.exports = sale