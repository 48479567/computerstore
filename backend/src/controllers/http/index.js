const { getResourceById, getResources } = require('./get.http')
const { createResource } = require('./post.http')
const { updateResource } = require('./put.http')
const { createSalePurchase } = require('./models/sale-purchase.http')

const HttpRequest = {
  get: {
    getResourceById,
    getResources
  },
  post: {
    createResource
  },
  put: {
    updateResource
  },
  models: {
    salepurchase: createSalePurchase
  }
}

module.exports = HttpRequest