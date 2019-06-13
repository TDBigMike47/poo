function calcular(x){
    var x = document.getElementById("tarea").value
    document.getElementById("caracteres").innerHTML = "Caracteres: " + x.length
    document.getElementById("palabras").innerHTML = "Palabras: " + x.split(" ").length
}