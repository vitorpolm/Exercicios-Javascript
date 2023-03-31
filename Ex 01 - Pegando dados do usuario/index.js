let idade, nome, confirmation;

alert("Bem vindo! A seguir pediremos que informe alguns dados.");

nome = prompt("Digite seu nome por favor: ");
idade = prompt("Digite sua idade: ");

confirmation = prompt("Vocë confirma que possui " + idade + " anos? (Sim/Não)");

if (confirmation == "Sim" || confirmation == "sim") {
  alert(
    "Dados do usuario:\n\nNome do Usuario: " +
      nome +
      "\nIdade do usuario: " +
      idade +
      " anos" +
      "\nConfirmou a idade? " +
      confirmation
  );
}else {
  idade = prompt("Digite novamente sua idade: ")
}
