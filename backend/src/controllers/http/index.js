const { getResourceById, getResources } = require('./get.http')
const { createResource } = require('./post.http')

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