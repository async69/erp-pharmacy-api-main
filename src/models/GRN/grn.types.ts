import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"
import { IGRNLineDoc } from "../GRNLine/grn_line.types"

export { Query, IUserID }

export interface IGRN {
  date: string
  batchNumber: string
  grn_lines: IGRNLineDoc[]
}

export interface IGRNDoc extends IGRN {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IGRNInput {
  date: string
  batchNumber: string
  grn_lines: IGRNLineDoc[]
}

export interface IGRNEdit extends IGRNInput {
  _id: string
}

export interface GQLPostGRN {
  input: IGRNInput
}

export interface GQLEditGRN {
  input: IGRNEdit
}

export interface IGRNDocument extends IGRN, Document {}

export interface IGRNModel extends IGRN, Model<IGRNDocument> { }