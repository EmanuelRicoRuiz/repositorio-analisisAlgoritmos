const {ejecutarSQL}=require('../services/postgres.service');
const consultarVentas=async ()=>{
    const sql='SELECT * FROM ventas'
    const datos=[]
    let respuesta_db=await ejecutarSQL(sql,datos)
    return respuesta_db.rows
}
module.exports={consultarVentas}