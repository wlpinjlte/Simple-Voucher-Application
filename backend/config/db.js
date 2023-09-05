import mysql from 'mysql2'

const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
})
// console.log(process.env.DB_HOST)
export const poolPromise=pool.promise()