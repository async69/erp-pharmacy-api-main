import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchEmployees: [EmployeeDoc]
    fetchEmployeeByID(_id: String!): EmployeeDoc
  }

  extend type Mutation {
    postEmployee(input: IEmployeeInput!): EmployeeDoc
    editEmployee(input: IEmployeeEdit!): EmployeeDoc
    removeEmployee(_id: String!): EmployeeDoc
    removeAllEmployees: [EmployeeDoc]
  }

  type EmployeeDoc {
    _id: String
    firstName: String
    lastName: String
    dateOfBirth: String
    phoneNumber: String
    salary: String
    email: String
    address: String
    userID: String
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input IEmployeeInput {
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    phoneNumber: String!
    salary: String!
    email: String!
    address: String!
    userID: String!
  }

  input IEmployeeEdit {
    _id: String!
    firstName: String
    lastName: String
    dateOfBirth: String
    phoneNumber: String
    salary: String
    email: String
    address: String
    userID: String
  }

`