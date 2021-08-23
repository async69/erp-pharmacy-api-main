import { Schema } from "mongoose"

const Store = new Schema({
  name: {
    type: String, unique: false
  },
  location: {
    type: String, unique: false
  },
  manufacturing_date: {
    type: String, unique: false
  },
  expiry_date: {
    type: String, unique: false
  },
  quantity: {
    type: Number, unique: false
  },
  pharmacyID: {
    type: String, unique: false
  },
  isActive: {
    type: Boolean, unique: false
  },
  isDisposed: {
    type: Boolean, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default Store