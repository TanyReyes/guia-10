//iniciar los manejadores de eventos al cargar la pagina 
window.onload = iniciar;

function iniciar(){
    //definir los objetos sobre los que se escucharan los eventos 
    //y asociar los eventos correspondientes 
    //primera caja de text
    var textFieldFocus = document.frmEjemplo.txtfoco;
    textFieldFocus.onfocus =foco;
    //segunda caja
    var textFielKey = document.frmEjemplo.txtfoco;
    textFielKey.onkeypress=tecla;
    //campo select
    var selectField = document.frmEjemplo.selopciones;
    selectField.onchange = function(){
        cambioOpcion(this.options[this.selectedIndex].value);
    };
    //primer campo checkbox
    var chkbox1 = document.getElementById("chkbox1");
    chkbox1.addEventListener("click", function(){
        activarCasilla(chkbox1, chkbox1.value);
    }, false);

    //segundo campo checkbox
    var chkbox2 = document.getElementById("chkbox2");
    chkbox2.addEventListener("click", function(){
        activarCasilla(chkbox2, chkbox2.value);
    }, false);
    //tercer campo checkbox
    var chkbox3 = document.getElementById("chkbox3");
    chkbox3.addEventListener("click", function(){
        activarCasilla(chkbox3, chkbox3.value);
    }, false);

    //boton de envio del formulario
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function(){
        alert(pulsa());
        return false;
    }, false);
}

function foco(){
    alert("Foco en la primera caja")
}
function tecla(){
    alert("Pulsaste una tecla");
    this.focus();
}

function cambioOpcion(nuevaOpcion){
    alert ("Haz cambiado a la opcion")
}
function activarCasilla(casilla, valorCasilla){
    var accion;
   ivado(casilla.checked) ? accion="activado": accion="desactivado"; 
   alert("Se ha" + accion + "la casilla co la opcion " + valorCasilla);
}
function pulsa{
    return"Materia: Programacion web";
}



