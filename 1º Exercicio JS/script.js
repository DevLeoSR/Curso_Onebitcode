const nome = prompt('qual seu primeiro nome?');
const sobrenome = prompt('qual seu sobrenome?');
const campEstudo = prompt('qual seu campo de estudo?');
const anoNasc = prompt('Em que ano vc nasceu?');


alert('Seu nome é: ' + nome + ' ' + sobrenome + ' ' +
      '\nEstuda: ' + campEstudo + ' ' +
      '\nSua idade: ' + (2023 - parseFloat(anoNasc)) + 'anos'
);
