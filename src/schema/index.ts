import { gql } from "apollo-server-express"
import User from "./User/user"
import Employee from "./Employee/employee"
import Display from "./Display/display"
import Pharmacy from "./Pharmacy/pharmacy"
import Store from "./Store/store"
import Vendor from "./Vendor/vendor"
import Item from "./Item/item"
import SIVLine from "./SIVLine/siv_line"
import SIV from "./SIV/siv"
import GRNLine from "./GRNLine/grn_line"
import GRN from "./GRN/grn"

const Linker = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }

  type ErrorType {
    type: Int
    message: String
  }
`

export default [
  Linker, User, Employee, Display, Pharmacy,
  Store, Vendor, Item, SIVLine, SIV, GRNLine, GRN
]