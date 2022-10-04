var aleatorios;
var min, max, cantidad;
var disparador, listado;

function init() {
  //Declaración del arreglo o matriz de forma literal
  //que contendrá los números aleatorios
  aleatorios = [];
  //Declaración y asignación de los límites entre
  //los cuales estarán comprendidos los números aleatorios
  min = parseInt(prompt("Ingrese el limite inferior", ""));
  max = parseInt(prompt("Ingrese el limite superior", ""));
  cantidad = parseInt(
    prompt("Indique la cantidad de numeros aleatorios a generar", "")
  );
  disparador = document.getElementById("generador");
  listado = document.getElementById("listanumeros");
  if (disparador.addEventListener) {
    disparador.addEventListener(
      "click",
      function (evt) {
        aleatorio(min, max, cantidad);
        listado.innerHTML =
          "Los numeros aleatorios son: " + aleatorios.toString();
      },
      false
    );
  } else if (disparador.attachEvent) {
    disparador.attachEvent("onclick", function (evt) {
      aleatorio(min, max, cantidad);
      listado.innerHTML =
        "Los numeros aleatorios son: " + aleatorios.toString();
    });
  }
}
function aleatorio(minimo, maximo, cantidad) {
  //Generando un numero aleatoril0 tenlendo el cuidado
  //que este comprendido entre los Valores minimo Y maximo
  var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  //verificar que no se haya 1legado a la cantidad
  //de numeros aleatori0s maximo establecido5
  if (aleatorios.length < cantidad) {
    //Agregar el numero aleatorio al arreglo o matriz
    //utilizando el método push ()
    aleatorios.push(numero);
    //Invocar recursivamente a la función aleatorio
    aleatorio(minimo, maximo, cantidad);
  }
}
window.onload = init;
