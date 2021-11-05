const guardarEstudiante=(req,res)=>{
    res.send("Guardar estudiante")
}
const consultarEstudiante=(req,res)=>{
    res.send("consultar estudiante")
}
const eliminarEstudiante=(req,res)=>{
    res.send("eliminar estudiante")
}
const modificarEstudiante=(req,res)=>{
    res.send("modificar estudiante")
}

module.exports={guardarEstudiante,consultarEstudiante,eliminarEstudiante,modificarEstudiante}