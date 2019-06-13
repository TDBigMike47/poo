//isNumber(x)
//-< z
//<- true si es un numero
//<- false si no es un numero

//var isNUmber=function(x){
function isNumber(x){
	 if (typeof x=== 'number')
	   return true;
	 else
		return false;
}

print(isNumber('s'));
