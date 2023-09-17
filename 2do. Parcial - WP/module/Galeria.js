
// module/Galeria.js
export function cargarImagenes(imagenes) {
    return imagenes.map((imagen, index) => {
        return `<img src="${imagen}" alt="Imagen ${index + 1}" style="width: 200px; height: auto;">`;
    }).join('');
}
