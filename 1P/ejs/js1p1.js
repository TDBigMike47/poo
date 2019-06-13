var a=0;
var b=0;
var c=0;

print('Ingrese el primer numero');
a=parseInt(readline());
print('Ingrese el segundo numero');
b=parseInt(readline());
print('Ingrese el segundo numero');
c=parseInt(readline());
//verificacion de aditivos
if(a==0){
    print("A es un numero que es neutro aditivo: "+a);
}if(b==0){
    print("B es un numero que es neutro aditivo: "+b);
}if(c==0){
    print("C es un numero que es neutro aditivo: "+c);
}
//Cuadrados
if(a<0){
    print("El cuadrado de A es: " +(a*a));
}if(b<0){
    print("El cuadrado de B es: "+(b*b));
}if(c<0){
    print("El cuadrado de C es: "+(c*c));
}

//perimetro del triangulo
var suma=a+b+c;
print("El perimetro de un triangulo con los datos introducidos es: "+suma);

//Raices de la ecuacion cuadratica
bb=(b*b);
ac=(a*c);
raiz=Math.sqrt(bb-4*ac);
x1=(-b+raiz)/(2*a);
x2=(-b-raiz)/(2*a);
print("La raiz de x1 es: "+x1);
print("La raiz de x2 es: "+x2);
