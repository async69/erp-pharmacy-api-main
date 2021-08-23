import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IItem {
  name: string
  scientific_name: string
  storage_temperature: string
  manufacturer: string
  price: number
  category: string
  storeID: string
  displayID: string
}

export interface IItemDoc extends IItem {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IItemInput {
  name: string
  scientific_name: string
  storage_temperature: string
  manufacturer: string
  price: number
  category: string
  storeID: string
  displayID: string
}

export interface IItemEdit extends IItemInput {
  _id: string
}

export interface GQLPostItem {
  input: IItemInput
}

export interface GQLEditItem {
  input: IItemEdit
}

export interface IItemDocument extends IItem, Document {}

export interface IItemModel extends IItem, Model<IItemDocument> { }