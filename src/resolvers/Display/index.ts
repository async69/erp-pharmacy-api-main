import { DisplayModel } from "../../models/Display/display.model"
import { GQLPostDisplay, GQLEditDisplay, IDisplayDoc, IUserID } from "../../models/Display/display.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(DisplayModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const DisplayResolver = {
  Query: {
    async fetchDisplays(_: any, prop: any): Promise<IDisplayDoc[]> {
      return await Fetch() as unknown as IDisplayDoc[]
    },
    async fetchDisplayByID(_: any, prop: IUserID): Promise<IDisplayDoc> {
      return await FetchOne(prop._id) as unknown as IDisplayDoc
    }
  },

  Mutation: {
    async postDisplay(_: any, prop: GQLPostDisplay): Promise<IDisplayDoc> {
      return await Create(prop.input) as unknown as IDisplayDoc
    },
    async editDisplay(_: any, prop: GQLEditDisplay): Promise<IDisplayDoc> {
      return await Edit(prop.input) as unknown as IDisplayDoc
    },
    async removeDisplay(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IDisplayDoc
    },
    async removeAllDisplays(_: any, prop: any) {
      return await RemoveAll() as unknown as IDisplayDoc[]
    }
  }
}

export default DisplayResolver