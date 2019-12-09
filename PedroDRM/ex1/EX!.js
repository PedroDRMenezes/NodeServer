"use strict";
exports.__esModule = true;
var titulo;
var descrição;
var teclado = require("readline-sync");
titulo = teclado.question("escreva o titulo: ");
descrição = teclado.question("escreva a descrição: ");
function bla() {
    console.log("<html><head><title>.:" + titulo + ":.</title></head><body><h1>" + titulo + "</h1><hr/><p>" + descrição + "</p></body></html>");
}
console.log(bla());
