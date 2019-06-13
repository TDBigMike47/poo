//
// this may be a class, object, module, or function
//
function convert() {
    let r = document.getElementById("radian").value
    let o = r*(180/3.1416)
    document.getElementById("out").innerHTML = o.toFixed(2) + " grados"
}
function convert2() {
    let g = document.getElementById("grados").value
    let o = g*(3.1416/180)
    document.getElementById("out").innerHTML = o.toFixed(2) + " radianes"
}