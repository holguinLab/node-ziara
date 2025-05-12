import { Productos } from "../models/productos.mjs";

/* Listar Todos Los Productos */
const listaProductos = async(request,response)=>{
    
    try {
        const productos = await Productos.find()
        response.json({
            'Mensaje' : 'Lista De Productos',
            'datos' : productos
        })
    } catch (error)  {
        response.status(500).json({
            'Mensaje' : 'Error Al Obtener Productos'
        })
    }
    
}

export default {listaProductos}