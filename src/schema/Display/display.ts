import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchDisplays: [DisplayDoc]
    fetchDisplayByID(_id: String!): DisplayDoc
  }

  extend type Mutation {
    postDisplay(input: IDisplayInput!): DisplayDoc
    editDisplay(input: IDisplayEdit!): DisplayDoc
    removeDisplay(_id: String!): DisplayDoc
    removeAllDisplays: [DisplayDoc]
  }

  type DisplayDoc {
    _id: String
    itemID: String
    quantity: Int
    location: String
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input IDisplayInput {
    itemID: String!
    quantity: Int!
    location: String!
  }

  input IDisplayEdit {
    _id: String!
    itemID: String
    quantity: Int
    location: String
  }

`