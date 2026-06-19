function realizarOperacion(num1, num2, operacionCallback) {
    console.log(`Operación con: ${num1} y ${num2}`);
    operacionCallback(num1, num2);
}


function sumar(a, b) {
    console.log(`Resultado Suma: ${a + b}`);
}



function restar(a, b) {
    console.log(`Resultado Resta:${a-b}`);
   

}


function multiplicar(a, b) {
    console.log(`Resultado Multiplicacion: ${a * b}`);
}


realizarOperacion(10, 5, sumar);
realizarOperacion(10, 5, restar);
realizarOperacion(10, 5, multiplicar);




function tareaNoBloqueante(callback) {
    console.log("Iniciando tarea no bloqueante...");


    setTimeout(function() {
        console.log("Tarea completada.");
        callback();
    }, 2000);
}


console.log("Inicio del programa.");


tareaNoBloqueante(function() {
    console.log("Continuando después de la tarea.");
});


console.log("Fin del programa.");









function solicitarJSON(callback) {
    setTimeout(function() {
        callback();
    }, 3000);

}

function realizarOperacion(num1, num2, operacionCallback) {
    console.log(`Operación con: ${num1} y ${num2}`);
    operacionCallback(num1, num2);
}


function sumar(a, b) {
    console.log(`Resultado Suma: ${a + b}`);
}



function restar(a, b) {
    console.log(`Resultado Resta:${a-b}`);
   

}


function multiplicar(a, b) {
    console.log(`Resultado Multiplicacion: ${a * b}`);
}


realizarOperacion(10, 5, sumar);
realizarOperacion(10, 5, restar);
realizarOperacion(10, 5, multiplicar);




function tareaNoBloqueante(callback) {
    console.log("Iniciando tarea no bloqueante...");


    setTimeout(function() {
        console.log("Tarea completada.");
        callback();
    }, 2000);
}


console.log("Inicio del programa.");


tareaNoBloqueante(function() {
    console.log("Continuando después de la tarea.");
});


console.log("Fin del programa.");









function solicitarJSON(callback) {
    setTimeout(function() {
        callback();
    }, 3000);

}



function reproducirAudio(callback) {
    setTimeout(function() {
        callback();
    }, 1000);

}


function leerSensor(callback) {
    setTimeout(function() {
        callback();
    }, 500);
    


}


console.log("--- Iniciando procesos asíncronos ---");


solicitarJSON(() => console.log("Archivo JSON recibido."));
reproducirAudio(() => console.log("Audio finalizado."));
leerSensor(() => console.log("Datos del sensor listos."));



function reproducirAudio(callback) {
    setTimeout(function() {
        callback();
    }, 1000);

}


function leerSensor(callback) {
    setTimeout(function() {
        callback();
    }, 500);
    


}


console.log("--- Iniciando procesos asíncronos ---");


solicitarJSON(() => console.log("Archivo JSON recibido."));
reproducirAudio(() => console.log("Audio finalizado."));
leerSensor(() => console.log("Datos del sensor listos."));

function simularDescarga(archivoGalactico, callback) {
    console.log(`Iniciando descarga de: "${archivoGalactico}"... Por favor power ranger, espera un moment.`);
    
    setTimeout(() => {
        console.log(`Descarga terminada power ranger. El archivo "${archivoGalactico}" se descargo completamentee.`);
        callback();
    }, 4000);
}
simularDescarga("Los_power_ranger.pdf", () => {
    console.log("Power Ranger, el archivo está listo para abrir.");
});
