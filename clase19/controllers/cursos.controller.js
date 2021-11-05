const guardarCurso=(req,res)=>{
    res.send("Guardar curso")
}
const consultarCurso=(req,res)=>{
    res.send("consultar curso")
}
const eliminarCurso=(req,res)=>{
    res.send("eliminar curso")
}
const modificarCurso=(req,res)=>{
    res.send("modificar curso")
}

module.exports={guardarCurso,consultarCurso,eliminarCurso,modificarCurso}