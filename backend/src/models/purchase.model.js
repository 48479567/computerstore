const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PurchaseSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    productid: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    investmentprice: {
      type: Number,
      required: true
    },
    productname: {
      type: String
    },
    productindex: {
      type: Number
    }
  }]
}, { timestamps: { createdAt: 'createdat', updatedAt: 'updatedat' } })

module.exports = mongoose.model('Purchase', PurchaseSchema, 'purchase')