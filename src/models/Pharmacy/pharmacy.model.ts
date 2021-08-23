import { model } from "mongoose"
import PharmacySchema from "./pharmacy.schema"

export const PharmacyModel = model("pharmacies", PharmacySchema)