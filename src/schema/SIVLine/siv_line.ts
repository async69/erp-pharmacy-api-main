import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchSIVLines: [SIVLineDoc]
    fetchSIVLineByID(_id: String!): SIVLineDoc
  }

  extend type Mutation {
    postSIVLine(input: ISIVLineInput!): SIVLineDoc
    editSIVLine(input: ISIVLineEdit!): SIVLineDoc
    removeSIVLine(_id: String!): SIVLineDoc
    removeAllSIVLines: [SIVLineDoc]
  }

  type SIVLineDoc {
    _id: String
    invoiceNumber: String
    itemID: String
    quantity: Int
    totalAmount: Float
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input ISIVLineInput {
    invoiceNumber: String!
    itemID: String!
    quantity: Int!
    totalAmount: Float!
  }

  input ISIVLineEdit {
    _id: String!
    invoiceNumber: String
    itemID: String
    quantity: Int
    totalAmount: Float
  }

`