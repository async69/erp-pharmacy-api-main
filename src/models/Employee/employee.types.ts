import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IEmployee {
  firstName: string
  lastName: string
  dateOfBirth: string
  phoneNumber: string
  salary: string
  email: string
  address: string
  userID: string
}

export interface IEmployeeDoc extends IEmployee {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IEmployeeInput {
  firstName: string
  lastName: string
  dateOfBirth: string
  phoneNumber: string
  salary: string
  email: string
  address: string
  userID: string
}

export interface IEmployeeEdit extends IEmployeeInput {
  _id: string
}

export interface GQLPostEmployee {
  input: IEmployeeInput
}

export interface GQLEditEmployee {
  input: IEmployeeEdit
}

export interface IEmployeeDocument extends IEmployee, Document {}

export interface IEmployeeModel extends IEmployee, Model<IEmployeeDocument> { }