const Inputs = document.querySelectorAll("input");
const Peleador1 = document.getElementById('PELEADOR1');
const Peleador2 = document.getElementById('PELEADOR2');
const NuevoPeleador = document.getElementById('NuevaPelea');
const PersonaA = document.getElementById('PELEADORA');
const PersonaB = document.getElementById('PELEADORB');
const Combate = document.querySelector('.Combate');
const Peleadores = document.querySelector('.Peleadores');
const BtonReiniciar = document.getElementById("Reiniciar");
const Nuevo = document.getElementById('Nuevo');
const Resultado = document.getElementById('Resultado');

BtonReiniciar.addEventListener('click', function (event) {
    event.preventDefault();
    Inputs.forEach(function (input) {
        input.value = '';
    });
});

NuevoPeleador.addEventListener('click', function () {
    var ValorA = PersonaA.value.trim();
    var ValorB = PersonaB.value.trim();

    if (ValorA === "" || ValorB === "") {
        alert("¡Advertencia! Todos los campos deben ser llenados.");
    } else {
        // Si los inputs están llenos, continuar con el proceso
        Peleador1.textContent = ValorA;
        Peleador2.textContent = ValorB;
        Combate.style.display = "block";
        Peleadores.style.display = "none";
    }
});

Nuevo.addEventListener('click', function (event) {
    event.preventDefault();
    PersonaA.value = "";
    PersonaB.value = "";
    Combate.style.display = "none";
    Peleadores.style.display = "block";
    Peleadores.style.display = "flex";
});

function ajustarValoresInputs() {
    Inputs.forEach(input => {
        let valor = parseFloat(input.value);
        if (valor < 7) {
            input.value = 7; // Cambiar a 7 si es menor que 7
        } else if (valor > 10) {
            input.value = 10; // Cambiar a 10 si es mayor que 10
        }
    });
}

function TodoCargado(){
    for (let i = 0; i < Inputs.length; i++) {
        if (Inputs[i].value === '') {
            return false; // Si algún input está vacío, retorna false
        }
    }
    return true; // Si todos los inputs están llenos, retorna true
}
function Round1(){
    const puntosRoja = [
        parseInt(document.getElementById('R1-J1-P1').value) || 0,
        parseInt(document.getElementById('R1-J2-P1').value) || 0,
        parseInt(document.getElementById('R1-J3-P1').value) || 0
    ];

    const puntosAzul = [
        parseInt(document.getElementById('R1-J1-P2').value) || 0,
        parseInt(document.getElementById('R1-J2-P2').value) || 0,
        parseInt(document.getElementById('R1-J3-P2').value) || 0
    ];

    // Sumar los puntos de cada esquina
    const totalRoja = puntosRoja.reduce((sum, puntos) => sum + puntos, 0);
    const totalAzul = puntosAzul.reduce((sum, puntos) => sum + puntos, 0);

    // Determinar el ganador
    if (totalRoja > totalAzul) {
        console.log("Ganador esquina roja");
    } else if (totalRoja < totalAzul) {
        console.log("Ganador esquina azul");
    } else {
        console.log("Empate");
    }
  
}

function Round2(){
    const puntosRoja = [
        parseInt(document.getElementById('R2-J1-P1').value) || 0,
        parseInt(document.getElementById('R2-J2-P1').value) || 0,
        parseInt(document.getElementById('R2-J3-P1').value) || 0
    ];

    const puntosAzul = [
        parseInt(document.getElementById('R2-J1-P2').value) || 0,
        parseInt(document.getElementById('R2-J2-P2').value) || 0,
        parseInt(document.getElementById('R2-J3-P2').value) || 0
    ];

    // Sumar los puntos de cada esquina
    const totalRoja = puntosRoja.reduce((sum, puntos) => sum + puntos, 0);
    const totalAzul = puntosAzul.reduce((sum, puntos) => sum + puntos, 0);

    // Determinar el ganador
    if (totalRoja > totalAzul) {
        console.log("Ganador esquina roja");
    } else if (totalRoja < totalAzul) {
        console.log("Ganador esquina azul");
    } else {
        console.log("Empate");
    }
}

function Round3(){
    const puntosRoja = [
        parseInt(document.getElementById('R3-J1-P1').value) || 0,
        parseInt(document.getElementById('R3-J2-P1').value) || 0,
        parseInt(document.getElementById('R3-J3-P1').value) || 0
    ];

    const puntosAzul = [
        parseInt(document.getElementById('R3-J1-P2').value) || 0,
        parseInt(document.getElementById('R3-J2-P2').value) || 0,
        parseInt(document.getElementById('R3-J3-P2').value) || 0
    ];

    // Sumar los puntos de cada esquina
    const totalRoja = puntosRoja.reduce((sum, puntos) => sum + puntos, 0);
    const totalAzul = puntosAzul.reduce((sum, puntos) => sum + puntos, 0);

    // Determinar el ganador
    if (totalRoja > totalAzul) {
        console.log("Ganador esquina roja");
    } else if (totalRoja < totalAzul) {
        console.log("Ganador esquina azul");
    } else {
        console.log("Empate");
    }
}
Resultado.addEventListener('click', function(event){
event.preventDefault();
if (TodoCargado()) {
    console.log("sE PUEDE");
    Round1();
}
else{
    console.log("No se puede");
    
}
});
