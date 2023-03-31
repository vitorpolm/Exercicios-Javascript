let spaceShip = prompt("Digite o nome da Espaço Nave: ").toLowerCase();
let char = prompt("Qual letra deseja trocar: ");
let changeChar = prompt("Qual letra deseja colocar no lugar: ");

let newSpaceShip = "";

for (i = 0; i < spaceShip.length; i++) {
  if (spaceShip[i] != char) {
    newSpaceShip += spaceShip[i];
    console.log(char);
  } else {
    newSpaceShip += changeChar;
  }
}

alert("O novo nome da nave é " + newSpaceShip);
