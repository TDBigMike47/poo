//aleatorios, 10 decimales
function gdecimales(){
    var decimales = ""
    for(let c = 1; c <= 10; c++){
        decimales = decimales + Math.random() + "\n"
    }
    document.getElementById("decAleatorios").innerHTML = decimales;
}

function galeatorios(){
    var aleatorios = "";
    for(let c = 1; c <= 10; c++){
        aleatorios = aleatorios + (Math.floor(Math.random() * (11 - 1)) + 1) + "\n"
    }
    document.getElementById("aleatorios").innerHTML = aleatorios;
}

function supera(){
    var aleatorios = "";
    for(let c = 1; c <= 10; c++){
        aleatorios = aleatorios + (Math.floor(Math.random() * 101) + "\n")
    }
    document.getElementById("superAleatorios").innerHTML = aleatorios;
}