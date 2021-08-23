import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchStores: [StoreDoc]
    fetchStoreByID(_id: String!): StoreDoc
  }

  extend type Mutation {
    postStore(input: IStoreInput!): StoreDoc
    editStore(input: IStoreEdit!): StoreDoc
    removeStore(_id: String!): StoreDoc
    removeAllStores: [StoreDoc]
  }

  type StoreDoc {
    _id: String
    name: String
    location: String
    manufacturing_date: String
    expiry_date: String
    quantity: Int
    pharmacyID: String
    isActive: Boolean
    isDisposed: Boolean
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input IStoreInput {
    name: String!
    location: String!
    manufacturing_date: String!
    expiry_date: String!
    quantity: Int!
    pharmacyID: String!
    isActive: Boolean!
    isDisposed: Boolean!
  }

  input IStoreEdit {
    _id: String!
    name: String
    location: String
    manufacturing_date: String
    expiry_date: String
    quantity: Int
    pharmacyID: String
    isActive: Boolean
    isDisposed: Boolean
  }

`