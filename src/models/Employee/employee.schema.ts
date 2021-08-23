import { Schema } from "mongoose"

const EmployeeSchema = new Schema({
  firstName: {
    type: String, unique: false
  },
  lastName: {
    type: String, unique: false
  },
  dateOfBirth: {
    type: String, unique: false
  },
  phoneNumber: {
    type: String, unique: false
  },
  salary: {
    type: String, unique: false
  },
  email: {
    type: String, unique: false
  },
  address: {
    type: String, unique: false
  },
  userID: {
    type: String, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default EmployeeSchema