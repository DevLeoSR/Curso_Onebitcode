const metros = parseFloat(prompt('Informe o valor em metros a ser convertido'))
const escolha = prompt(
   'Em qual unidade deseja converter:\n'+
      '1- Milímetro(mm)  \n' + 
      '2- Centímetro(cm) \n' + 
      '3- Decímetro(dm)  \n' + 
      '4- Decâmetro(dam) \n' +
      '5- Hectômetro(hm) \n' +
      '6- Quilômetro(km)')


switch(escolha){
   case '1':
      alert(' o valor convertido é de: ' + (metros * 1000) +' milímetro(s)')
      break
   case '2':
      alert(' o valor convertido é de: ' + (metros * 100) +' decímetro(s)')
      break
   case '3':
      alert(' o valor convertido é de: ' + (metros * 10) +' decâmetro(s)')
      break
   case '4':
      alert(' o valor convertido é de: ' + (metros / 10) +' decâmetro(s)')
      break
   case '5':
      alert(' o valor convertido é de: ' + (metros / 100) +' hectômetro(s)')
      break
   case '6':
      alert(' o valor convertido é de: ' + (metros / 1000) +' quilometro(s)')
      break
   default:
      alert('o valor ' + metros + ' não foi convertido')
}