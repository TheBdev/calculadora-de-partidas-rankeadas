
//Calculadora de Partidas Rankeadas
//Usar variáveis, operadores, pode usar laços de repetição, estruturas de decisões, mas usar principalmente funçoes.
let saldoDeVitorias = qtdVitoriasDerrotas(100,9)

function qtdVitoriasDerrotas (vitorias, derrotas){
  let resultado = vitorias - derrotas
  return resultado;
}

if(saldoDeVitorias<10){
  let nivel = "Ferro"
  console.log("O herói tem o saldo de " + saldoDeVitorias + " e está no nível de " + nivel + ".")
}

if (saldoDeVitorias>=11 && saldoDeVitorias<=20){
  let nivel = "Bronze"
  console.log("O herói tem o saldo de " + saldoDeVitorias + " e está no nível de " + nivel + "." )
}

if(saldoDeVitorias>=21 && saldoDeVitorias<=50){
  let nivel = "Prata"
  console.log("O herói tem o saldo de " + saldoDeVitorias + " e está no nível de " + nivel + ".")
}

if(saldoDeVitorias>=51 && saldoDeVitorias<=80){
  let nivel = "Ouro"
  console.log("O herói tem o saldo de " + saldoDeVitorias + " e está no nível de " + nivel + ".")
}

if (saldoDeVitorias>=81 && saldoDeVitorias<=90){
  let nivel = "Diamante"
  console.log("O herói tem o saldo de " + saldoDeVitorias + " e está no nível de " + nivel + ".")
}

if (saldoDeVitorias>=91 && saldoDeVitorias<=100){
  let nivel = "Lendário"
  console.log("O herói tem o saldo de " + saldoDeVitorias + " e está no nível de " + nivel + ".")
}

if(saldoDeVitorias>=101){
  let nivel = "Imortal"
  console.log("O herói tem o saldo de " +saldoDeVitorias+ " e está no nível de " + nivel + ".")
}


/* Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal*/