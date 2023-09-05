import { poolPromise as pool } from "../config/db.js";

export class Address{
    constructor(address,city,postalCode,country,VoucherId){
        this.address=address
        this.city=city
        this.postalCode=postalCode
        this.country=country
        this.VoucherId=VoucherId
    }

    save(){
        let sql=`
        insert into addresses(
            Address,
            City,
            PostalCode,
            Country,
            VoucherID
        )
        values(
            '${this.address}',
            '${this.city}',
            '${this.postalCode}',
            '${this.country}',
            ${this.VoucherId}
        )
        `
        return pool.execute(sql);
    }

    static getAll(){
        let sql=`select * from addresses`
        return pool.execute(sql)
    }
}