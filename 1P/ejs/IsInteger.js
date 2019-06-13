//Verifica si es entero

function IsInteger(n){
    if((n%1)===0)
	return true;
    else
	return false;
}
print(IsInteger(2));
print(IsInteger(2.3));

