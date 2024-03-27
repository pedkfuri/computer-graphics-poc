class Ponto {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  imprime() {
    console.log(`x: ${this.y} y: ${this.y}`);
  }
}

export { Ponto };