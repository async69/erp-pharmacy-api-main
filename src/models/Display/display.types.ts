import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IDisplay {
  itemID: string
  quantity: string
  location: string
}

export interface IDisplayDoc extends IDisplay {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IDisplayInput {
  itemID: string
  quantity: string
  location: string
}

export interface IDisplayEdit extends IDisplayInput {
  _id: string
}

export interface GQLPostDisplay {
  input: IDisplayInput
}

export interface GQLEditDisplay {
  input: IDisplayEdit
}

export interface IDisplayDocument extends IDisplay, Document {}

export interface IDisplayModel extends IDisplay, Model<IDisplayDocument> { }