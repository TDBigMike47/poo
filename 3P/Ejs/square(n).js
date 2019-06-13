const power =(base)=>{
    let result=1;
    for(let count = 0; count < 3; count++){
        result *= base;
    }
    return result;
}

//power(2,3)
//Math.pow(2,3)