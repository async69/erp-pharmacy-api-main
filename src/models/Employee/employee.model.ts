import { model } from "mongoose"
import EmployeeSchema from "./employee.schema"

export const EmployeeModel = model("employees", EmployeeSchema)