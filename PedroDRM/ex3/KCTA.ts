function ano(x: number): boolean {
    var result: boolean;
    if (x % 4 == 0 && x % 100 != 0) {
        result = true;
    }
    else {
        if (x % 400 == 0) {
            result = true;
        }
        result = false;
    }
    return result
}
console.log(ano(2016))
console.log(ano(2012))
console.log(ano(2010))
console.log(ano(2011))
console.log(ano(2020))
