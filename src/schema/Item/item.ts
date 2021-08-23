import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchItems: [ItemDoc]
    fetchItemByID(_id: String!): ItemDoc
  }

  extend type Mutation {
    postItem(input: IItemInput!): ItemDoc
    editItem(input: IItemEdit!): ItemDoc
    removeItem(_id: String!): ItemDoc
    removeAllItems: [ItemDoc]
  }

  type ItemDoc {
    _id: String
    name: String
    scientific_name: String
    storage_temperature: String
    manufacturer: String
    price: Float
    category: String
    storeID: String
    displayID: String
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input IItemInput {
    name: String!
    scientific_name: String!
    storage_temperature: String!
    manufacturer: String!
    price: Float!
    category: String!
    storeID: String!
    displayID: String!
  }

  input IItemEdit {
    _id: String!
    name: String
    scientific_name: String
    storage_temperature: String
    manufacturer: String
    price: Float
    category: String
    storeID: String
    displayID: String
  }

`