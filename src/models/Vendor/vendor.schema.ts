import { Schema } from "mongoose"

const Vendor = new Schema({
  name: {
    type: String, unique: false
  },
  location: {
    type: String, unique: false
  },
  phoneNumber: {
    type: String, unique: false
  },
  companyName: {
    type: String, unique: false
  },
  email: {
    type: String, unique: false
  },
  address: {
    type: String, unique: false
  },
  city: {
    type: String, unique: false
  },
  pharmacyID: {
    type: String, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default Vendor