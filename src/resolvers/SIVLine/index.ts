import { SIVLineModel } from "../../models/SIVLine/siv_line.model"
import { GQLPostSIVLine, GQLEditSIVLine, ISIVLineDoc, IUserID } from "../../models/SIVLine/siv_line.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(SIVLineModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const SIVLineResolver = {
  Query: {
    async fetchSIVLines(_: any, prop: any): Promise<ISIVLineDoc[]> {
      return await Fetch() as unknown as ISIVLineDoc[]
    },
    async fetchSIVLineByID(_: any, prop: IUserID): Promise<ISIVLineDoc> {
      return await FetchOne(prop._id) as unknown as ISIVLineDoc
    }
  },

  Mutation: {
    async postSIVLine(_: any, prop: GQLPostSIVLine): Promise<ISIVLineDoc> {
      return await Create(prop.input) as unknown as ISIVLineDoc
    },
    async editSIVLine(_: any, prop: GQLEditSIVLine): Promise<ISIVLineDoc> {
      return await Edit(prop.input) as unknown as ISIVLineDoc
    },
    async removeSIVLine(_: any, prop: any) {
      return await Remove(prop._id) as unknown as ISIVLineDoc
    },
    async removeAllSIVLines(_: any, prop: any) {
      return await RemoveAll() as unknown as ISIVLineDoc[]
    }
  }
}

export default SIVLineResolver