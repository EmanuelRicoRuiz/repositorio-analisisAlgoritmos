const {Pool} = require('pg'); //Conectamos nuestra libreria con 'require'
let POOL_PG = null  //Pongo la clase POOL_PG global

const conectarDb = async () => {
    POOL_PG = new Pool({
        user: 'postgres',
        host: 'localhost',
        database:  'ferreteria', //'universidad',
        password: '1193231633',
        port: 5432,
    })
    return await  POOL_PG.connect()
}
const ejecutarSQL = async (sql, datos) => {
    let pool = null
    if (POOL_PG == null){
        pool = await conectarDb()
    }else{
        pool = POOL_PG
    }
    const respuesta_db =await pool.query(sql, datos)
    return  respuesta_db
}

module.exports = {ejecutarSQL} //Exportar SQL