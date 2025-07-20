window.onload = function() {
  const hoy = new Date().getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
  const cafes = document.querySelectorAll(".cafe");

  cafes.forEach((cafe, index) => {
    if(index === (hoy === 0 ? 6 : hoy - 1)) { // Para poner lunes como 0
      cafe.classList.add("cafe-del-dia");
    }
  });
};