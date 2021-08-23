import { PharmacyModel } from "../../models/Pharmacy/pharmacy.model"
import { GQLPostPharmacy, GQLEditPharmacy, IPharmacyDoc, IUserID } from "../../models/Pharmacy/pharmacy.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(PharmacyModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const PharmacyResolver = {
  Query: {
    async fetchPharmacies(_: any, prop: any): Promise<IPharmacyDoc[]> {
      return await Fetch() as unknown as IPharmacyDoc[]
    },
    async fetchPharmacyByID(_: any, prop: IUserID): Promise<IPharmacyDoc> {
      return await FetchOne(prop._id) as unknown as IPharmacyDoc
    }
  },

  Mutation: {
    async postPharmacy(_: any, prop: GQLPostPharmacy): Promise<IPharmacyDoc> {
      return await Create(prop.input) as unknown as IPharmacyDoc
    },
    async editPharmacy(_: any, prop: GQLEditPharmacy): Promise<IPharmacyDoc> {
      return await Edit(prop.input) as unknown as IPharmacyDoc
    },
    async removePharmacy(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IPharmacyDoc
    },
    async removeAllPharmacies(_: any, prop: any) {
      return await RemoveAll() as unknown as IPharmacyDoc[]
    }
  }
}

export default PharmacyResolver