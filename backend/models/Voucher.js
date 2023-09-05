import { poolPromise as pool } from "../config/db.js"
export class Voucher{
    constructor(voucherCode,expiredDate){
        this.voucherCode=voucherCode
        this.expiredDate=expiredDate
    }
    save(){
        let sql=`
        insert into vouchers(
            VoucherCode,
            IsUsed,
            ExpiredDate
        )values(
            '${this.voucherCode}',
            0,
            '${this.expiredDate}'
        )
        `;
        return pool.execute(sql);
    }

    static getAll(){
        let sql=`
        select * from vouchers
        `
        return pool.execute(sql);
    }
}