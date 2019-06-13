let multiplicador = (a,b) =>{
    let result=1;
    for(let count = a; count <= b; count++){
        result *= count;
    }
    return result;
}