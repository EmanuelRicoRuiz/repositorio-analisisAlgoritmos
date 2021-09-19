const {ejecutarSQL}=require('../services/postgres.service');
const consultarArticulos=async ()=>{
    const sql='SELECT * FROM articulos'
    const datos=[]
    let respuesta_db=await ejecutarSQL(sql,datos)
    return respuesta_db.rows
}
module.exports={consultarArticulos}