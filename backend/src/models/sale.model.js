const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SaleSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [{
    productid: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      required: true
    },
    saleprice: {
      type: Number,
      required: true
    }
  }]
}, { timestamps: { createdAt: 'createdat', updatedAt: 'updatedat' } })

module.exports = mongoose.model('Sale', SaleSchema, 'sale')