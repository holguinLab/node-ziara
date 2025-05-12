import mongoose from "mongoose";
import 'dotenv/config'

export default mongoose.connect(`${process.env.URI}${process.env.BD}`)
.then(()=>console.log(`Mensaje  : Conexion A Mongo Exitosa ✅ \nBase De Datos : ${process.env.BD} `))
.catch((error )=> console.log('Mensaje : Conexion A Mongo Fallida ❌ \nError : ',error))