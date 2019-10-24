const { Category } = require('../models')
const { get, post } = require('../config/http/middlewares')

const getCategoryById = async (req, res) => {
  return await get.getResourceById(req, res, Category, 404)
}
const getCategories = async (req, res) => {
  return await get.getResources(req, res, Category, 404)
}

const createCategory = async (req, res) => { 
  return await post.createResource(req, res, Category, 400)
}

module.exports = {
  getCategoryById,
  getCategories,
  createCategory
}
