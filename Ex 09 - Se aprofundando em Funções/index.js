let velocitySpaceShip = 150;

spaceShip();

function spaceShip() {
  alert(
    "A nave esta reduzindo sua velocidade, aguarde a finalização" +
      "\nVelocidade atual: " +
      velocitySpaceShip +
      " km/s"
  );
  alert("Nave reduzindo 20 km/s");
  slowDownSpaceSchip();
}

function slowDownSpaceSchip() {
  if (velocitySpaceShip > 0) {
    velocitySpaceShip -= 20;
    return slowDownSpaceSchip(velocitySpaceShip);
  } else {
    printData();
  }
}

function printData() {
  velocitySpaceShip = 0;
  alert(
    "A nave parou, comportas podem ser abertas" +
      "\n\nVelocidade atual: " +
      velocitySpaceShip
  );
}
