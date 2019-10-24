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
    required: true
  },
  investment: {
    type: Number
  },
  gain: {
    type: Number
  },
  image: {
    type: String
  }

}, { timestamps: { createdAt: 'createat'} })

module.exports = mongoose.model('Category', CategorySchema, 'category')