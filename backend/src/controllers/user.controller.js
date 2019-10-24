const { User } = require('../models')
const { get, post } = require('../config/http/middlewares')

const getUserById = async (req, res) => {
  return await get.getResourceById(req, res, User, 404)
}
const getUsers = async (req, res) => {
  return await get.getResources(req, res, User, 404)
}

const createUser = async (req, res) => { 
  return await post.createResource(req, res, User, 400)
}

module.exports = {
  getUserById,
  getUsers,
  createUser
}