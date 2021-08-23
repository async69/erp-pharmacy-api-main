import { model } from "mongoose"
import StoreSchema from "./store.schema"

export const StoreModel = model("stores", StoreSchema)