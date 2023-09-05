import { Voucher } from "../models/Voucher.js"
import { poolPromise as pool } from "../config/db.js"


export const addVoucher=async(req,res,next)=>{
    const {voucherCode,expiredDate}=req.body
    let voucher=new Voucher(voucherCode,expiredDate)
    try{
        const [response,_]=await voucher.save()
        console.log(response)
        if(response){
            res.json({message:"kupon został dodany"})
        }else{
            res.json({message:"kuponu nie udało się dodać"})
        }
    }catch(err){
        throw err;
    }
}

export const useVoucher=async(req,res,next)=>{
    let selectSql=`select * from vouchers where VoucherCode='${req.body.voucherCode}'`
    try{
        const [result,_]=await pool.execute(selectSql)
        console.log(result)
        if(result.length===0){
            res.json({message:"taki kod nie istnieje"})
        }else if(result[0].IsUsed.readInt8()===1){
            res.json({message:"kod został już wykorzystany"})
        }else if(result[0].ExpiredDate<new Date()){
            res.json({message:"kod wygasł"})
        }else{
            req.VoucherId=result[0].VoucherID
            next()
        }
    }catch(err){
        throw err;
    }
}

export const getAll=async(req,res,next)=>{
    try{
        const [response,_]=await Voucher.getAll()
        res.json(response)
    }catch(err){
        throw err;
    }
}