import { VendorModel } from "../../models/Vendor/vendor.model"
import { GQLPostVendor, GQLEditVendor, IVendorDoc, IUserID } from "../../models/Vendor/vendor.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(VendorModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const VendorResolver = {
  Query: {
    async fetchVendors(_: any, prop: any): Promise<IVendorDoc[]> {
      return await Fetch() as unknown as IVendorDoc[]
    },
    async fetchVendorByID(_: any, prop: IUserID): Promise<IVendorDoc> {
      return await FetchOne(prop._id) as unknown as IVendorDoc
    }
  },

  Mutation: {
    async postVendor(_: any, prop: GQLPostVendor): Promise<IVendorDoc> {
      return await Create(prop.input) as unknown as IVendorDoc
    },
    async editVendor(_: any, prop: GQLEditVendor): Promise<IVendorDoc> {
      return await Edit(prop.input) as unknown as IVendorDoc
    },
    async removeVendor(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IVendorDoc
    },
    async removeAllVendors(_: any, prop: any) {
      return await RemoveAll() as unknown as IVendorDoc[]
    }
  }
}

export default VendorResolver