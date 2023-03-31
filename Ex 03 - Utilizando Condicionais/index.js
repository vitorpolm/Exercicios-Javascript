const pilotName = prompt("Qual o nome do piloto? ");
let velocity;
let confirmation = confirm(
  "Velocidade inicial da nave é 0 km/s\n\nDeseja acelerar?"
);

do {
  if (confirmation) {
    velocity = prompt("Para qual velocidade gostaria de ir? ");
    alert(
      "O piloto " +
        pilotName +
        " esta viajando a uma velocidade de " +
        velocity +
        " km/s"
    );
    confirmation = confirm("Deseja alterar a velocidade?");
  }
} while (confirmation == true);
