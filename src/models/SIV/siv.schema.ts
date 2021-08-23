import { Schema } from "mongoose"

const SIV = new Schema({
  date: {
    type: String, unique: false
  },
  siv_lines: [{
    type: Object, unique: false
  }],
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default SIV