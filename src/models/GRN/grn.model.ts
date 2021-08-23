import { model } from "mongoose"
import GRNSchema from "./grn.schema"

export const GRNModel = model("grns", GRNSchema)