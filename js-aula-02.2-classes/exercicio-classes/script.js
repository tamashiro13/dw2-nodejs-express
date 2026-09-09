class Heroi {
  // ATRIBUTOS
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  // MÉTODOS
  correr() {
    return "está correndo!";
  }
  andar() {
    return "está andando!";
  }
  atacar() {
    return "está atacando!";
  }
  defender() {
    return "está se defendendo!";
  }
}

//HOMEM ARANHA
const homemAranha = new Heroi("Homem-Aranha", "70", "85", "65");
homemAranha.teia = 1;
homemAranha.sentidoAranha = function () {
  return "detectou perigo com o sentido aranha!";
};
document.write(
  `<p>O herói ${homemAranha.nome} tem ${homemAranha.vida} pontos de vida, tem ${homemAranha.velocidade} pontos de velocidade e tem ${homemAranha.forca} pontos de força, e neste exato momento o ${homemAranha.nome} ${homemAranha.correr()}</p>`,
);
document.write(
  `<p>O herói ${homemAranha.nome} ${homemAranha.sentidoAranha()}</p>`,
);

//SUPERMAN
const superman = new Heroi("Superman", "100", "100", "100");
superman.podeVoar = 1;
superman.visaoCalor = function () {
  return "está usando sua visão de calor!";
};
document.write(
  `<p>O herói ${superman.nome} tem ${superman.vida} pontos de vida, tem ${superman.velocidade} pontos de velocidade e tem ${superman.forca} pontos de força, e neste exato momento o ${superman.nome} ${superman.andar()}
</p>`,
);
document.write(
  `<p>O herói ${superman.nome} ${superman.visaoCalor()}</p>`,
);

//BATMAN
const batman = new Heroi("Batman", "60", "60", "65");
batman.esconder = 1;
batman.investigar = function () {
  return "está investigando um crime!";
};
document.write(
  `<p>O herói ${batman.nome} tem ${batman.vida} pontos de vida, tem ${batman.velocidade} pontos de velocidade e tem ${batman.forca} pontos de força, e neste exato momento o ${batman.nome} ${batman.atacar()}
  </p>`,
);
document.write(
  `<p>O herói ${batman.nome} ${batman.investigar()}, além disso ele ${batman.defender()}</p>`,
);