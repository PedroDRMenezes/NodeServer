"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.ligar = function () {
        this.estado = true;
        console.log("O carro ligou");
    };
    Carro.prototype.andar = function () {
        if (this.estado == true) {
            console.log("O carro " + this.modelo + " do ano " + this.ano + " ta andando...");
        }
        else {
            console.log("Ligue o carro " + this.modelo + " primeiro");
        }
    };
    Carro.prototype.parar = function () {
        if (this.estado == true) {
            console.log("O carro " + this.modelo + " de placa " + this.placa + ", e do ano " + this.ano + " acabou de parar.");
        }
        else {
            console.log("Ligue o carro primeiro");
        }
    };
    Carro.prototype.desligar = function () {
        this.estado = false;
        console.log("O carro desligou");
    };
    Carro.prototype.setPlaca = function (_placa) {
        if (_placa.length == 7) {
            this.placa = _placa;
            return this.placa;
        }
        else {
            console.log("Placa errada");
        }
    };
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setCor = function (_cor) {
        this.cor = _cor;
        return this.cor;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setAno = function (_ano) {
        if (_ano <= 2020 && _ano >= 1985) {
            this.ano = _ano;
            return this.ano;
        }
        else {
            console.log("Ano errado");
        }
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setModelo = function (_modelo) {
        this.modelo = _modelo;
        return this.modelo;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    return Carro;
}());
exports.Carro = Carro;
