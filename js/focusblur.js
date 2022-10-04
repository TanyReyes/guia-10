//Elemento con la capa de ayuda a mostrar en los campos de formulario
var textoAyuda;
//Matriz con los mensajes de ayuda asociados a cada control de formulario
var arregloAyuda = [
  "Ingrese su nombre en este campo de texto",
  "Ingrese su aepllido en este campo de texto",
  "Ingrese su direccion de correo en el formato usuario@dominio.com",
  "Ingrese su número de telefono en el formato 9999-0000",
  "Ingrese una descripcion breve en el campo area de texto",
  "Seleccione su profesion en este campo select",
  "Diganos cual es su pais de origen en este campo select",
  "Restablesca el formulario con este botón",
  "Envie el formulario con este botón",
  "",
];

//Inializar el elemento textoAyudaDiv y registrar los manejadores de eventos
//para los distintos controles de formulario
function inic() {
  textoAyuda = document.getElementById("textoAyuda");
  //Registrar los escuchadores de eventos
  registrarEscuchas(document.getElementById("firstname"), 0);
  registrarEscuchas(document.getElementById("lastname"), 1);
  registrarEscuchas(document.getElementById("email"), 2);
  registrarEscuchas(document.getElementById("phone"), 3);
  registrarEscuchas(document.getElementById("describe"), 4);
  registrarEscuchas(document.getElementById("profesion"), 5);
  registrarEscuchas(document.getElementById("selpais"), 6);
  registrarEscuchas(document.getElementById("resetbtn"), 7);
  registrarEscuchas(document.getElementById("submitbtn"), 8);
}

//Funcion que permita que mensaje de ayuda habilitar
//con base en el numeroMensaje recibidos como argumentos
function registrarEscuchas(objeto, numeroMensaje) {
  //asociar el manejo de eventos onfocus dependiendo
  //del objeto y numeroMensaje recibidos como argumentos

  objeto.addEventListener(
    "focus",
    function () {
      textoAyuda.style.visibility = "visible";
      textoAyuda.innerHTML = arregloAyuda[numeroMensaje];
    },
    false
  );
  objeto.addEventListener(
    "blur",
    function () {
      textoAyuda.style.visibility = "hidden";
      textoAyuda.innerHTML = arregloAyuda[9];
    },
    false
  );
}

//Desencadenendo la funcion inic al cargar el documento
window.addEventListener("load", inic, false);
