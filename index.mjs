import express from 'express'
import './src/config/conection.mjs'
import 'dotenv/config'
import { router } from './routes/router.mjs'


const app = express()

app.use('/v1',router)

app.listen(process.env.PORT,() => console.log(`🚀 Ziara App activa en : http://localhost:${process.env.PORT}`))

