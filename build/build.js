/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./canvas.ts":
/*!*******************!*\
  !*** ./canvas.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Canvas = void 0;
var Canvas = /** @class */ (function () {
    function Canvas(w, h, p) {
        this.w = w;
        this.h = h;
        this.p = p;
        this.razao = h / p;
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
    }
    Canvas.prototype.desenhaGrid = function () {
        this.w = this.canvas.width - 2;
        for (var x = 1; x < this.canvas.width; x += this.w / this.p) {
            this.context.moveTo(x, 0);
            this.context.lineTo(x, this.w);
        }
        this.h = this.canvas.height - 2;
        for (var y = 1; y < this.canvas.height; y += this.h / this.p) {
            this.context.moveTo(0, y);
            this.context.lineTo(this.h, y);
        }
        this.context.stroke();
    };
    Canvas.prototype.colorePixelXY = function (x, y) {
        var pixel = new Path2D();
        this.context.fillStyle = 'black';
        x = x * this.razao;
        y = 512 - (y * this.razao) - this.razao;
        pixel.rect(x, y, this.razao, this.razao);
        this.context.fill(pixel);
    };
    return Canvas;
}());
exports.Canvas = Canvas;
;


/***/ }),

/***/ "./ponto.ts":
/*!******************!*\
  !*** ./ponto.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ponto = void 0;
var Ponto = /** @class */ (function () {
    function Ponto(x, y) {
        this.x = x;
        this.y = y;
    }
    Ponto.prototype.imprime = function () {
        console.log("x: ".concat(this.y, " y: ").concat(this.y));
    };
    return Ponto;
}());
exports.Ponto = Ponto;


/***/ }),

/***/ "./reta.ts":
/*!*****************!*\
  !*** ./reta.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Reta = void 0;
var Reta = /** @class */ (function () {
    function Reta(ponto1, ponto2) {
        this.ponto1 = ponto1;
        this.ponto2 = ponto2;
    }
    Reta.prototype.imprime = function (indice) {
        console.log("Reta ".concat(indice, ": (").concat(this.ponto1.x, ", ").concat(this.ponto1.y, ") -> (").concat(this.ponto2.x, ", ").concat(this.ponto2.y, ")"));
    };
    Reta.prototype.todosPontos = function () {
        return this.bresenhamReta(this.ponto1.x, this.ponto1.y, this.ponto2.x, this.ponto2.y);
    };
    Reta.prototype.bresenhamReta = function (x1, y1, x2, y2) {
        var listaPontos = [];
        var dx = x2 - x1;
        var dy = y2 - y1;
        var absdx = Math.abs(dx);
        var absdy = Math.abs(dy);
        var x = x1;
        var y = y1;
        listaPontos.push({ x: x, y: y });
        if (absdx > absdy) {
            var d = 2 * absdy - absdx;
            for (var i = 0; i < absdx; i++) {
                x = dx < 0 ? x - 1 : x + 1;
                if (d < 0) {
                    d = d + 2 * absdy;
                }
                else {
                    y = dy < 0 ? y - 1 : y + 1;
                    d = d + (2 * absdy - 2 * absdx);
                }
                listaPontos.push({ x: x, y: y });
            }
        }
        else {
            var d = 2 * absdx - absdy;
            for (var i = 0; i < absdy; i++) {
                y = dy < 0 ? y - 1 : y + 1;
                if (d < 0)
                    d = d + 2 * absdx;
                else {
                    x = dx < 0 ? x - 1 : x + 1;
                    d = d + 2 * absdx - 2 * absdy;
                }
                listaPontos.push({ x: x, y: y });
            }
        }
        return listaPontos;
    };
    return Reta;
}());
exports.Reta = Reta;
;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ponto_1 = __webpack_require__(/*! ./ponto */ "./ponto.ts");
var reta_1 = __webpack_require__(/*! ./reta */ "./reta.ts");
var canvas_1 = __webpack_require__(/*! ./canvas */ "./canvas.ts");
var ponto1 = new ponto_1.Ponto(9, 5);
var ponto2 = new ponto_1.Ponto(61, 63);
var ponto3 = new ponto_1.Ponto(2, 40);
var reta1 = new reta_1.Reta(ponto1, ponto2);
var reta2 = new reta_1.Reta(ponto2, ponto3);
var reta3 = new reta_1.Reta(ponto3, ponto1);
var canvas = new canvas_1.Canvas(1024, 1024, 128);
canvas.desenhaGrid();
reta1.todosPontos().forEach(function (ponto) { return canvas.colorePixelXY(ponto.x, ponto.y); });
reta2.todosPontos().forEach(function (ponto) { return canvas.colorePixelXY(ponto.x, ponto.y); });
reta2.todosPontos().forEach(function (ponto) { return canvas.colorePixelXY(ponto.x, ponto.y); });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxjQUFjO0FBQ2Q7Ozs7Ozs7Ozs7O0FDcENhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsYUFBYTs7Ozs7Ozs7Ozs7QUNiQTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFlBQVk7QUFDWjs7Ozs7OztVQ3ZEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQywyQkFBUztBQUMvQixhQUFhLG1CQUFPLENBQUMseUJBQVE7QUFDN0IsZUFBZSxtQkFBTyxDQUFDLDZCQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0RBQWdEO0FBQy9GLCtDQUErQyxnREFBZ0Q7QUFDL0YsK0NBQStDLGdEQUFnRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RyYWZ0Ly4vY2FudmFzLnRzIiwid2VicGFjazovL2RyYWZ0Ly4vcG9udG8udHMiLCJ3ZWJwYWNrOi8vZHJhZnQvLi9yZXRhLnRzIiwid2VicGFjazovL2RyYWZ0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RyYWZ0Ly4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2FudmFzID0gdm9pZCAwO1xudmFyIENhbnZhcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYW52YXModywgaCwgcCkge1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICB0aGlzLmggPSBoO1xuICAgICAgICB0aGlzLnAgPSBwO1xuICAgICAgICB0aGlzLnJhemFvID0gaCAvIHA7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG4gICAgQ2FudmFzLnByb3RvdHlwZS5kZXNlbmhhR3JpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ID0gdGhpcy5jYW52YXMud2lkdGggLSAyO1xuICAgICAgICBmb3IgKHZhciB4ID0gMTsgeCA8IHRoaXMuY2FudmFzLndpZHRoOyB4ICs9IHRoaXMudyAvIHRoaXMucCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh4LCAwKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCwgdGhpcy53KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmggPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyO1xuICAgICAgICBmb3IgKHZhciB5ID0gMTsgeSA8IHRoaXMuY2FudmFzLmhlaWdodDsgeSArPSB0aGlzLmggLyB0aGlzLnApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oMCwgeSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuaCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICAgIH07XG4gICAgQ2FudmFzLnByb3RvdHlwZS5jb2xvcmVQaXhlbFhZID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIHBpeGVsID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgeCA9IHggKiB0aGlzLnJhemFvO1xuICAgICAgICB5ID0gNTEyIC0gKHkgKiB0aGlzLnJhemFvKSAtIHRoaXMucmF6YW87XG4gICAgICAgIHBpeGVsLnJlY3QoeCwgeSwgdGhpcy5yYXphbywgdGhpcy5yYXphbyk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKHBpeGVsKTtcbiAgICB9O1xuICAgIHJldHVybiBDYW52YXM7XG59KCkpO1xuZXhwb3J0cy5DYW52YXMgPSBDYW52YXM7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG9udG8gPSB2b2lkIDA7XG52YXIgUG9udG8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9udG8oeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICBQb250by5wcm90b3R5cGUuaW1wcmltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ4OiBcIi5jb25jYXQodGhpcy55LCBcIiB5OiBcIikuY29uY2F0KHRoaXMueSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFBvbnRvO1xufSgpKTtcbmV4cG9ydHMuUG9udG8gPSBQb250bztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZXRhID0gdm9pZCAwO1xudmFyIFJldGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmV0YShwb250bzEsIHBvbnRvMikge1xuICAgICAgICB0aGlzLnBvbnRvMSA9IHBvbnRvMTtcbiAgICAgICAgdGhpcy5wb250bzIgPSBwb250bzI7XG4gICAgfVxuICAgIFJldGEucHJvdG90eXBlLmltcHJpbWUgPSBmdW5jdGlvbiAoaW5kaWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmV0YSBcIi5jb25jYXQoaW5kaWNlLCBcIjogKFwiKS5jb25jYXQodGhpcy5wb250bzEueCwgXCIsIFwiKS5jb25jYXQodGhpcy5wb250bzEueSwgXCIpIC0+IChcIikuY29uY2F0KHRoaXMucG9udG8yLngsIFwiLCBcIikuY29uY2F0KHRoaXMucG9udG8yLnksIFwiKVwiKSk7XG4gICAgfTtcbiAgICBSZXRhLnByb3RvdHlwZS50b2Rvc1BvbnRvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJlc2VuaGFtUmV0YSh0aGlzLnBvbnRvMS54LCB0aGlzLnBvbnRvMS55LCB0aGlzLnBvbnRvMi54LCB0aGlzLnBvbnRvMi55KTtcbiAgICB9O1xuICAgIFJldGEucHJvdG90eXBlLmJyZXNlbmhhbVJldGEgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgdmFyIGxpc3RhUG9udG9zID0gW107XG4gICAgICAgIHZhciBkeCA9IHgyIC0geDE7XG4gICAgICAgIHZhciBkeSA9IHkyIC0geTE7XG4gICAgICAgIHZhciBhYnNkeCA9IE1hdGguYWJzKGR4KTtcbiAgICAgICAgdmFyIGFic2R5ID0gTWF0aC5hYnMoZHkpO1xuICAgICAgICB2YXIgeCA9IHgxO1xuICAgICAgICB2YXIgeSA9IHkxO1xuICAgICAgICBsaXN0YVBvbnRvcy5wdXNoKHsgeDogeCwgeTogeSB9KTtcbiAgICAgICAgaWYgKGFic2R4ID4gYWJzZHkpIHtcbiAgICAgICAgICAgIHZhciBkID0gMiAqIGFic2R5IC0gYWJzZHg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFic2R4OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gZHggPCAwID8geCAtIDEgOiB4ICsgMTtcbiAgICAgICAgICAgICAgICBpZiAoZCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IGQgKyAyICogYWJzZHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB5ID0gZHkgPCAwID8geSAtIDEgOiB5ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgZCA9IGQgKyAoMiAqIGFic2R5IC0gMiAqIGFic2R4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlzdGFQb250b3MucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZCA9IDIgKiBhYnNkeCAtIGFic2R5O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhYnNkeTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeSA9IGR5IDwgMCA/IHkgLSAxIDogeSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKGQgPCAwKVxuICAgICAgICAgICAgICAgICAgICBkID0gZCArIDIgKiBhYnNkeDtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGR4IDwgMCA/IHggLSAxIDogeCArIDE7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBkICsgMiAqIGFic2R4IC0gMiAqIGFic2R5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXN0YVBvbnRvcy5wdXNoKHsgeDogeCwgeTogeSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdGFQb250b3M7XG4gICAgfTtcbiAgICByZXR1cm4gUmV0YTtcbn0oKSk7XG5leHBvcnRzLlJldGEgPSBSZXRhO1xuO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBvbnRvXzEgPSByZXF1aXJlKFwiLi9wb250b1wiKTtcbnZhciByZXRhXzEgPSByZXF1aXJlKFwiLi9yZXRhXCIpO1xudmFyIGNhbnZhc18xID0gcmVxdWlyZShcIi4vY2FudmFzXCIpO1xudmFyIHBvbnRvMSA9IG5ldyBwb250b18xLlBvbnRvKDksIDUpO1xudmFyIHBvbnRvMiA9IG5ldyBwb250b18xLlBvbnRvKDYxLCA2Myk7XG52YXIgcG9udG8zID0gbmV3IHBvbnRvXzEuUG9udG8oMiwgNDApO1xudmFyIHJldGExID0gbmV3IHJldGFfMS5SZXRhKHBvbnRvMSwgcG9udG8yKTtcbnZhciByZXRhMiA9IG5ldyByZXRhXzEuUmV0YShwb250bzIsIHBvbnRvMyk7XG52YXIgcmV0YTMgPSBuZXcgcmV0YV8xLlJldGEocG9udG8zLCBwb250bzEpO1xudmFyIGNhbnZhcyA9IG5ldyBjYW52YXNfMS5DYW52YXMoMTAyNCwgMTAyNCwgMTI4KTtcbmNhbnZhcy5kZXNlbmhhR3JpZCgpO1xucmV0YTEudG9kb3NQb250b3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChwb250bykgeyByZXR1cm4gY2FudmFzLmNvbG9yZVBpeGVsWFkocG9udG8ueCwgcG9udG8ueSk7IH0pO1xucmV0YTIudG9kb3NQb250b3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChwb250bykgeyByZXR1cm4gY2FudmFzLmNvbG9yZVBpeGVsWFkocG9udG8ueCwgcG9udG8ueSk7IH0pO1xucmV0YTIudG9kb3NQb250b3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChwb250bykgeyByZXR1cm4gY2FudmFzLmNvbG9yZVBpeGVsWFkocG9udG8ueCwgcG9udG8ueSk7IH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9