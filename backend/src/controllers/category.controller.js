const Category = require('../models')
const { getResourceById, createResource } = require('../config')

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.findById(id)
    return res.json(category)
  } catch (error) {
    return await res.status(404).json({
      ok: false,
      error
    })
  }
}


const createCategory = async (req, res) => { 
  return await createResource(req, res, Category, 400)
}

module.exports = {
  getCategoryById,
  createCategory
}