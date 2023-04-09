const sine = [];

let opcao;
do {
   opcao = prompt("Bem vindo ao sine de Uberlândia!\n\n Escolha a opção que deseja:\n" +
      "1 - Mostrar todas as vagas.\n2 - Cadastrar uma vaga.\n3 - consultar vaga pelo código.\n" +
      "4 - inscrever um(a) candidato(a) em uma vaga\n5 - Excluir uma vaga\n6 - Sair"
   );

   switch (opcao) {
   case "1":
      let acumulador = "";
      let totalVagas = "";
      for (let index = 0; index < sine.length; index++) {
         totalVagas += 'Indice da vaga: '+ index + '\n' +
                        'Vaga: '+ sine[index].nome + '\n';
         acumulador += 'Candidato: '+ sine[index].candidatos + '\n';
         }
         alert(totalVagas + '\n\n' +'Lista de Todos os candidatos:\n\n' + acumulador)
      break;
   case "2":
      const vaga = {};
      vaga.nome = prompt('informe o nome da vaga:'),
      vaga.descricao = prompt('informe a descrição da vaga:'),
      vaga.data = prompt('Informe o prazo de validade da vaga:'),
      vaga.candidatos ='teste'

      const confirma = confirm('Salvar esta vaga?\n' +
         '\nNome da vaga: ' + vaga.nome + 
         '\nDescrição da vaga: ' + vaga.descricao +
         '\nPrazo de validade da vaga: ' + vaga.data)
      if (confirma) {sine.push(vaga)}
      break;
   case "3":

      break;
   case "4":

      break;
   case "5":

      break;
   case "6":
      alert("Saindo...");
      break;
   default:
      alert("opção inválida");
   }
} while (opcao != 6);
