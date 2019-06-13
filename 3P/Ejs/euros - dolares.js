//
// this may be a class, object, module, or function
//
function convert() {
    let e = document.getElementById("euro").value
    let o = e*1.0831
    document.getElementById("out").innerHTML = o.toFixed(2) + " Dolars"
}
function convert2() {
    let d = document.getElementById("dolar").value
    let o = d* 0.9233
    document.getElementById("out").innerHTML = o.toFixed(2) + " Euros"
}