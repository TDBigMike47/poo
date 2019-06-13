class Line{
    constructor(punto1, punto2){//validate
        if(!(punto1 instanceof Point))
            throw Error('El punto 1 no es una instancia de Point');
        else if(!(punto2 instanceof Point))
            throw Error('El punto 2 no es una instancia de Point');
        else
        {
            this._punto1 = punto1;
            this._punto2 = punto2;
        }
            
    }
    draw(){
        console.log('Draw line');
    }

    toString(){
        console.log(`Punto1: (${this._punto1.x}, ${this._punto1.y}) Punto2: (${this._punto2.x}, ${this._punto2.y})`)
    }

    clone(){
        return new Line(this._punto1, this._punto2);
    }

    get punto1(){return this._punto1}
    set punto1(x){this._punto1 = punto1;}
    get punto2(){return this.punto2}
    set punto2(x){this.punto2 = punto2;}
}