import express from 'express'
import { getAddresses } from '../controllers/addressControllers.js'
export const router=express.Router()

router.get('/',getAddresses)