import { Schema } from "mongoose"

const User = new Schema({
  username: {
    type: String, unique: false
  },
  password: {
    type: String, unique: false
  },
  role: {
    type: String, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default User