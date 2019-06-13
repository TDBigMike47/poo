//
// this may be a class, object, module, or function
//
function convert() {
    let k = document.getElementById("kelvin").value
    let o =  k- 273.15
    document.getElementById("out").innerHTML = o.toFixed(2) + " degrees C"
}

function convert2() {
    let k = document.getElementById("celsius").value
    let o =  k+ 273.15
    document.getElementById("out").innerHTML = o.toFixed(2) + " degrees k"
}