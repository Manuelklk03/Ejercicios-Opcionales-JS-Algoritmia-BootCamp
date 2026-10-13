// EJERCICIO 1: Guardar la tabla de multiplicar en un array
function tablaMultiplicar(numero) {
  const tabla = [];

  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
  }

  return tabla;
}

console.log(tablaMultiplicar(3));
// [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

// EJERCICIO 2: Pedir números y devolverlos ordenados
function pedirNumeros() {
  const numeros = [];

  while (true) {
    const entrada = prompt("Introduce un número (0 para terminar):");

    if (entrada === null) {
      break;
    }

    const numero = parseInt(entrada, 10);

    if (numero === 0) {
      break;
    }

    if (!isNaN(numero)) {
      numeros.push(numero);
    }
  }

  numeros.sort((a, b) => a - b);

  return numeros;
}

console.log(pedirNumeros());

// EJERCICIO 3: Comprobar si un año es bisiesto
const anio = parseInt(prompt("Introduce un año:"), 10);

if (anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0)) {
  console.log(anio + " es bisiesto");
} else {
  console.log(anio + " no es bisiesto");
}

// EJERCICIO 4: Contar un carácter dentro de un array de palabras
function contarCaracteres(palabras, caracter) {
  let contador = 0;

  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < palabras[i].length; j++) {
      if (palabras[i][j] === caracter) {
        contador++;
      }
    }
  }

  return contador;
}

const data = [
  "yoda",
  "best",
  "has",
  "tortilla",
  "cAfe",
  "barrita tomate",
  "zumo",
];
