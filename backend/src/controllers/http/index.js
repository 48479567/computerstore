const { getResourceById, getResources } = require('./get.http')
const { createResource } = require('./post.http')
const { updateResource } = require('./put.http')

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
  }
}

module.exports = HttpRequest