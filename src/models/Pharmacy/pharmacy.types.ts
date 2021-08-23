import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IPharmacy {
  name: string
  description: string
  location: string
}

export interface IPharmacyDoc extends IPharmacy {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IPharmacyInput {
  name: string
  description: string
  location: string
}

export interface IPharmacyEdit extends IPharmacyInput {
  _id: string
}

export interface GQLPostPharmacy {
  input: IPharmacyInput
}

export interface GQLEditPharmacy {
  input: IPharmacyEdit
}

export interface IPharmacyDocument extends IPharmacy, Document {}

export interface IPharmacyModel extends IPharmacy, Model<IPharmacyDocument> { }