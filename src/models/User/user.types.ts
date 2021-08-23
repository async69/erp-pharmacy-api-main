import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IUser {
  username: string
  password: string
  role: string
}

export interface IUserDoc extends IUser {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IUserInput {
  username: string
  password: string
  role: string
}

export interface IUserEdit extends IUserInput {
  _id: string
}

export interface GQLPostUser {
  input: IUserInput
}

export interface GQLEditUser {
  input: IUserEdit
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends IUser, Model<IUserDocument> { }