const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

// o colchetes [] quando vinculado a uma string faz menção a posição de cada letra da palavra
// podendo ser colocada diretamente numa string ou numa variavel que contem uma string

for (let i = palavra.length - 1; i >= 0; i--) {
   palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
   alert(palavra + " é um palíndromo!")
   } else {
   alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}
