class Canvas {
  w: number;
  h: number;
  p: number;
  canvas: HTMLCanvasElement;
  context: any;
  razao: number;

  constructor(w: number, h: number, p: number) {
    this.w = w;
    this.h = h;
    this.p = p;
    this.razao = h/p;

    this.canvas = <HTMLCanvasElement> document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
  }

  desenhaGrid() {
    this.w = this.canvas.width - 2;
    for (let x = 1; x < this.canvas.width; x += this.w / this.p) {
      this.context.moveTo(x, 0);
      this.context.lineTo(x, this.w);
    }
    
    this.h = this.canvas.height - 2;
    for (let y = 1; y < this.canvas.height; y += this.h / this.p) {
      this.context.moveTo(0, y);
      this.context.lineTo(this.h, y);
    }
    this.context.stroke();
  }

  colorePixelXY(x: number, y: number) {
    const pixel = new Path2D();
    this.context.fillStyle = 'black';

    x = x * this.razao;
    y = 512 - (y * this.razao) - this.razao;

    pixel.rect(x, y, this.razao, this.razao);
    this.context.fill(pixel);
  }
};

export { Canvas };