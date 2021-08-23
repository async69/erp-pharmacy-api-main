import { Schema } from "mongoose"

const Pharmacy = new Schema({
  name: {
    type: String, unique: false
  },
  description: {
    type: String, unique: false
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

export default Pharmacy