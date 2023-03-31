const nameSpaceShip = prompt("Qual o nome da nave: ");
let velocity = 0;
let option = "";

starter();

function starter() {
  option = prompt(
    "Seja bem vindo ao sistema de navegação\n\n" +
      "Selecione abaixo a opção desajada\n" +
      "\n1 - Acelerar nave em 5km/s\n2 - Desalecerar em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair do sistema"
  );
  menu(option);
}

function menu(option) {
  switch (option) {
    case "1":
      accelerationSpaceShip();
      break;
    case "2":
      slowDownSpaceShip();
      break;
    case "3":
      printData();
      break;
    case "4":
      alert("Encerrando o sistema");
      break;
    default:
      alert("Opção invalida, tente novamente");
      starter();
      break;
  }
}

function accelerationSpaceShip() {
  velocity += 5;
  alert("Velocidade aumentada");
  starter();
}

function slowDownSpaceShip() {
  if (velocity > 0) {
    velocity -= 5;
    alert("Velocidade reduzida");
  } else {
    alert("A nave ja esta parada, não é possivel reduzir sua velocidade");
  }
  starter();
}

function printData() {
  alert(
    "Nome da nave: " +
      nameSpaceShip +
      "\nVelocidade atual: " +
      velocity +
      "km/s"
  );
  starter();
}
