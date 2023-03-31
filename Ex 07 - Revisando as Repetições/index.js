let spaceShip = prompt("Digite o nome da Espaço Nave: ").toLowerCase();
let char = "e";
let newSpaceShip = "";

console.log(spaceShip, char, newSpaceShip);

for (i = spaceShip.length - 1; i >= 0; i--) {
  console.log("entrou no for");
  if (spaceShip[i] != char) {
    newSpaceShip += spaceShip[i];
  } else {
    break;
  }
}

alert(
  "Nome original da nave: " +
    spaceShip +
    "\n\nNome após ocultação: " +
    newSpaceShip
);
