import {connect} from "./db.js"
async function insertSupplier(supplier){
    const conn = await connect();
    try {
        const sql = "INSERT INTO suppliers () VALUES ($1, $2, $3, $4, $5)"
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
async function getSuppliers(){
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM suppliers");
        return res.rows;
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function getSupplier(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function updateSuplier(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function deleteSupplier(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

export default{
    insertSupplier,
    getSuppliers,
    getSupplier,
    updateSuplier,
    deleteSupplier
}