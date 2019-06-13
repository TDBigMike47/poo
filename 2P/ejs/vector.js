class Vector{
    constructor(a){
	if (Array.isArray(a)){
	    this._a = a;
	} else {
	    console.log('no es vector');
	}
    };
    min(){
	    let t = this._a[0];
	    for (let x of this._a){
	    if (t>x)
		t = x;
	}
	return t;
    };
    max(){
        let t = this._a[0];
	    for (let x of this._a){
	    if (t<x)
		t = x;
	}
	    return t;
    };
    sum(){
        let s = 0;
        for (let x of this._a){
	    s = s + x;
        }
        return s;
    };
    avg(){
        let s = 0;
        let r = 0;
        for (let x of this._a){
	    s = (s + x);
        }
        r = s/this._a.length;
        return r;
    };
    initialize(v1,v2){
        for(let i = 0; i < v2; i++){
            this._a[i] = v1;
        }
        return this._a;
    };
    vectorize(v1,v2,v3){
        let res = (v2-v1) / v3;
        let arr =[]
        for(let inc=0; inc<=v3; inc++){
            arr.push(v1);
            v1+=res;
        }
        return arr;
    };
    getData(){
        return  {this_a,this_v};
    };
}
/*
function vectorize(a,b,k){
    let pts = [];
    let a = 0;
    let b = 1;
    let n = 10;
    let i = (b-a)/n;
}
*/