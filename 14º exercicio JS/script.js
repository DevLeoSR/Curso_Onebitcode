const sine = [];

let opcao;
do {
   opcao = prompt("Bem vindo ao sine de Uberlândia!\n\n Escolha a opção que deseja:\n" +
      "1 - Mostrar todas as vagas.\n2 - Cadastrar uma vaga.\n3 - consultar vaga pelo código.\n" +
      "4 - inscrever um(a) candidato(a) em uma vaga\n5 - Excluir uma vaga\n6 - Sair"
   );

   switch (opcao) {
   case "1":
      let contador = 0;
      let totalVagas = "";
      for (let i = 0; i < sine.length; i++) {
         totalVagas += 'Indice da vaga: '+ i + '\n' + 'Vaga: '+ sine[i].nome + '\n\n';
         const iteraSine = sine[i].candidatos
         for (let j = 0; j < iteraSine.length; j++) {
            if (iteraSine.length) {contador ++}
         }
      }
      alert(totalVagas +'\nQuantidade de total candidatos inscritos:' + contador)
      break;
   case "2":
      const vaga = {};
      vaga.nome = prompt('informe o nome da vaga:'),
      vaga.descricao = prompt('informe a descrição da vaga:'),
      vaga.data = prompt('Informe o prazo de validade da vaga:'),
      vaga.candidatos = []
      const confirma = confirm('Salvar esta vaga?\n' +
         '\nNome da vaga: ' + vaga.nome + 
         '\nDescrição da vaga: ' + vaga.descricao +
         '\nPrazo de validade da vaga: ' + vaga.data)
      if (confirma) {sine.push(vaga)}
      break;
   case "3":
         let contaGente = 0
         const codigo = prompt (" Qual código de vaga deseja consultar?");
         individualVaga = sine[codigo].candidatos
         for (let i = 0; i < individualVaga.length; i++) {
            contaGente ++;
         }

         alert ('Indice: '+ codigo + '\n' 
            + 'vaga: ' + sine[codigo].nome + '\n' + 'Descrição: ' + sine[codigo].descricao + '\n' +'Validade: ' + sine[codigo].data + '\n' +'Candidatos: ' + sine[codigo].candidatos + '\n' + '\nTotal de candidatos nesta vaga: ' + contaGente)
      break;
   case "4":
         const nome = prompt ('Informe o nome do candidato:')
         const numVaga = prompt ('Informe o indice da vaga pretendida:')
         const confirme = confirm('Salvar esta vaga?\n' +
            '\nNome do candidato: ' + nome + 
            '\nIndice da vaga: ' + numVaga + 
            '\nNome da vaga: ' + sine[numVaga].nome + 
            '\nDescrição da vaga: ' + sine[numVaga].descricao +
            '\nPrazo de validade da vaga: ' + sine[numVaga].data)
      if (confirme) {sine[numVaga].candidatos.push(nome)}
      break;
   case "5":
      const ExcluVaga = prompt (" Qual código de vaga deseja excluir?");
      const confirmei = confirm('Indice: '+ ExcluVaga + '\n' + 'vaga: ' + sine[ExcluVaga].nome + '\n' + 'Descrição: ' + sine[ExcluVaga].descricao + '\n' +'Validade: ' + sine[ExcluVaga].data)
      if (confirmei) {sine.splice(ExcluVaga,1)}
      break;
   case "6":
      alert("Saindo...");
      break;
   default:
      alert("opção inválida");
   }
} while (opcao != 6);
