let spaceShip = {};

startSpaceship();

function startSpaceship() {
  spaceShip.name = prompt("Qual o nome da nave: ");
  spaceShip.typeSpaceship = prompt("Qual o tipo da nave: ");
  spaceShip.maxVelocity = prompt("Qual é a velocidade maxima da nave: ");
  spaceShip.actualVelocity = 0;
  optionsSpaceship();
}

function optionsSpaceship() {
  let option = prompt(
    "Velocidade atual da nave é: " +
      spaceShip.actualVelocity +
      " km/s" +
      "\n\nO que o capitão deseja fazer:\n" +
      "\n1 - Acelerar\n2 - Parar"
  );
  if (option == "1") {
    console.log("entrou");
    accelaration();
  } else if (option == "2") {
    stop();
  }
}

function accelaration() {
  let velocity = parseFloat(prompt("Quanto voce quer acelerar: "));
  spaceShip.actualVelocity += velocity;
  if (spaceShip.actualVelocity > spaceShip.maxVelocity) {
    alert(
      "Velocidade atual está acima do maximo da nave.\nVoce esta correndo riscos.\n\nVelocidade atual da nave: " +
        spaceShip.actualVelocity +
        "\n\nVelocidade maxima da nave: " +
        spaceShip.maxVelocity
    );
  } else if (spaceShip.actualVelocity == spaceShip.maxVelocity) {
    alert(
      "Cuidado, voce atingiu a velocidade maxima da nav. \n\nVelocidade maxima: " +
        spaceShip.maxVelocity
    );
  } else if (spaceShip.actualVelocity < spaceShip.maxVelocity) {
    alert(
      "Velocidade aumentada!\n\nVelocidade atual de navegação: " +
        spaceShip.actualVelocity
    );
  }
  optionsSpaceship();
}

function stop() {
  spaceShip.actualVelocity = 0;
  alert(
    "Desacelerando a nave..........\n\nVelocidade atual: " +
      spaceShip.actualVelocity +
      "\nNave parada e sistema encerrado."
  );
}

