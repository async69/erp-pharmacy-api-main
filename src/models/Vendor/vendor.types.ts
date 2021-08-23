import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IVendor {
  name: string
  location: string
  phoneNumber: string
  companyName: string
  email: string
  address: string
  city: string
  pharmacyID: string
}

export interface IVendorDoc extends IVendor {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IVendorInput {
  name: string
  location: string
  phoneNumber: string
  companyName: string
  email: string
  address: string
  city: string
  pharmacyID: string
}

export interface IVendorEdit extends IVendorInput {
  _id: string
}

export interface GQLPostVendor {
  input: IVendorInput
}

export interface GQLEditVendor {
  input: IVendorEdit
}

export interface IVendorDocument extends IVendor, Document {}

export interface IVendorModel extends IVendor, Model<IVendorDocument> { }