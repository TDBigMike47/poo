

//multiplicacion de a y b

function mult(a,b){
    if(typeof a==="number" && typeof b==="number"){
	
	var mult;
	mult=a*b;
	return mult;
    }else
	throw new Error("Alguno de los valores introducidos no es un numero");
}

print(mult(5,6));
print('done...')
