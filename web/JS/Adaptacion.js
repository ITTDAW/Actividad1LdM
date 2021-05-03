
// Mediante la siguiente secuencia JAVASCRIPT, ponemos el boton a la escucha de que sea pulsado, y segun se pulse
// seleccionamos el menu y le llamamos clase show.
document.querySelector(".menumovil").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show");
  });

  //JQUERY para hacer la hamburguesa animada. Instalamos la libreria con un script en el head, y damos la siguiente orden.
  $(document).ready(function(){
    $(".menumovil").click(function(){
      $(".hamburguesa").toggleClass("cruz")
    })
  })



function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
