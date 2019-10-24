const { getCategoryById, getCategories, createCategory } = require('./category.controller')
const { getProductById, getProducts, createProduct } = require('./product.controller')
const { getPurchaseById, getPurchases, createPurchase } = require('./purchase.controller')
const { getSaleById, getSales, createSale } = require('./sale.controller')
const { getUserById, getUsers, createUser } = require('./user.controller')

const Controller = {
  category: {
    getCategoryById,
    getCategories,
    createCategory
  },
  product: {
    getProductById,
    getProducts,
    createProduct
  },
  purchase: {
    getPurchaseById,
    getPurchases,
    createPurchase
  },
  sale: {
    getSaleById,
    getSales,
    createSale
  },
  user: {
    getUserById,
    getUsers,
    createUser
  }
}

module.exports = Controller