import mongoose from "mongoose";

export const schemeProducto = new mongoose.Schema({
    nombre :{type:String,required:[true,'Campo Requerido']},
    precio :{type:Number,required:[true,'Campo Requerido']},
    descripcion :{type:String},
},{versionKey:false})