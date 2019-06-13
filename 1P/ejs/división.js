

//division de a y b

function div(a,b){
    var res;
    if(b===0){
	throw new Error('Division invalida, no se puede dividir entre 0');
    }if(typeof a==="number" && typeof b==="number"){
        div=a/b;
        return div;
    }else
	throw new Error("Algunos de los datos introducidos no es un numero");
    
}

print(div(5,"0"));
print('done...')
