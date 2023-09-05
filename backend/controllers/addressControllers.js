import { response } from "express"
import { poolPromise as pool } from "../config/db.js"
import { Address } from "../models/Address.js"

export const getAddresses=async(req,res,next)=>{
    try{
        const [result,_]=await Address.getAll()
        console.log(result)
        res.json(result)
    }catch(err){
        throw err;
    }
    
}

export const addAddress=async(req,res,next)=>{
    const {address,city,postalCode,country}=req.body
    // let newAddress=new Address(address,city,postalCode,country,req.VoucherId)
    // const [response,_]=await newAddress.save()
    try{
        let sql=`call useVoucher(${req.VoucherId},'${address}','${city}','${postalCode}','${country}')`
        const[response,_]=await pool.execute(sql)
        console.log(response)
        if(response){
            res.json({message:"kod został zrealizowany poprawnie"})
        }else{
            res.json({message:"nie udało się realizować kodu"})
        }
    }catch(err){
        throw err;
    }
}