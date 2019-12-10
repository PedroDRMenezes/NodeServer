import { Carro } from "./Carros01";

var c1: Carro;
c1 = new Carro();
var c2: Carro;
c2 = new Carro();

c1.setAno(1995);
c1.setModelo("Monza Flauta");
c1.setPlaca("ABC1234");
c1.setCor("Azul do socão")

c2.setAno(2019);
c2.setModelo("Tesla topp");
c2.setPlaca("DRM0505");
c2.setCor("Platina")


c1.ligar();
c1.andar();
c1.parar();
c1.desligar();
c2.ligar();
c2.andar();
c2.parar();
c2.desligar();
c1.andar();
c2.andar();


