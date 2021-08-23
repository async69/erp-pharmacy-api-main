import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"
import { ISIVLineDoc } from "../SIVLine/siv_line.types"

export { Query, IUserID }

export interface ISIV {
  date: string
  siv_lines: ISIVLineDoc[]
}

export interface ISIVDoc extends ISIV {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface ISIVInput {
  date: string
  siv_lines: ISIVLineDoc[]
}

export interface ISIVEdit extends ISIVInput {
  _id: string
}

export interface GQLPostSIV {
  input: ISIVInput
}

export interface GQLEditSIV {
  input: ISIVEdit
}

export interface ISIVDocument extends ISIV, Document {}

export interface ISIVModel extends ISIV, Model<ISIVDocument> { }