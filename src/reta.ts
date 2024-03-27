import { Ponto } from "./ponto";

class Reta {
  ponto1: Ponto;
  ponto2: Ponto;
  
  constructor(ponto1: Ponto, ponto2: Ponto) {
    this.ponto1 = ponto1;
    this.ponto2 = ponto2;
  }

  imprime(indice: number) {
    console.log(`Reta ${indice}: (${this.ponto1.x}, ${this.ponto1.y}) -> (${this.ponto2.x}, ${this.ponto2.y})`);
  }

  todosPontos() {
    return this.bresenhamReta(this.ponto1.x, this.ponto1.y, this.ponto2.x, this.ponto2.y);
  }

  bresenhamReta(x1: number, y1: number, x2: number, y2: number) {
    let listaPontos = [];

    const dx = x2 - x1;
    const dy = y2 - y1;
    const absdx = Math.abs(dx);
    const absdy = Math.abs(dy);

    let x = x1;
    let y = y1;
    
    listaPontos.push({ x, y });

    if (absdx > absdy) {
      let d = 2 * absdy - absdx;

      for (let i = 0; i < absdx; i++) {
        x = dx < 0 ? x - 1 : x + 1;
        if (d < 0) {
          d = d + 2 * absdy;
        } else {
          y = dy < 0 ? y - 1 : y + 1;
          d = d + (2 * absdy - 2 * absdx);
        }
        listaPontos.push({ x, y });
      }
    } else {
      let d = 2 * absdx - absdy;

      for (let i = 0; i < absdy; i++) {
        y = dy < 0 ? y - 1 : y + 1;
        if (d < 0) d = d + 2 * absdx;
        else {
          x = dx < 0 ? x - 1 : x + 1;
          d = d + 2 * absdx - 2 * absdy;
        }
        listaPontos.push({ x, y });
      }
    }
    return listaPontos;
  }
};

export {Reta};