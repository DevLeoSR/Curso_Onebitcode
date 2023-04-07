const pacientes = [];
let opcao 
let nome
let Fila = '';

do { 
   opcao = prompt(
   'Bem vindo ao consultório!\n'+
   'Fila de Espera:\n\n' + Fila +'\n\n' +
   '1 - Novo paciente\n' +
   '2 - Chamar o paciente\n' +
   '3 - Sair');
   
   Fila = "";

   switch (opcao) {      
      case'1':
         nome = prompt('qual o nome do paciente?');
         pacientes.push(nome);
         alert('O paciente ' + nome + ' foi  adicionado');
         nome = '';
         break;   
      case '2':
         nome = pacientes.shift();
         alert('Chamando o paciente: ' + nome);
         nome = '';
         break;
      case '3':
         alert('Saindo...');
         break;   
      default:
         alert('opção inválida');
   }

   for (let index = 0; index < pacientes.length; index++) {
      Fila += (index + 1) + 'º - ' + pacientes[index] + '\n';
   }

} while (opcao != 3);