//iniciando el manejador para los enlace de la pagina
window.onunload = confirmAllLinks;

function confirmLink() {
    return confirm("¿Esta seguro que quiere visitar el sitio: " + this.href + "?");
}  
    function confirmAllLinks(){
        for (var i=0; i<document.links.length; i++){
            document.links[i].onclick = confirmLink;
        }
    }
