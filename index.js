var botonCambiar = document.getElementById("botonCambiar");
botonCambiar.addEventListener("click", function() {
    this.innerText = "Cerrar Sesión";
});

let eliminarDef = document.getElementById("Agregar")
eliminarDef.addEventListener("click", function() {
    this.remove()
})

let botonesMg = document.querySelector('#like1');
botonesMg.addEventListener('click', function(){
    let botonmg = parseInt(botonesMg.textContent);
    botonmg++;
    botonesMg.textContent = botonmg + " me gusta";
})

let botones_Mg = document.querySelector('#like2');
botones_Mg.addEventListener('click', function(){
    let botónmg = parseInt(botones_Mg.textContent);
    botónmg++;
    botones_Mg.textContent = botónmg + " me gusta";
})