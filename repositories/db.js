import pg from "pg";

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString:"postgres://gqgzwtvt:38E-dRyH9tXpbdIQY4gNmVOkbpxVjSwy@mouse.db.elephantsql.com/gqgzwtvt"
    });
    global.connection = pool;
    return pool.connect();
}
export {
    connect
}