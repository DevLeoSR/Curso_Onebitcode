const nome = prompt('Qual o seu nome?');
let cidade = prompt('ja visitou alguma cidade? Sim/Não');
let contador = 0;
let nomeDasCidades = '';

while(cidade == 'sim' || cidade == 'Sim'){
   let Visita = prompt('Qual o nome da cidade que visitou?')
   nomeDasCidades += Visita + '\n'; 
   contador++
   cidade = prompt('Visitou mais alguma cidade? Sim/Não')
}

alert( 'O numero de cidades que '+ nome + ' visitou  foi: ' + contador + ' cidades e os nomes são(é):\n' + nomeDasCidades)