import { EmployeeModel } from "../../models/Employee/employee.model"
import { GQLPostEmployee, GQLEditEmployee, IEmployeeDoc, IUserID } from "../../models/Employee/employee.types"
import DBWrapper from "../../wrappers/APIGenerator"

const DBModel = new DBWrapper(EmployeeModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = DBModel.getAPICalls()

const EmployeeResolver = {
  Query: {
    async fetchEmployees(_: any, prop: any): Promise<IEmployeeDoc[]> {
      return await Fetch() as unknown as IEmployeeDoc[]
    },
    async fetchEmployeeByID(_: any, prop: IUserID): Promise<IEmployeeDoc> {
      return await FetchOne(prop._id) as unknown as IEmployeeDoc
    }
  },

  Mutation: {
    async postEmployee(_: any, prop: GQLPostEmployee): Promise<IEmployeeDoc> {
      return await Create(prop.input) as unknown as IEmployeeDoc
    },
    async editEmployee(_: any, prop: GQLEditEmployee): Promise<IEmployeeDoc> {
      return await Edit(prop.input) as unknown as IEmployeeDoc
    },
    async removeEmployee(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IEmployeeDoc
    },
    async removeAllEmployees(_: any, prop: any) {
      return await RemoveAll() as unknown as IEmployeeDoc[]
    }
  }
}

export default EmployeeResolver