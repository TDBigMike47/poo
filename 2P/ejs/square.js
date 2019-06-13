class Square {
  constructor(originPoint, endPoint) {

    if (!(originPoint instanceof Point))
      throw Error('El punto de origen no es una instancia de Point');
    else if (!(endPoint instanceof Point))
      throw Error('El punto destino no es una instancia de Point');
    else {
      this._originPoint = originPoint;
      this._endPoint = endPoint;
    }
  }

  toString() {
    console.log(`Punto Origen: (${this._originPoint.x}, ${this._originPoint.y}) Punto Destino: (${this._endPoint.x}, ${this._endPoint.y})`)
  }

  clone() {
    return new Rectangle(this._originPoint, this._endPoint);
  }

  get originPoint() {
    return this._originPoint
  }
  set originPoint(x) {
    this._originPoint = x;
  }
  get endPoint() {
    return this._endPoint
  }
  set endPoint(x) {
    this._endPoint = x;
  }


}