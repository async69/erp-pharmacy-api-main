import { GRNModel } from "../../models/GRN/grn.model"
import { GQLPostGRN, GQLEditGRN, IGRNDoc, IUserID } from "../../models/GRN/grn.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(GRNModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const GRNResolver = {
  Query: {
    async fetchGRNs(_: any, prop: any): Promise<IGRNDoc[]> {
      return await Fetch() as unknown as IGRNDoc[]
    },
    async fetchGRNByID(_: any, prop: IUserID): Promise<IGRNDoc> {
      return await FetchOne(prop._id) as unknown as IGRNDoc
    }
  },

  Mutation: {
    async postGRN(_: any, prop: GQLPostGRN): Promise<IGRNDoc> {
      return await Create(prop.input) as unknown as IGRNDoc
    },
    async editGRN(_: any, prop: GQLEditGRN): Promise<IGRNDoc> {
      return await Edit(prop.input) as unknown as IGRNDoc
    },
    async removeGRN(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IGRNDoc
    },
    async removeAllGRNs(_: any, prop: any) {
      return await RemoveAll() as unknown as IGRNDoc[]
    }
  }
}

export default GRNResolver