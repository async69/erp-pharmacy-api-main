import { model } from "mongoose"
import SIVLineSchema from "./siv_line.schema"

export const SIVLineModel = model("siv_lines", SIVLineSchema)