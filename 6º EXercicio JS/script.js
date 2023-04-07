let opcao = '';
do {
   opcao = prompt('escolha uma das opções abaixo:\n' +
   '1)\n' + '2)\n' + '3)\n' + '4)\n' + '5) Sair\n')
   
   switch (opcao) {
      case '1':
         alert('opção 1 escolhida')
         break;
      case '2':
         alert('opção 2 escolhida')
         break;
      case '3':
         alert('opção 3 escolhida')
         break;
      case '4':
         alert('opção 4 escolhida')
         break;
      case '5':
         alert('Saindo ...')
         break;
      default:
         alert('favor escolher uma opção válida!')
   }
} while (opcao != 5);


