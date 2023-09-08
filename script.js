document.getElementById("agregar").addEventListener("click",
    agregarTarea);

function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    if (nuevaTareaTexto !== "") {

        let ID = 0
        var nuevaTarea = ""
        nuevaTarea += '<li id="' + ID + '">' + nuevaTareaTexto + '<button class="delete" onclick="borrar(' + ID + ')">Eliminar</button></li>'
        document.getElementById("listaTareas").innerHTML += nuevaTarea

        document.getElementById("nuevaTarea").value = ""
    }
}

function borrar(idFila) {
    document.getElementById(idFila).remove()
}

function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
}

document.getElementById("listaTareas").addEventListener("click",
    function (event) {
        if (event.target.tagName === "LI") {
            marcarCompletada(event.target);
        }
    });



function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    });
}

document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);

function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (!tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    });
}

document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);

function mostrarTodas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "flex";
        }
    });
}

document.getElementById("mostrarTodas").addEventListener("click", mostrarTodas);

