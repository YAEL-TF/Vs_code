document.addEventListener("DOMContentLoaded", () => {
  const modales = [
    {
      id: "modalIntelliSense",
      titulo: "💡 IntelliSense",
      texto: `
        IntelliSense ofrece autocompletado inteligente, sugerencias contextuales y documentación integrada. 
        Ayuda a escribir código más rápido y con menos errores, soportando múltiples lenguajes gracias a extensiones.
      `,
      detalles: [
        "Reconoce variables, funciones y clases automáticamente.",
        "Sugerencias basadas en contexto y patrones de código.",
        "Resalta errores antes de ejecutar."
      ]
    },
    {
      id: "modalDebug",
      titulo: "🐞 Depuración",
      texto: `
        VS Code permite depurar paso a paso tu código con puntos de interrupción, inspección de variables y panel de control visual.
      `,
      detalles: [
        "Soporta Node.js, Python, C++, y más.",
        "Permite revisar el flujo del programa.",
        "Consola interactiva para probar fragmentos."
      ]
    },
    {
      id: "modalGit",
      titulo: "🧩 Git Integrado",
      texto: `
        El control de versiones integrado facilita la gestión de repositorios sin usar la terminal.
      `,
      detalles: [
        "Commit, push y merge con un clic.",
        "Comparación visual de cambios.",
        "Integración con GitHub y GitLab."
      ]
    },
    {
      id: "modalTerminal",
      titulo: "💻 Terminal integrada",
      texto: `
        Ejecuta comandos, scripts y utilidades sin salir de VS Code, personalizando incluso el shell.
      `,
      detalles: [
        "Soporta PowerShell, Bash, Zsh y CMD.",
        "Abre múltiples terminales a la vez.",
        "Permite tareas automatizadas."
      ]
    },
    {
      id: "modalThemes",
      titulo: "🎨 Temas y Personalización",
      texto: `
        Modifica la apariencia con temas, íconos, fuentes y colores que reflejen tu estilo.
      `,
      detalles: [
        "Miles de temas gratuitos disponibles.",
        "Configuraciones JSON avanzadas.",
        "Soporte para íconos personalizados."
      ]
    },
    {
      id: "modalExtensions",
      titulo: "⚙️ Extensiones",
      texto: `
        Amplía las capacidades del editor con extensiones para lenguajes, IA, frameworks y depuración.
      `,
      detalles: [
        "Instala desde el Marketplace integrado.",
        "BlackBox AI, Prettier, ESLint, Docker, etc.",
        "Permite crear tus propias extensiones."
      ]
    }
  ];

  const contenedor = document.getElementById("modales");
  modales.forEach(m => {
    const modalHTML = `
      <div class="modal fade" id="${m.id}" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header border-info">
              <h5 class="modal-title text-info">${m.titulo}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p>${m.texto}</p>
              <ul>${m.detalles.map(d => `<li>${d}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </div>
    `;
    contenedor.insertAdjacentHTML("beforeend", modalHTML);
  });
});

// Efecto simple: iconos se iluminan al pasar el mouse
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => icon.style.opacity = '0.8');
  icon.addEventListener('mouseleave', () => icon.style.opacity = '1');
});
