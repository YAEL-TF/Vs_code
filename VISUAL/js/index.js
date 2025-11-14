document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Página principal cargada correctamente");

  // Cambia color del título al pasar el mouse
  const titulo = document.querySelector(".titulo");
  titulo.addEventListener("mouseover", () => {
    titulo.style.color = "#00aaff";
  });
  titulo.addEventListener("mouseout", () => {
    titulo.style.color = "#007acc";
  });
});

// Efecto simple: iconos se iluminan al pasar el mouse
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => icon.style.opacity = '0.8');
  icon.addEventListener('mouseleave', () => icon.style.opacity = '1');
});
