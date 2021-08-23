import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchGRNs: [GRNDoc]
    fetchGRNByID(_id: String!): GRNDoc
  }

  extend type Mutation {
    postGRN(input: IGRNInput!): GRNDoc
    editGRN(input: IGRNEdit!): GRNDoc
    removeGRN(_id: String!): GRNDoc
    removeAllGRNs: [GRNDoc]
  }

  type GRNDoc {
    _id: String
    date: String
    batchNumber: String
    grn_lines: [GRNLineDoc]
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input IGRNInput {
    date: String!
    batchNumber: String!
    grn_lines: [IGRNLineInput]!
  }

  input IGRNEdit {
    _id: String!
    date: String
    batchNumber: String
    grn_lines: [IGRNLineInput]
  }

`