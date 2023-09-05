import express from 'express'
import { addVoucher,getAll,useVoucher } from '../controllers/voucherControllers.js'
import { addAddress } from '../controllers/addressControllers.js'
export const router=express.Router()

router.post('/addVoucher',addVoucher)

router.post('/useVoucher',useVoucher,addAddress)

router.get('/',getAll)