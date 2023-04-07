const pacientes = [];
let opcao 

do { 
   let Fila = "";
   for (let i = 0; i < pacientes.length; i++) {
      Fila += (i + 1) + 'º - ' + pacientes[i] + '\n';
   }
   
   opcao = prompt(
   'Bem vindo ao consultório!\n\n'+
   'Fila de Espera:\n' + Fila +'\n' +
   '1 - Novo paciente\n' +
   '2 - Chamar o paciente\n' +
   '3 - Sair');

   switch (opcao) {      
      case'1':
         pacientes.push(prompt('qual o nome do paciente?'));
         break;   
      case '2':
         if (pacientes.length > 0) {
            alert('Chamando o paciente: ' + pacientes.shift());   
         } else { alert('não há pacientes na fila!')};
         break;
      case '3':
         alert('Saindo...');
         break;   
      default:
         alert('opção inválida');
   }

} while (opcao != 3);