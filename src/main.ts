import { Ponto } from "./ponto";
import { Reta } from "./reta";
import { Poligono } from "./poligono";
import { Canvas } from "./canvas";

const ponto1 = new Ponto(9, 5);
const ponto2 = new Ponto(61, 63);
const ponto3 = new Ponto(2, 40);
const reta1 = new Reta(ponto1, ponto2);
const reta2 = new Reta(ponto2, ponto3);
const reta3 = new Reta(ponto3, ponto1);

const canvas = new Canvas(1024, 1024, 128);

canvas.desenhaGrid();

reta1.todosPontos().forEach(ponto => canvas.colorePixelXY(ponto.x, ponto.y));
reta2.todosPontos().forEach(ponto => canvas.colorePixelXY(ponto.x, ponto.y));
reta3.todosPontos().forEach(ponto => canvas.colorePixelXY(ponto.x, ponto.y));
