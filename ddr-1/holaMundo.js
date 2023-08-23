// 1. Contraseña válida
// Escribir una función llamada contrasenaValida que reciba un string y retorne true si 
// el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

// escribe tu respuesta acá
const contrasenaValida = (pasword) => {
    if (pasword == "2Fj(jjbFsuj" || pasword == "eoZiugBf&g9") {
        return true;
    } else {
        return false
    }
}

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsu j")) // true
console.log(contrasenaValida("eoZiugBf&g9 ")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false