const category = require('./category.controller')
const product = require('./product.controller')
const purchase = require('./purchase.controller')
const sale = require('./sale.controller')
const user = require('./user.controller')

const Controller = {
  category,
  product,
  purchase,
  sale,
  user
}
module.exports = Controller