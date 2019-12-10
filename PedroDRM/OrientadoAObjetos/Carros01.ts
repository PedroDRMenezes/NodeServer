export class Carro {
    private placa: string;
    private cor: string;
    private modelo: string;
    private ano: number;
    private estado: boolean;

    public ligar(): void {
        this.estado = true;
        console.log(`O carro ligou`);
    }

    public andar(): void {
        if (this.estado == true) {
            console.log("O carro " + this.modelo + " do ano " + this.ano + " ta andando...");
        }
        else {
            console.log(`Ligue o carro ${this.modelo} primeiro`);
        }
    }

    public parar(): void {
        if (this.estado == true) {
            console.log(`O carro ${this.modelo} de placa ${this.placa}, e do ano ${this.ano} acabou de parar.`);
        }
        else {
            console.log("Ligue o carro primeiro");
        }
    }

    public desligar(): void {
        this.estado = false;
        console.log(`O carro desligou`);
    }

    public setPlaca(_placa): string {
        if (_placa.length == 7) {
            this.placa = _placa;
            return this.placa;
        }
        else {
            console.log(`Placa errada`);
        }
    }

    public getPlaca(): string {
        return this.placa;
    }

    public setCor(_cor): string {
        this.cor = _cor;
        return this.cor;
    }

    public getCor(): string {
        return this.cor;
    }

    public setAno(_ano): number {
        if (_ano <= 2020 && _ano >= 1985) {
            this.ano = _ano;
            return this.ano;
        }
        else{
            console.log(`Ano errado`)
        }
    }

    public getAno(): number {
        return this.ano;
    }
    
    public setModelo(_modelo): string {
        this.modelo = _modelo;
        return this.modelo;
    }

    public getModelo(): string {
        return this.modelo;
    }

}