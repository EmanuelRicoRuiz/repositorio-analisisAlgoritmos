var estudiantes = [
    {
        nombre: "Carolina",
        apellidos: "Tobón Pino",
        id: "1152460333",
        correo: "ctobon333@soyudemedellin.edu.co"
    },
    {
        nombre: "Juan Diego",
        apellidos: "Salazar Gil",
        id: "1017254324",
        correo: "jsalazar324@soyudemedellin.edu.co"
    },
    {
        nombre: "Viviana Andrea",
        apellidos: "Muñoz Olarte",
        id: "1000305187",
        correo: "vmunoz187@soyudemedellin.edu.co"
    },
    {
        nombre: "Julián",
        apellidos: "Herrera Leal",
        id: "1000409458",
        correo: "jherrera458@soyudemedellin.edu.co"
    },
    {
        nombre: "Julián",
        apellidos: "Calderón Hincapié",
        id: "1000662039",
        correo: "jcalderon039@soyudemedellin.edu.co"
    },
    {
        nombre: "Santiago",
        apellidos: "Osorio Saldarriaga",
        id: "1002206015",
        correo: "sosorio015@soyudemedellin.edu.co"
    },
    {
        nombre: "Joan Nicolás",
        apellidos: "Cifuentes Narváez",
        id: "1004235887",
        correo: "jcifuentes887@soyudemedellin.edu.co"
    },
    {
        nombre: "Jeysson Alejandro",
        apellidos: "Betancur Rueda",
        id: "1000895372",
        correo: "jbetancur372@soyudemedellin.edu.co"
    },
    {
        nombre: "Juan Jose",
        apellidos: "Aranzales ",
        id: "1027801014",
        correo: "jaranzales014@soyudemedellin.edu.co"
    },
    {
        nombre: "Emanuel",
        apellidos: "Rico Ruiz",
        id: "1193231633",
        correo: "erico633@soyudemedellin.edu.co"
    },
    {
        nombre: "Santiago Adolfo",
        apellidos: "Yepes Zuleta",
        id: "1193119431",
        correo: "syepes431@soyudemedellin.edu.co"
    },
    {
        nombre: "Santiago",
        apellidos: "Urrego Morales",
        id: "1036955282",
        correo: "saurrego@udem.edu.co"
    },
    {
        nombre: "Sebastián",
        apellidos: "Zapata Cuervo",
        id: "1152452072",
        correo: "szapata072@soyudemedellin.edu.co"
    },
    {
        nombre: "Sebastián",
        apellidos: "Muñoz Zapata",
        id: "1000411368",
        correo: "smunoz368@soyudemedellin.edu.co"
    }
]
function buscarEstudiante(id) {
    var estudianteEncontrado = null;
    for (var estudiante of estudiantes) {
        if (id === estudiante.id) {
            estudianteEncontrado = estudiante;
            break;
        }
    }
    return estudianteEncontrado
}
function imprimirEstudiantes(estudiante){
    console.log("El estudiante es: ",estudiante.nombre,estudiante.apellidos)
}
function main(){
    var id="1193231633";
    console.time("BUSQUEDA")
    var estudiante=buscarEstudiante(id);
    imprimirEstudiantes(estudiante);
    console.timeEnd("BUSQUEDA")
}
main();
