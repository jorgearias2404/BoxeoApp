const Inputs = document.querySelectorAll("input")

const BtonReiniciar = document.getElementById("Reiniciar")

BtonReiniciar.addEventListener('click',function(event){
    event.preventDefault();
    Inputs.forEach(function(input) {
        input.value = '';
    });
})


const Peleador1 = document.getElementById('PELEADOR1')
const Peleador2 = document.getElementById('PELEADOR2')

const NuevoPeleador = document.getElementById('NuevaPelea')
const PersonaA = document.getElementById('PELEADORA')
const PersonaB = document.getElementById('PELEADORB')



const Combate = document.querySelector('.Combate')

const Peleadores = document.querySelector('.Peleadores')

NuevoPeleador.addEventListener('click',function (){
    
   var ValorA = PersonaA.value.trim();
   var ValorB = PersonaB.value.trim();

   if (ValorA === "" || ValorB === "") {
    alert("¡Advertencia! Todos los campos deben ser llenados.");
} else {
    // Si los inputs están llenos, continuar con el proceso
   Peleador1.textContent= ValorA;
   Peleador2.textContent = ValorB;
   Combate.style.display = "block";
   Peleadores.style.display = "none";
}
   
})


const Nuevo = document.getElementById('Nuevo')

Nuevo.addEventListener('click',function(event){
   event.preventDefault();
   PersonaA.value = ""
   PersonaB.value = ""
   Combate.style.display = "none";
   Peleadores.style.display = "block";
   Peleadores.style.display = "flex";

})



