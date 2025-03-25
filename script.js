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
let ER_R1,EA_R1,ER_R2,EA_R2,ER_R3,EA_R3;
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
        ER_R1 = "10";
        if (totalRoja - totalAzul <= 2) {
            EA_R1 = "9";
        }
        if (totalRoja - totalAzul > 2 && totalRoja - totalAzul <= 4 ) {
            EA_R1 = "8";
        }
        if (totalRoja - totalAzul > 4) {
            EA_R1 = "7";
        }
        return "Rojo";
    } else if (totalRoja < totalAzul) {
     
        EA_R1 = "10";
        if (totalAzul - totalRojo <= 2) {
            ER_R1 = "9";
        }
        if (totalAzul - totalRoja > 2 && totalAzul - totalRoja <= 4 ) {
            ER_R1 = "8";
        }
        if (totalAzul - totalRoja > 4) {
            ER_R1 = "7";
        }


        return "Azul";
    } else {
        ER_R1 = "10";
        EA_R1 = "10";
        return "Empate";
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
      // Determinar el ganador
      if (totalRoja > totalAzul) {
        ER_R2 = "10";
        if (totalRoja - totalAzul <= 2) {
            EA_R2 = "9";
        }
        if (totalRoja - totalAzul > 2 && totalRoja - totalAzul <= 4 ) {
            EA_R2 = "8";
        }
        if (totalRoja - totalAzul > 4) {
            EA_R2 = "7";
        }
        return "Rojo";
    } else if (totalRoja < totalAzul) {
     
        EA_R2 = "10";
        if (totalAzul - totalRojo <= 2) {
            ER_R2 = "9";
        }
        if (totalAzul - totalRoja > 2 && totalAzul - totalRoja <= 4 ) {
            ER_R2 = "8";
        }
        if (totalAzul - totalRoja > 4) {
            ER_R2 = "7";
        }


        return "Azul";
    } else {
        ER_R2 = "10";
        EA_R2 = "10";
        return "Empate";
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
        ER_R3 = "10";
        if (totalRoja - totalAzul <= 2) {
            EA_R3 = "9";
        }
        if (totalRoja - totalAzul > 2 && totalRoja - totalAzul <= 4 ) {
            EA_R3 = "8";
        }
        if (totalRoja - totalAzul > 4) {
            EA_R3 = "7";
        }
        return "Rojo";
    } else if (totalRoja < totalAzul) {
     
        EA_R2 = "10";
        if (totalAzul - totalRojo <= 2) {
            ER_R3 = "9";
        }
        if (totalAzul - totalRoja > 2 && totalAzul - totalRoja <= 4 ) {
            ER_R3 = "8";
        }
        if (totalAzul - totalRoja > 4) {
            ER_R3 = "7";
        }


        return "Azul";
    } else {
        ER_R3 = "10";
        EA_R3 = "10";
        return "Empate";
    }
}


const Result_R1_ER = document.getElementById('Resultado_R1_ER');
const Result_R1_EA = document.getElementById('Resultado_R1_EA');
const Result_R2_ER = document.getElementById('Resultado_R2_ER');
const Result_R2_EA = document.getElementById('Resultado_R2_EA');
const Result_R3_ER = document.getElementById('Resultado_R3_ER');
const Result_R3_EA = document.getElementById('Resultado_R3_EA');


const View_Final  = document.getElementById('Resultado');
function CargarResultadosDeLosRound(){
     if (Round1() === "Rojo") {
        Result_R1_ER.textContent = "10"
        Result_R1_EA.textContent = EA_R1;
     }
     if (Round1() === "Azul") {
        Result_R1_EA.textContent = "10"
        Result_R1_ER.textContent = ER_R1;
     }
     if (Round1() === "Empate") {
        Result_R1_EA.textContent = "10"
        Result_R1_ER.textContent = "10"
     }
      


     if (Round2() === "Rojo") {
        Result_R2_ER.textContent = "10"
        Result_R2_EA.textContent = EA_R2;
     }
     if (Round2() === "Azul") {
        Result_R2_EA.textContent = "10"
        Result_R2_ER.textContent = ER_R2;
     }
     if (Round2() === "Empate") {
        Result_R2_EA.textContent = "10"
        Result_R2_ER.textContent = "10"
     }



     
     if (Round3() === "Rojo") {
        Result_R3_ER.textContent = "10"
        Result_R3_EA.textContent = EA_R3;
     }
     if (Round3() === "Azul") {
        Result_R3_EA.textContent = "10"
        Result_R3_ER.textContent = ER_R3;
     }
     if (Round3() === "Empate") {
        Result_R3_EA.textContent = "10"
        Result_R3_ER.textContent = "10"
     }



}


Resultado.addEventListener('click', function(event){
event.preventDefault();
if (TodoCargado()) {
    CargarResultadosDeLosRound();
    View_Final.style.display = "block";
    Combate.style.display = "none"
   
}
else{
    alert("Se deben cargar los datos de todos los jueces")
}
});
