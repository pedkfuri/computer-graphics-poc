import { Reta } from "./reta";
import { Ponto } from "./ponto";

class Poligono {
  retas: Reta[];
  pontos: Ponto[];

  constructor(pontos: Ponto[], ...retas: Reta[]) {
    this.retas = retas;
    this.pontos = pontos;
  }

  imprime() {
    console.log('Retas: \n');
    this.retas.forEach((reta, indice) => {
      reta.imprime(indice+1);
    })
  }

  todosPontos() {
    return this.pontos;
  }
};

export { Poligono };