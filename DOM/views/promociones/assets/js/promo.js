//Funcion para resaltar el café del día
window.onload = function() {
  const hoy = new Date().getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
  const cafes = document.querySelectorAll(".cafe");

  cafes.forEach((cafe, index) => {
    if(index === (hoy === 0 ? 6 : hoy - 1)) { 
      cafe.classList.add("cafe-del-dia");
    }
  });
};