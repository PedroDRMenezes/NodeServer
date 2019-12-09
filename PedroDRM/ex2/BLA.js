function bla() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    var result = "";
    for (var I = 0; I <= param.length; I++) {
        result += "<div id=" + I + ">" + param[I] + "</div>\n";
    }
    return result;
}
console.log(bla('valor1', 'valor2', 'valor3'));
