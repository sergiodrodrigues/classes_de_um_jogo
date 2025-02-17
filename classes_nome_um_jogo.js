/*
  
    Escrevendo as Classes de Um Jogo

*/

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque genérico";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso

const guerreiro = new Heroi("Espártaco", 30, "guerreiro");
guerreiro.atacar(); // Saída: O guerreiro atacou usando espada

const ninja = new Heroi("Naruto", 25, "ninja");
ninja.atacar(); // Saída: O ninja atacou usando shuriken
