class Triangle {
  constructor(originPoint, midPoint, endPoint) {

    if (!(originPoint instanceof Point))
      throw Error('El punto de origen no es una instancia de Point');
    else if (!(midPoint instanceof Point))
      throw Error('El punto medio no es una instancia de Point');
    else if (!(endPoint instanceof Point))
      throw Error('El punto final no es una instancia de Point');
    else {
      this._originPoint = originPoint;
      this._midPoint = midPoint;
      this._endPoint = endPoint;
    }
  }

  toString() {
    console.log(`Punto Origen: (${this._originPoint.x}, ${this._originPoint.y}), Punto Medio: (${this._midPoint.x}, ${this._midPoint.y}), Punto Destino: (${this._endPoint.x}, ${this._endPoint.y})`)
  }

  clone() {
    return new Triangle(this._originPoint, this._midPoint, this._endPoint);
  }

  get originPoint() {
    return this._originPoint
  }
  set originPoint(x) {
    this._originPoint = x;
  }
  get midPoint() {
    return this._midPoint
  }
  set midPoint(x) {
    this._midPoint = x;
  }
  get endPoint() {
    return this._endPoint
  }
  set endPoint(x) {
    this._endPoint = x;
  }


}