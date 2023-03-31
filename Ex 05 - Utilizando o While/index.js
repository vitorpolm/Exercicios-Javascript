const navName = prompt("Qual o nome da nave?");
let confirmation = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não");
let warpCount = 0;

while (confirmation != "2") {
  warpCount++;
  confirmation = prompt("Deseja realizar a proxima dobra?\n1 - Sim\n2 - Não");
}

alert(
  "A nave " +
    navName +
    " realizou " +
    warpCount +
    " dobras espaciais em sua viagem."
);
