class Point{

    constructor(x,y){
        this._x = (typeof x != 'undefined') ? x : 0;
        this._y = (typeof x != 'undefined') ? y : 0;
    }

    toString(){return `(${this._x}, ${this._y})`};

    distance(aPoint,bPoint) {
        var a = bPoint._x - aPoint._x;
        var b = bPoint._y - aPoint._y;
        return Math.sqrt( a*a + b*b );
    }
    
    clone(){ return new Point(this._x,this._y)}
    
    get x(){return this._x}
    get y(){return this._y}
    set x(x){this._x=x}
    set y(y){this._y=y}

}