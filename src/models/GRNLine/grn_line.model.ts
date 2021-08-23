import { model } from "mongoose"
import GRNLineSchema from "./grn_line.schema"

export const GRNLineModel = model("grn_lines", GRNLineSchema)