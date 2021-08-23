import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface ISIVLine {
  invoiceNumber: string
  itemID: string
  quantity: number
  totalAmount: number
}

export interface ISIVLineDoc extends ISIVLine {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface ISIVLineInput {
  invoiceNumber: string
  itemID: string
  quantity: number
  totalAmount: number
}

export interface ISIVLineEdit extends ISIVLineInput {
  _id: string
}

export interface GQLPostSIVLine {
  input: ISIVLineInput
}

export interface GQLEditSIVLine {
  input: ISIVLineEdit
}

export interface ISIVLineDocument extends ISIVLine, Document {}

export interface ISIVLineModel extends ISIVLine, Model<ISIVLineDocument> { }