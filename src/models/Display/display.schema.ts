import { Schema } from "mongoose"

const Display = new Schema({
  itemID: {
    type: String, unique: false
  },
  quantity: {
    type: Number, unique: false
  },
  location: {
    type: String, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default Display