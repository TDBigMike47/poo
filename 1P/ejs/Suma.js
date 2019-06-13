

//Suma de a y b

function echo(a,b){
    var sum;
    if(typeof a=== 'number' &&           b=== 'number'){
	sum=a+b;
	return sum;
    }else
	throw new Error('No ingreso un numero');
}

print(echo('s',6));
print('done...')
