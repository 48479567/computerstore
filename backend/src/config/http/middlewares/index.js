const { getResourceById, getResources } = require('./get.middleware.http')
const { createResource } = require('./post.middleware.http')

const HttpRequest = {
  get: {
    getResourceById,
    getResources
  },
  post: {
    createResource
  }
}

module.exports = HttpRequest