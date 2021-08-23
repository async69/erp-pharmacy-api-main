import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchUsers: [UserDoc]
    fetchUserByID(_id: String!): UserDoc
  }

  extend type Mutation {
    postUser(input: IUserInput!): UserDoc
    editUser(input: IUserEdit!): UserDoc
    removeUser(_id: String!): UserDoc
    removeAllUsers: [UserDoc]
  }

  type UserDoc {
    _id: String
    username: String
    password: String
    role: String
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input IUserInput {
    username: String!
    password: String!
    role: String!
  }

  input IUserEdit {
    _id: String!
    username: String
    password: String
    role: String
  }

`