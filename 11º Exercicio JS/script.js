const baralho = [];
let Pilha = '';
let opcao;

do {
   opcao = prompt('No baralho consta as cartas: \n' + Pilha + '\n' +
   '\n1 - Adicionar Carta' +
   '\n2 - Puxar uma carta' +
   '\n3 - Sair');   // Menu do app  

   switch (opcao) {
      case '1':
         baralho.unshift(prompt('qual carta deseja adicionar:'));
         //baralho.push(prompt('qual carta deseja adicionar:'));  // outra forma de ser feito
         break;
      case '2':
         if (baralho.length > 0){
         alert('a carta puxada foi: ' + baralho.shift() );
         //alert('a carta puxada foi: ' + baralho.pop());  // outra forma de ser feito
         }else{alert ('não há cartas na pilha')};
         break;
      case '3':
         alert('Saindo do jogo...')  
         break;
      default: alert('Opção  inválida...')    
   }
   // reset do acumulador
   Pilha = ''; 
   // acumulador
   for (let index = 0; index < baralho.length; index++) {
         Pilha += '\n' + baralho[index];
         //Pilha +=  baralho[index] + '\n';  // outra forma de ser feito
   }; 

} while (opcao != 3); 

