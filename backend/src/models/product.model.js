const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  investment: {
    type: Number
  },
  gain: {
    type: Number
  },
  mark: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  categoryid: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  features: {
    type: Schema.Types.Mixed
  }

}, { timestamps: { createdAt: 'createat' } })



module.exports = mongoose.model('Product', ProductSchema, 'product')