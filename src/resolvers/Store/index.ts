import { StoreModel } from "../../models/Store/store.model"
import { GQLPostStore, GQLEditStore, IStoreDoc, IUserID } from "../../models/Store/store.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(StoreModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const StoreResolver = {
  Query: {
    async fetchStores(_: any, prop: any): Promise<IStoreDoc[]> {
      return await Fetch() as unknown as IStoreDoc[]
    },
    async fetchStoreByID(_: any, prop: IUserID): Promise<IStoreDoc> {
      return await FetchOne(prop._id) as unknown as IStoreDoc
    }
  },

  Mutation: {
    async postStore(_: any, prop: GQLPostStore): Promise<IStoreDoc> {
      return await Create(prop.input) as unknown as IStoreDoc
    },
    async editStore(_: any, prop: GQLEditStore): Promise<IStoreDoc> {
      return await Edit(prop.input) as unknown as IStoreDoc
    },
    async removeStore(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IStoreDoc
    },
    async removeAllStores(_: any, prop: any) {
      return await RemoveAll() as unknown as IStoreDoc[]
    }
  }
}

export default StoreResolver