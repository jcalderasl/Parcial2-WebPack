// module/ListaTareas.js

let tareas = [];

export function agregarTarea(tarea) {
    tareas.push({ tarea, completada: false });
}

export function completarTarea(index) {
    if (tareas[index]) {
        tareas[index].completada = true;
    }
}

export function mostrarTareas() {
    return tareas;
}
