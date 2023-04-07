const baralho = [];
let Pilha = '';
let opcao;

do {
   opcao = prompt('No baralho consta '+ baralho.length + ' carta(s): \n' +
   '\n1 - Adicionar Carta' +
   '\n2 - Puxar uma carta' +
   '\n3 - Sair');  

   switch (opcao) {
      case '1':
         baralho.unshift(prompt('qual carta deseja adicionar:'));
         break;
      case '2':
         if (baralho.length > 0){
            alert('a carta puxada foi: ' + baralho.shift() );
         }else{
            alert ('não há cartas na pilha')};
         break;
      case '3':
         alert('Saindo do jogo...')  
         break;
      default: alert('Opção  inválida...')    
   }
} while (opcao != 3); 

