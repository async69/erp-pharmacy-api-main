import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IStore {
  itemID: string
  name: string
  location: string
  manufacturing_date: string
  expiry_date: string
  quantity: number
  pharmacyID: string
  isActive: boolean
  isDisposed: boolean
}

export interface IStoreDoc extends IStore {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IStoreInput {
  itemID: string
  name: string
  location: string
  manufacturing_date: string
  expiry_date: string
  quantity: number
  pharmacyID: string
  isActive: boolean
  isDisposed: boolean
}

export interface IStoreEdit extends IStoreInput {
  _id: string
}

export interface GQLPostStore {
  input: IStoreInput
}

export interface GQLEditStore {
  input: IStoreEdit
}

export interface IStoreDocument extends IStore, Document {}

export interface IStoreModel extends IStore, Model<IStoreDocument> { }