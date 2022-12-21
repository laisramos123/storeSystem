import {connect} from "./db.js"
async function insertClient(client){
    const conn = await connect();
    try {
        const sql = "INSERT INTO clients (name, cpf, phone, email, adress) VALUES ($1, $2, $3, $4, $5)"
        const values = [client.name, client.cpf, client.phone, client.email, client.adress];
        const res = await conn.query(sql,values);
        return res.rows[0];
    } catch (err) {
        throw err;
    }finally{ //finally sempre será execultado, por isso que quando temrinar a conexão, dando tudo ou certo ou não, essa conexão será encerrada
        conn.release(); //encerra a conexão
    }
    
     return {};
}
async function getClients(){
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM clients");
        return res.rows;
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function getClient(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function updateCLient(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

async function deleteCLient(){
    const conn = await connect();
    try {
        
    } catch (err) {
        throw err;
    }finally{
        conn.release();
    }
}

export default{
    insertClient,
    getClients,
    getClient,
    updateCLient,
    deleteCLient
}