import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IGRNLine {
  itemID: string
  quantity: number
  totalAmount: number
}

export interface IGRNLineDoc extends IGRNLine {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IGRNLineInput {
  itemID: string
  quantity: number
  totalAmount: number
}

export interface IGRNLineEdit extends IGRNLineInput {
  _id: string
}

export interface GQLPostGRNLine {
  input: IGRNLineInput
}

export interface GQLEditGRNLine {
  input: IGRNLineEdit
}

export interface IGRNLineDocument extends IGRNLine, Document {}

export interface IGRNLineModel extends IGRNLine, Model<IGRNLineDocument> { }