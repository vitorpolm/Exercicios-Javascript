let pessoaVelha, idadeVelha, pessoaNova, idadeNova;

pessoaVelha = prompt("Digite o nome da pessoa mais velha: ");
idadeVelha = prompt("Digite a idade da pessoa mais velha: ");
pessoaNova = prompt("Digite o nome da pessoa mais nova: ");
idadeNova = prompt("Digite a idade da pessoa mais nova: ");

alert(
  "Nome da pessoa mais velha: " +
    pessoaVelha +
    "\nIdade: " +
    idadeVelha +
    "\nNome da pessoa mais nova:" +
    pessoaNova +
    "\nIdade: " +
    idadeNova +
    "\n\nDiferença de idade entre elas: " +
    (idadeVelha - idadeNova)
);
