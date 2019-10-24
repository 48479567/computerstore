const Category = require('../models')
const { getResourceById } = require('../config')

const getCategory = async (req, res) => { 
  return await getResourceById(req, res, Category, 404)
}

const createCategory = async (req, res) => { 
  try {
    
  } catch (error) {
    
  }
}

