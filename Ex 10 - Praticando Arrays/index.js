const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

let spaceShipWithNineTripulants;
let spaceShipNames = "";
let spaceShipPendant;

spaceShipWithNineTripulants = hitchedSpaceships
  .filter((spaceship) => {
    return spaceship[1] > 9;
  })
  .map((spaceship) => {
    return spaceship[0];
  });

spaceShipPendant = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] == false;
});

spaceShipNames = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toUpperCase();
});

spaceShipWithNineTripulants = spaceShipWithNineTripulants.join(", ");
spaceShipNames = spaceShipNames.join(", ");

alert(
  "As naves que possuem mais de 9 tripulantes são: " +
    spaceShipWithNineTripulants +
    "\n\nPlataforma com processo de engate: " +
    (spaceShipPendant + 1) +
    "\n\nTodos as naves que estão aqui: " +
    spaceShipNames
);
