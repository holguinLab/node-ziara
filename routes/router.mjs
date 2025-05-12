import express from 'express'
import controller_productos from '../src/controller/controller_productos.mjs'

export const router = express.Router()

/* Rutas de Productos */
router.get('/productos',controller_productos.listaProductos)
