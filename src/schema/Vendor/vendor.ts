import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchVendors: [VendorDoc]
    fetchVendorByID(_id: String!): VendorDoc
  }

  extend type Mutation {
    postVendor(input: IVendorInput!): VendorDoc
    editVendor(input: IVendorEdit!): VendorDoc
    removeVendor(_id: String!): VendorDoc
    removeAllVendors: [VendorDoc]
  }

  type VendorDoc {
    _id: String
    name: String
    location: String
    phoneNumber: String
    companyName: String
    email: String
    address: String
    city: String
    pharmacyID: String
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input IVendorInput {
    name: String!
    location: String!
    phoneNumber: String!
    companyName: String!
    email: String!
    address: String!
    city: String!
    pharmacyID: String!
  }

  input IVendorEdit {
    _id: String!
    name: String
    location: String
    phoneNumber: String
    companyName: String
    email: String
    address: String
    city: String
    pharmacyID: String
  }

`