const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  investment: {
    type: Number,
    default: 0
  },
  gain: {
    type: Number,
    default: 0
  },
  image: {
    type: String
  }

}, { timestamps: { createdAt: 'createat', updatedAt: 'updateat'} })

module.exports = mongoose.model('Category', CategorySchema, 'category')