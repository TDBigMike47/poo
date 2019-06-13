//
// this may be a class, object, module, or function
//
function convert() {
    let k = document.getElementById("kilometro").value
    let o = k/1.609
    document.getElementById("out").innerHTML = o.toFixed(2) + " millas"
}
function convert2() {
    let d = document.getElementById("milla").value
    let o = d*1.609
    document.getElementById("out").innerHTML = o.toFixed(2) + " kilometro"
}