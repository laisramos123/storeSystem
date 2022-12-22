import {connect} from "./db.js"
async function insertSale(sale){
    const conn = await connect();
    try {
        const sql = "INSERT INTO sales () VALUES ($1, $2, $3, $4, $5)"
        const values = [];
        const res = await conn.query(sql,values);
        return res.rows[0];
    } catch (err) {
        throw err;
    }finally{ //finally sempre será execultado, por isso que quando temrinar a conexão, dando tudo ou certo ou não, essa conexão será encerrada
        conn.release(); //encerra a conexão
    }
    
     return {};
}
async function getSales(){
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM ");
        return res.rows;
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function getSale(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function updateSale(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function deleteSale(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

export default{
    insertSale,
    getSales,
    getSale,
    updateSale,
    deleteSale
}