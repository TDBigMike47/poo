

//resta de a y b

function resta(a,b){
    if((typeof a==='number')  && (typeof b=== 'number')){
	var res;
	res=a-b;
	return res;
    }else
	throw new Error('Algun valor introducido no es numero');
}

print(resta('a',2));
print('done...')
