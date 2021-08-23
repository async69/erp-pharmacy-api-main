import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchGRNLines: [GRNLineDoc]
    fetchGRNLineByID(_id: String!): GRNLineDoc
  }

  extend type Mutation {
    postGRNLine(input: IGRNLineInput!): GRNLineDoc
    editGRNLine(input: IGRNLineEdit!): GRNLineDoc
    removeGRNLine(_id: String!): GRNLineDoc
    removeAllGRNLines: [GRNLineDoc]
  }

  type GRNLineDoc {
    _id: String
    itemID: String
    quantity: Int
    totalAmount: Float
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input IGRNLineInput {
    itemID: String!
    quantity: Int!
    totalAmount: Float!
  }

  input IGRNLineEdit {
    _id: String!
    itemID: String
    quantity: Int
    totalAmount: Float
  }

`