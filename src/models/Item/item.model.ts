import { model } from "mongoose"
import ItemSchema from "./item.schema"

export const ItemModel = model("items", ItemSchema)