const { Pool } = require('pg');
let POOL_PG = null
const conectarDb = async () => {
    POOL_PG = new Pool({
        user: 'postgress',
        host: 'localhost',
        database: 'universidad',
        password: '1193231633',
        port: 5432,
    });
    return await POOL_PG.connect();
}
const ejecutarSql = async (sql, datos) => {
    const pool = null
    if (POOL_PG == null) {
        pool = await conectarDb();
    } else {
        pool = POOL_PG
    }
    const res = await pool.query(sql, datos);
    return res
}
module.exports={ejecutarSql}