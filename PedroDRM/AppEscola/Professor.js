"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pessoa_1 = require("./Pessoa");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.setValorHora = function (_valor) {
        this.valorHora = _valor;
    };
    Professor.prototype.getValorHora = function () {
        return this.valorHora;
    };
    Professor.prototype.setNumHora = function (_Num) {
        this.numHora = _Num;
    };
    Professor.prototype.getNumHora = function () {
        return this.numHora;
    };
    Professor.prototype.setAreaFormacao = function (_Area) {
        this.areaFormacao = _Area;
    };
    Professor.prototype.getAreaFormacao = function () {
        return this.areaFormacao;
    };
    return Professor;
}(Pessoa_1.Pessoa));
exports.Professor = Professor;
