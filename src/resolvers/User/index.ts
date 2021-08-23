import { UserModel } from "../../models/User/user.model"
import { GQLPostUser, GQLEditUser, IUserDoc, IUserID } from "../../models/User/user.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(UserModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const UserResolver = {
  Query: {
    async fetchUsers(_: any, prop: any): Promise<IUserDoc[]> {
      return await Fetch() as unknown as IUserDoc[]
    },
    async fetchUserByID(_: any, prop: IUserID): Promise<IUserDoc> {
      return await FetchOne(prop._id) as unknown as IUserDoc
    }
  },

  Mutation: {
    async postUser(_: any, prop: GQLPostUser): Promise<IUserDoc> {
      return await Create(prop.input) as unknown as IUserDoc
    },
    async editUser(_: any, prop: GQLEditUser): Promise<IUserDoc> {
      return await Edit(prop.input) as unknown as IUserDoc
    },
    async removeUser(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IUserDoc
    },
    async removeAllUsers(_: any, prop: any) {
      return await RemoveAll() as unknown as IUserDoc[]
    }
  }
}

export default UserResolver