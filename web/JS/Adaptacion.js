
// Mediante la siguiente secuencia, ponemos el boton a la escucha de que sea pulsado, y segun se pulse
// seleccionamos el menu y le llamamos clase show
document.querySelector(".menumovil").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show");
  });