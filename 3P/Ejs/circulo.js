class Circle {
    constructor(originPoint, radius) {

        if (!(originPoint instanceof Point)) {
            console.log(originPoint)
            throw Error('El punto dado no es una instancia de la clase Point');
        } else {
            this._originPoint = originPoint;
            this._radius = radius;
        }
    }

    toString() {
        return 'Point : (${this._originPoint.x}, ${this._originPoint.y}), Radius: ${this._radius}';
    }

    getArea() {
        return Math.PI * (this._radius ** 2);
    }
    get originPoint() {
        return this._originPoint
    }
    get radius() {
        return this._radius
    }
    set originPoint(newPoint) {
        this._originPoint = newPoint
    }
    set radius(newRadius) {
        this._radius = newRadius
    }
}