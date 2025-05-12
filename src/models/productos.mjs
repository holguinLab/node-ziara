import mongoose from "mongoose";
import { schemeProducto } from "./schemas/schema_productos.mjs";

export const Productos = mongoose.model('Productos',schemeProducto)