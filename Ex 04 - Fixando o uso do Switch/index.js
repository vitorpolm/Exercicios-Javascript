let distanceLightYear = 0;
let conversion = 0;
let option = "";

do {
  option = prompt(
    "Seja bem vindo ao sistema intergalatico para converter anos luz\nSelecione abaixo a opção desejada\n" +
      "\n1 - Converter para Parsec (PC)" +
      "\n2 - Converter para Unidade Astronômica (AU)" +
      "\n3 - Converter para Quilômetros (KM)" +
      "\n0 - Sair"
  );

  distanceLightYear = prompt("Digite a distância em anos-luz: ");

  switch (option) {
    case "1":
      conversion = distanceLightYear * 0.306601;
      alert(
        "Distância em anos-luz " +
          distanceLightYear +
          "\nOpção selecionada: Parsec" +
          "\nResultado da conversão: " +
          conversion +
          " pc"
      );
      break;
    case "2":
      conversion = distanceLightYear * 63241.1;
      alert(
        "Distância em anos-luz " +
          distanceLightYear +
          "\nOpção selecionada: Unidade Astronômica" +
          "\nResultado da conversão: " +
          conversion +
          " au"
      );
      break;
    case "3":
      conversion = distanceLightYear * (9.5 * Math.pow(10, 12));
      alert(
        "Distância em anos-luz " +
          distanceLightYear +
          "\nOpção selecionada: Quilômetro" +
          "\nResultado da conversão: " +
          conversion +
          " km"
      );
      break;
    case "0":
      alert("Encerrando o sistema");
      break;
    default:
      alert("Opção invalida");
  }
} while (option != 0);
