// module/GeneradorContraseñas.js
export function generarContraseña(longitud, incluirNumeros, incluirSimbolos) {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let caracteres = letras;
    if (incluirNumeros) {
        caracteres += numeros;
    }
    if (incluirSimbolos) {
        caracteres += simbolos;
    }

    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return contraseña;
}
