/* Selección de la dificultad del puzzle Parte 1 */

/**
 * @returns {Number} La cantidad de piezas del puzzle
 */
function getNumberPiecesFromUser(){
  let isInteger = false;
  let numPiezas = "";
  while (!isInteger) {
    numPiezas = prompt("De cuantas piezas quieres que sea el rompecabezas?");
    let raiz = Math.sqrt(numPiezas);

    if (Number.isInteger(raiz)) {
      isInteger = true;
    } else {
      alert("El tipo de datos introducido es incorrecto, el valor introducido no es un número con raíz cuadrada perfecta");
    }
  }

  return numPiezas;
}

/* Funciones de manipulación de la puntuación Parte 2 */

function getMaxScore(piezas) {
  return piezas * 2;
}

function getScore() {
  let texto = document.getElementById("score").innerHTML;
  let arrayTexto = texto.split(" ");
  let score = parseInt(arrayTexto[1]);
  return score;
}

function updateScore(nuevoScore) {
  document.getElementById("score").innerHTML = "Score: " + nuevoScore;
}

function decreaseScore(decremento) {
  let nuevoScore = getScore() - decremento;
  updateScore(nuevoScore);
}

/* Funciones auxiliares parte 3 */

/**
 * 
 * @param {Number} ancho El ancho de una imagen
 * @param {Number} alto El alto de una imagen
 * @returns {Array} Un array con 2 posiciones, posición 0 se encuentra el nuevo ancho y 
 * en la posicion 1 se encuentra el nuevo alto de la imagen
 */
function getNewSizes(ancho, alto) {
  let dimensiones = [];
  
  if (ancho > alto) {
    dimensiones[1] = (alto * 200) / ancho;
    dimensiones[0] = 200;
  } else {
    dimensiones[0] = (ancho * 200) / alto;
    dimensiones[1] = 200;
  }

  return dimensiones;
}

function shuffle(arrayInicial) {
  let cantidad = arrayInicial.length;
  let aux = 0;
  for (let i = (cantidad - 1); i > 0; i--) {
    let rand = Math.floor((Math.random() * cantidad));
    aux = arrayInicial[rand];
    arrayInicial[rand] = arrayInicial[i];
    arrayInicial[i] = aux;
  }

  return arrayInicial;
}

function pieceNumberToRowsColumns(numPieza, totalPiezas) {
  let puzzleSize = Math.sqrt(totalPiezas);
  let posicion = [1, 1];
  for (let i = 1; i <= totalPiezas; i++) {
    if (numPieza == i) {
      break;
    } else if (posicion[0] == puzzleSize) {
      posicion[0] = 1;
      posicion[1] ++;
    } else {
      posicion[0] += 1;
    }
  }

  return posicion;
}

/* Funciones de dibujado parte 4 */

function createPuzzleLayout(totalPiezas, anchura, altura, direccionImg) {
  let puzzleSize = Math.sqrt(totalPiezas);
  let nuevaTabla = document.createElement("table");

  for (let i = 0; i < puzzleSize; i++) {
    let tr = document.createElement("tr");
    nuevaTabla.appendChild(tr);
    let fila = nuevaTabla.lastElementChild;

    for (let y = 0; y < puzzleSize; y++) {
      let td = document.createElement("td");
      td.id = "piece" + y;
      td.style.backgroundImage = "url(" + direccionImg + ")";
      td.width = anchura / puzzleSize;
      td.height = altura / puzzleSize;

      fila.appendChild(td);
    }
  }

  document.getElementsByTagName('body')[0].appendChild(nuevaTabla);
}

function pieceToOffset(numPieza, anchura, altura, totalPiezas) {
  let puzzleSize = Math.sqrt(totalPiezas);
  anchoDePieza = anchura / puzzleSize;
  altoDePieza = altura / puzzleSize;

  let posicion = pieceNumberToRowsColumns(numPieza, totalPiezas);

  let desplazamiento = [];
  desplazamiento[0] = anchoDePieza * posicion[0] * (-1);
  desplazamiento[1] = altoDePieza * posicion[1] * (-1);

  return desplazamiento;
}

/* Pruebas */
console.log("Hola valee");
let num = getNumberPiecesFromUser();
console.log(num);
console.log(getMaxScore(num));

updateScore(getMaxScore(num));

console.log(getScore());

decreaseScore(1);

console.log(getNewSizes(958, 1277));
console.log(getNewSizes(590, 790));

let arrays = [1, 2, 3, 4, 5];
console.log(shuffle(arrays) + " rand");

console.log(Math.sqrt(16));

console.log(pieceNumberToRowsColumns(6, 9));

createPuzzleLayout(9, 958, 1277, "cat.jpg");


console.log(319.33 * 3 * (-1));
console.log(425.66 * 3 * (-1));

console.log(pieceToOffset(6, 958, 1277, 9));

