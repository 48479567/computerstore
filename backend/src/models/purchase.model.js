const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PurchaseSchema = new Schema({
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
    investment: {
      type: Number,
      required: true
    }
  }]
}, { timestamps: true })

module.exports = mongoose.model('Purchase', PurchaseSchema, 'purchase')