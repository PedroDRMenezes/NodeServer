
function bla(...param: string[]): string {
    var result: string = "";
    for (let I = 0; I <= param.length; I++) {
        result += "<div id=" + I + ">" + param[I] + "</div>\n"
    }
    return result
}
console.log(bla('valor1','valor2','valor3'))