//
// this may be a class, object, module, or function
//
function convert() {
    let k = document.getElementById("galon").value
    let o = k*3.785
    document.getElementById("out").innerHTML = o.toFixed(2) + " litros"
}
function convert2() {
    let d = document.getElementById("litros").value
    let o = d/3.785
    document.getElementById("out").innerHTML = o.toFixed(2) + " galones"
}