import { Schema } from "mongoose"

const Item = new Schema({
  name: {
    type: String, unique: false
  },
  scientific_name: {
    type: String, unique: false
  },
  storage_temperature: {
    type: String, unique: false
  },
  manufacturer: {
    type: String, unique: false
  },
  price: {
    type: Number, unique: false
  },
  category: {
    type: String, unique: false
  },
  storeID: {
    type: String, unique: false
  },
  displayID: {
    type: String, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default Item