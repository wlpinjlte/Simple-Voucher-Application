import express from "express"
import morgan from "morgan"
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import { router as  voucherRoutes} from "./routes/voucherRoutes.js"
import { router as  addressRoutes} from "./routes/addressRoutes.js"

const app=express()
app.use(cors())

// configDotenv()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/address',addressRoutes)
app.use('/voucher',voucherRoutes)



const PORT = process.env.port || 3000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
