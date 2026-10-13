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
