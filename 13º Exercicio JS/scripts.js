function multi(x,y) {
   return parsefloar(x * y)
};

function soma(x,y) {
   return parsefloar(x + y)
};

function quadrado(z) {
   return z**2 
};

function clear() {
   base = 0
   altura = 0 
};

let altura = 0;
let base = 0;   
let opcao;
do {  
   opcao= prompt('Calculo de area, \n\nEscolha a forma geometrica:\n' +
      '1- Area do triangulo\n' + '2 - Area do retamgulo\n' +
      '3 - Area do quadrado\n' + '4 - Area do trapézio\n' +
      '5 - Area do circulo\n' + '6 - Sair\n'
      );

   switch (opcao) {
      case '1':
         base = prompt('informe a base:');
         altura = prompt('informe a altura:');
         alert(multi(base, altura) /2 );
         clear();
         break;
      case '2':
         base = prompt('informe a base:');
         altura = prompt('informe a altura:');
         alert(multi(base, altura))
         clear();
         break;
      case '3':
         base = prompt('informe um dos lados:');
         alert(quadrado(base));
         clear();
         break;
      case '4':
         base = prompt('informe a base menor:');
         altura = prompt('informe a base maior:');
         base = soma(base,altura);
         altura = prompt('informe a altura:');
         alert(multi(base, altura) /2 );
         clear();
         break;
      case '5':
         base = prompt('informe o raio:');
         alert(quadrado(base) * 3,14);
         clear();
         break;
      case '6':
         alert('Saindo...');
         break;   
      default:alert('opção  inválida');
   }

} while (opcao != 6);
