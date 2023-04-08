const imoveis = []
let opcao

do {
   opcao = prompt('imobiliária NoKu! Temos: ' + imoveis.length + ' imóveis cadastrados\n' + 
      '\n1 - Salvar imóvel' +
      '\n2 - Visualizar imóveis' +
      '\n3 - Sair')

   switch (opcao) {
      case '1':
         let nome = prompt('Nome do proprietario: ')
         let quarto = prompt('Quantos quartos tem?')
         let banheiro = prompt('Quantos banheiros tem?')
         let garagem = prompt('tem garagem?')
         imoveis.push({nome:nome,quarto:quarto,banheiro:banheiro,garagem:garagem})
         break;
      case '2':
         let acumulador = "";
         for (let index = 0; index < imoveis.length; ++index) {
            acumulador += 'Proprietário: '+ imoveis[index].nome + '\n' +
                           'Quartos: '+ imoveis[index].quarto + '\n' +
                           'Banheiros: '+ imoveis[index].banheiro + '\n' +
                           'Garagem: '+ imoveis[index].garagem + '\n\n';
            }
            alert(acumulador)
         break;      
      case '3':
         alert('Saindo....')
         break;
      default: alert('opção inválida!')
   }
} while (opcao != 3);