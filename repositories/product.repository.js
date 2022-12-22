import {connect} from "./db.js"
async function insertProduct(product){
    const conn = await connect();
    try {
        const sql = "INSERT INTO products () VALUES ($1, $2, $3, $4, $5)"
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
async function getProducts(){
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM products");
        return res.rows;
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function getProduct(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function updateProduct(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function deleteProduct(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

export default{
    insertProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}