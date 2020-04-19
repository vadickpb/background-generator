var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var dato = document.querySelector("h3");
var body = document.getElementById("gradiente");


function degradado(){
    body.style.background=
    "linear-gradient(to right, " +color1.value+ "," +color2.value+")";
    dato.textContent = body.style.background + ";";
}

color1.addEventListener("input", degradado);

color2.addEventListener("input", degradado);