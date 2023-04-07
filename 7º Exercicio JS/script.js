let dinheiroTotal =parseFloat(prompt('quantidade de dinheiro inicial:'));
let opcao = '';
let valor = 0;


do {
   opcao = prompt('O valor total é: R$'+ dinheiroTotal +'\nopções:\n' + '1 - Adicionar dinheiro\n' + '2 - Retirar dinheiro\n' + '3 - Sair')

   switch (opcao) {
      case '1':
         valor=(prompt('qual valor a ser Depositado:'))
         dinheiroTotal += parseFloat(valor) 
         break;
      case '2':
         valor=(prompt('qual valor a ser Depositado:'))
         dinheiroTotal -= parseFloat(valor)
         break;
      case '3':
         alert('Saindo...')
         break;
      default:
         alert('opção inválida')
   }
} while (opcao != 3);
