import { model } from "mongoose"
import DisplaySchema from "./display.schema"

export const DisplayModel = model("displays", DisplaySchema)