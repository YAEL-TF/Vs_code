// Por ahora no hay modales dinámicos, pero se puede agregar interactividad
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página de créditos cargada correctamente.");
});

// Efecto simple: iconos se iluminan al pasar el mouse
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => icon.style.opacity = '0.8');
  icon.addEventListener('mouseleave', () => icon.style.opacity = '1');
});
