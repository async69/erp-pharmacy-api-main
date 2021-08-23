import { Schema } from "mongoose"

const SIVLineSchema = new Schema({
  invoiceNumber: {
    type: String, unique: false
  },
  itemID: {
    type: String, unique: false
  },
  quantity: {
    type: Number, unique: false
  },
  totalAmount: {
    type: Number, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default SIVLineSchema