// on récupère les emplacements des tables de notre HTML
const htmlTable1 = document.getElementById("one");
const htmlTable2 = document.getElementById("two");
const htmlTable3 = document.getElementById("three");
const htmlTable4 = document.getElementById("four");
////////////////////////////////////////////////////////////////

// créer les tables
let table1 = [
  ["GUERRAH FERIEL", "1", "3", "8", "2"],
  ["LAIB ANIS", "1", "12", "1", "1"],
  ["CHEDJARI EL MEUR KHOULOUD", "1", "6", "6", "9"],
  ["KENDJOUA CHOUAIB", "1", "10", "5", "6"],
];
let table2 = [
  ["BACHSAIS SARAH", "1", "5", "7", "10"],
  ["MATARI AKRAM", "1", "8", "12", "3"],
  ["HANNOUN AMAR AMINE", "1", "13", "4", "12"],
];
let table3 = table1.concat(table2); // concat permet de fusionner 2 tableau
let table4 = table3;

////////////////////////////////////////////////////////////////

// la function qui permet d'injecter un code html contenant les valeurs de notre tableau
function writeInHtml(arr, emplacement) {
  column = "";
  row =
    '<tr id ="header"><th>Nom</th><th>TP 1</th><th>TP 2</th><th>TP 3</th><th>TP 4</th></tr>';
  arr.forEach((item) => {
    // notre tableau contient plusieur petit tableau (items)
    item.forEach((elem) => {
      // et chaque item contient dedans plusieur valeur
      column += `<td>${elem}</td>`; // a chaque fois on met la valeur dans une balise <td></td>
    });
    row += "<tr>" + column + "</tr>"; //on met toute les balises crée dans une balise <tr></tr>
    column = ""; // on réinitialise coffre a columns
  });
  // aprés avoir créer les columns et les ligne
  emplacement.innerHTML = row; //on insert notre code html dans la balise qui se situe a un emplecement précis
}
////////////////////////////////////////////////////////////////

a =4
trie(table4, a); //appel de la fonction de trie pour le tableau 4 a voir en bas du script
writeInHtml(table1, htmlTable1); //appel de la fonction d'insertion de tableau1
writeInHtml(table2, htmlTable2); //...
writeInHtml(table3, htmlTable3);
writeInHtml(table4, htmlTable4);

function trie(arr) {
  for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 7; j++) {
      if (a != 0) {
        b = parseInt(arr[i][a]);
        c = parseInt(arr[j][a]);
      } else {
        b = arr[i][a];
        c = arr[j][a];
      }
      if (c < b) {
        x = arr[j];
        arr[j] = arr[i];
        arr[i] = x;
      }
    }
  }
}
