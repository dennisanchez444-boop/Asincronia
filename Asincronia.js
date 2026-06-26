//Ejercicio 1
function retirarDinero(monto) {
    const saldo = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto <= saldo) {
                resolve(`Retiro exitoso de $${monto}. Saldo restante: $${saldo - monto}`);
            } else { reject(`Fondos insuficientes. Límite de retiro: $${saldo}`); }
        }, 1500);
    });
}

// Caso exitoso
retirarDinero(200)
    .then((resultado) => {
        console.log("=== CASO EXITOSO ===");
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });

// Caso fallido
retirarDinero(600)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log("\n=== CASO FALLIDO ===");
        console.log(error);
    });

// Función que verifica si el usuario es mayor de edad
function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        // Simula la verificación de datos (1 segundo)
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma.");
            } else {
                reject("Acceso denegado. Registro permitido solo para mayores de edad.");
            }
        }, 1000);
    });
}

// Función que verifica si el usuario es mayor de edad
function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        // Simula la verificación de datos (1 segundo)
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma.");
            } else {
                reject("Acceso denegado. Registro permitido solo para mayores de edad.");
            }
        }, 1000);
    });
}

//Ejercicio 2
function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        // Simula la verificación de datos (1 segundo)
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma.");
            } else {
                reject("Acceso denegado. Registro permitido solo para mayores de edad.");
            }
        }, 1000);
    });
}
// Usuario mayor de edad
verificarEdad(20)
    .then((mensaje) => {
        console.log("=== MAYOR DE EDAD ===");
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });

// Usuario menor de edad
verificarEdad(16)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log("\n=== MENOR DE EDAD ===");
        console.log(error);
    });

//Ejercicio 3
function consultarClima(ciudad) {
    return new Promise((resolve) => {
        // Simula la consulta al servicio del clima
        setTimeout(() => {
            resolve({
                ciudad: ciudad,
                temperatura: "24°C",
                condicion: "Soleado"
            });
        }, 1500);
    });
}

// Función asíncrona para mostrar la información del clima
async function mostrarClima(ciudad) {
    try {
        // Espera la respuesta de la promesa
        const clima = await consultarClima(ciudad);

        console.log("=== CONSULTA DEL CLIMA ===");
        console.log(`Ciudad: ${clima.ciudad}`);
        console.log(`Temperatura: ${clima.temperatura}`);
        console.log(`Condición: ${clima.condicion}`);
    } catch (error) {
        console.log("Ocurrió un error:", error);
    }
}

// Llamada a la función
mostrarClima("Quito");