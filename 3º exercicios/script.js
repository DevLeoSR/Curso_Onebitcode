const veiculo01 = prompt("qual o nome do primeiro veiculo?");
const velocidade01 = prompt("qual a velocidade do primeiro veiculo?");
const veiculo02 = prompt("qual o nome do segundo veiculo?");
const velocidade02 = prompt("qual a velociade do segundo veiculo?");

if (velocidade01 > velocidade02) {
   alert("o veiculo " + veiculo01 + " é mais rapido");
} else if (velocidade01 < velocidade02) {
   alert("o veiculo " + veiculo02 + " é mais rapido");
} else {
   alert("os veiculos estão na mesma velocidade");
}
