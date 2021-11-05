const express = require("express")
const router = express.Router()

const estudiante_controller = require("../controllers/estudiantes.controller")
const curso_controller = require("../controllers/cursos.controller")
const { reporteNota } = require("../controllers/notas.controller")

router.post("/estudiantes", estudiante_controller.guardarEstudiante)
    .get("/estudiantes", estudiante_controller.consultarEstudiante)
    .delete("/estudiantes:id", estudiante_controller.eliminarEstudiante)
    .put("/estudiantes:id", estudiante_controller.modificarEstudiante)

router.post("/cursos", curso_controller.guardarCurso)
    .get("/cursos", curso_controller.consultarCurso)
    .delete("/cursos:id", curso_controller.eliminarCurso)
    .put("/cursos:id", curso_controller.modificarCurso)

router.post("/notas", reporteNota)

module.exports=router