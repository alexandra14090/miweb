function ContrasenaValida (x) {
    if(x==="2Fj(jjbFsuj" || x=== "eoZiug8g9") return true
    else return false
}

console.log(ContrasenaValida("2Fj(jjbFsuj")) // true
console.log(ContrasenaValida("eoZiugBf&g9")) // true
console.log(ContrasenaValida("hola")) // false
console.log(ContrasenaValida("")) // false