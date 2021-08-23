import { ItemModel } from "../../models/Item/item.model"
import { GQLPostItem, GQLEditItem, IItemDoc, IUserID } from "../../models/Item/item.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(ItemModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const ItemResolver = {
  Query: {
    async fetchItems(_: any, prop: any): Promise<IItemDoc[]> {
      return await Fetch() as unknown as IItemDoc[]
    },
    async fetchItemByID(_: any, prop: IUserID): Promise<IItemDoc> {
      return await FetchOne(prop._id) as unknown as IItemDoc
    }
  },

  Mutation: {
    async postItem(_: any, prop: GQLPostItem): Promise<IItemDoc> {
      return await Create(prop.input) as unknown as IItemDoc
    },
    async editItem(_: any, prop: GQLEditItem): Promise<IItemDoc> {
      return await Edit(prop.input) as unknown as IItemDoc
    },
    async removeItem(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IItemDoc
    },
    async removeAllItems(_: any, prop: any) {
      return await RemoveAll() as unknown as IItemDoc[]
    }
  }
}

export default ItemResolver