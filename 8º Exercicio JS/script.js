let tabuada = parseFloat(prompt('Digite o numero que deseja a tabuada'));
let resultado = '';

for (let index = 1; index <= 20 ; index++) {
     resultado += "->" + tabuada + " x " + index + " = " + (tabuada * index) + '\n'
}
alert('a tabuada do ' + tabuada + '\n\n' + resultado)