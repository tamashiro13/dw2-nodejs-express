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
  atacando() {
    return "está atacando!";
  }
  defender() {
    return "está se defendendo!";
  }
}

const homemAranha = new Heroi("Homem-Aranha", "70", "85", "65");
document.write(
  `<p>O herói ${homemAranha.nome} tem ${homemAranha.vida} pontos de vida, tem ${homemAranha.velocidade} pontos de velocidade e tem ${homemAranha.forca} pontos de força, e neste exato momento o ${homemAranha.nome} ${homemAranha.correr()}</p>`,
);

const superman = new Heroi("Superman", "100", "100", "100");
document.write(
  `<p>O herói ${superman.nome} tem ${superman.vida} pontos de vida, tem ${superman.velocidade} pontos de velocidade e tem ${superman.forca} pontos de força, e neste exato momento o ${superman.nome} ${superman.andar()}
</p>`,
);

const batman = new Heroi("Batman", "60", "60", "65");
document.write(
  `<p>O herói ${batman.nome} tem ${batman.vida} pontos de vida, tem ${batman.velocidade} pontos de velocidade e tem ${batman.forca} pontos de força, e neste exato momento o ${batman.nome} ${batman.atacando()}
  </p>`,
);

homemAranha.teia = "Soltar Teia";
homemAranha.sentidoAranha = function () {
    return "Hora de dar uma balançada por aí! TCHÁÁÁ!"
}

superman.podeVoar = "Voar";
superman.visacalor = function () {
    return "Hora de dar uma esquentada por aí! VISÃO DE CALOR!"
}

batman.esconder = ""