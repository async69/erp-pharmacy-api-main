import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchSIVs: [SIVDoc]
    fetchSIVByID(_id: String!): SIVDoc
  }

  extend type Mutation {
    postSIV(input: ISIVInput!): SIVDoc
    editSIV(input: ISIVEdit!): SIVDoc
    removeSIV(_id: String!): SIVDoc
    removeAllSIVs: [SIVDoc]
  }

  type SIVDoc {
    _id: String
    date: String
    siv_lines: [SIVLineDoc]
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input ISIVInput {
    date: String!
    siv_lines: [ISIVLineInput]!
  }

  input ISIVEdit {
    _id: String!
    date: String
    siv_lines: [ISIVLineInput]
  }

`