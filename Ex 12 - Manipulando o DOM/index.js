let itemIndex = 0;

function registerHouse() {
  const sectionHouse = document.getElementById("houses");

  const numberHouse = document.getElementById("numberHouse").value;
  const nameNeighborhood = document.getElementById("nameNeighborhood").value;
  const nameCity = document.getElementById("nameCity").value;
  const spaceArea = document.getElementById("spaceArea").value;

  const h3 = document.createElement("h3");
  h3.innerText = "Casa";

  const ul = document.createElement("ul");

  const numberLi = document.createElement("li");
  numberLi.innerText = "Número da casa: " + numberHouse;
  const neighborhood = document.createElement("li");
  neighborhood.innerText = "Bairro: " + nameNeighborhood;
  const nameCityLi = document.createElement("li");
  nameCityLi.innerText = "Cidade: " + nameCity;
  const spaceAreaLi = document.createElement("li");
  spaceAreaLi.innerText = "Tamanho: " + spaceArea + " m²";
  const buttonRemove = document.createElement("button");
  buttonRemove.type = "button";
  buttonRemove.innerHTML = "Descadastrar";
  buttonRemove.setAttribute("id", "removeHouse" + itemIndex);

  buttonRemove.addEventListener("click", function () {
    ul.remove();
    h3.remove();
  });

  ul.append(numberLi, neighborhood, nameCityLi, spaceAreaLi);
  ul.appendChild(document.createElement("br"));
  ul.appendChild(buttonRemove);

  sectionHouse.append(h3, ul);
}
