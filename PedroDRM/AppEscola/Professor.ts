import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa{

    private valorHora:number;
    private numHora:number;
    private areaFormacao:string;

    public setValorHora(_valor: number): void{
        this.valorHora = _valor;
    }
    public getValorHora(): number{
        return this.valorHora;
    }

    public setNumHora(_Num: number): void{
        this.numHora = _Num;
    }
    public getNumHora(): number{
        return this.numHora;
    }

    public setAreaFormacao(_Area: string): void{
        this.areaFormacao = _Area;
    }
    public getAreaFormacao(): string{
        return this.areaFormacao;
    }

}
