import { GRNLineModel } from "../../models/GRNLine/grn_line.model"
import { GQLPostGRNLine, GQLEditGRNLine, IGRNLineDoc, IUserID } from "../../models/GRNLine/grn_line.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(GRNLineModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const GRNLineResolver = {
  Query: {
    async fetchGRNLines(_: any, prop: any): Promise<IGRNLineDoc[]> {
      return await Fetch() as unknown as IGRNLineDoc[]
    },
    async fetchGRNLineByID(_: any, prop: IUserID): Promise<IGRNLineDoc> {
      return await FetchOne(prop._id) as unknown as IGRNLineDoc
    }
  },

  Mutation: {
    async postGRNLine(_: any, prop: GQLPostGRNLine): Promise<IGRNLineDoc> {
      return await Create(prop.input) as unknown as IGRNLineDoc
    },
    async editGRNLine(_: any, prop: GQLEditGRNLine): Promise<IGRNLineDoc> {
      return await Edit(prop.input) as unknown as IGRNLineDoc
    },
    async removeGRNLine(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IGRNLineDoc
    },
    async removeAllGRNLines(_: any, prop: any) {
      return await RemoveAll() as unknown as IGRNLineDoc[]
    }
  }
}

export default GRNLineResolver