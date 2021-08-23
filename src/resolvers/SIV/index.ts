import { SIVModel } from "../../models/SIV/siv.model"
import { GQLPostSIV, GQLEditSIV, ISIVDoc, IUserID } from "../../models/SIV/siv.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(SIVModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const SIVResolver = {
  Query: {
    async fetchSIVs(_: any, prop: any): Promise<ISIVDoc[]> {
      return await Fetch() as unknown as ISIVDoc[]
    },
    async fetchSIVByID(_: any, prop: IUserID): Promise<ISIVDoc> {
      return await FetchOne(prop._id) as unknown as ISIVDoc
    }
  },

  Mutation: {
    async postSIV(_: any, prop: GQLPostSIV): Promise<ISIVDoc> {
      return await Create(prop.input) as unknown as ISIVDoc
    },
    async editSIV(_: any, prop: GQLEditSIV): Promise<ISIVDoc> {
      return await Edit(prop.input) as unknown as ISIVDoc
    },
    async removeSIV(_: any, prop: any) {
      return await Remove(prop._id) as unknown as ISIVDoc
    },
    async removeAllSIVs(_: any, prop: any) {
      return await RemoveAll() as unknown as ISIVDoc[]
    }
  }
}

export default SIVResolver