document.addEventListener("DOMContentLoaded", () => {
  const cities = document.getElementById("cities");
  const title = document.getElementById("page-title");
  const footer = document.getElementById("footer");

  document.getElementById("btnOrdenar").onclick = () => {
    if (cities.style.display === "block") {
      cities.style.display = "flex";
    } else {
      cities.style.display = "block";
    }
  };

  document.getElementById("btnTitulo").onclick = () => {
    title.textContent = "KOREA DEL SUR";
  };

document.getElementById("btnColores").onclick = () => {
  const secciones = document.querySelectorAll(".city");
  secciones.forEach((sec) => {
    sec.classList.add("cambio-colores"); 
  });
};


document.getElementById("btnImagen").onclick = () => {
  const img = document.createElement("img");
  img.src = "imagen/imagen.jpg";
  img.alt = "Imagen";
  img.classList.add("miImagen"); 
  footer.appendChild(img);
};



});
