import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchPharmacies: [PharmacyDoc]
    fetchPharmacyByID(_id: String!): PharmacyDoc
  }

  extend type Mutation {
    postPharmacy(input: IPharmacyInput!): PharmacyDoc
    editPharmacy(input: IPharmacyEdit!): PharmacyDoc
    removePharmacy(_id: String!): PharmacyDoc
    removeAllPharmacies: [PharmacyDoc]
  }

  type PharmacyDoc {
    _id: String
    name: String
    description: String
    location: String
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input IPharmacyInput {
    name: String!
    description: String!
    location: String!
  }

  input IPharmacyEdit {
    _id: String!
    name: String
    description: String
    location: String
  }

`