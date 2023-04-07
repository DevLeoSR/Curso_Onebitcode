const pacientes = [];
let opcao 
let Fila = '';

do { 
   opcao = prompt(
   'Bem vindo ao consultório!\n\n'+
   'Fila de Espera:\n' + Fila +'\n' +
   '1 - Novo paciente\n' +
   '2 - Chamar o paciente\n' +
   '3 - Sair');

   Fila = "";

   switch (opcao) {      
      case'1':
         pacientes.push(prompt('qual o nome do paciente?'));
         break;   
      case '2':
         alert('Chamando o paciente: ' + pacientes.shift());         
         break;
      case '3':
         alert('Saindo...');
         break;   
      default:
         alert('opção inválida');
   }

   for (let i = 0; i < pacientes.length; i++) {
      Fila += (i + 1) + 'º - ' + pacientes[i] + '\n';
   }

} while (opcao != 3);