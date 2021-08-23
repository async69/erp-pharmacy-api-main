import { model } from "mongoose"
import SIVSchema from "./siv.schema"

export const SIVModel = model("sivs", SIVSchema)