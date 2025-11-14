document.addEventListener("DOMContentLoaded", () => {
  const modales = {
    modalCopilot: {
      titulo: "GitHub Copilot",
      contenido: `
        <p>
          <strong>GitHub Copilot</strong> es una extensión desarrollada por GitHub y OpenAI que utiliza modelos de lenguaje avanzados para sugerir código en tiempo real.
          Aprende de millones de repositorios públicos para anticipar lo que deseas programar y acelerar tu flujo de trabajo.
        </p>

        <h6 class="text-info mt-3">✨ Características principales:</h6>
        <ul>
          <li>Autocompleta funciones enteras o bloques de código.</li>
          <li>Compatible con más de <strong>30 lenguajes</strong>.</li>
          <li>Se adapta a tu estilo de programación.</li>
          <li>Explica código y sugiere pruebas unitarias.</li>
        </ul>

        <h6 class="text-info mt-3">📊 Comparativa de Eficiencia:</h6>
        <table class="table table-sm table-dark table-bordered text-center">
          <thead><tr><th>Sin Copilot</th><th>Con Copilot</th></tr></thead>
          <tbody><tr><td>Escritura manual</td><td>Asistencia inteligente</td></tr>
                  <tr><td>10-15 líneas/min</td><td>30-50 líneas/min</td></tr>
                  <tr><td>Mayor tiempo de depuración</td><td>Menos errores iniciales</td></tr>
          </tbody>
        </table>

        <p class="mt-3">Ideal para programadores que trabajan con <strong>Python, JavaScript, TypeScript, C# y Go</strong>.</p>
      `
    },

    modalPrettier: {
      titulo: "Prettier",
      contenido: `
        <p>
          <strong>Prettier</strong> es un formateador de código que impone un estilo consistente en todo tu proyecto.
          Evita discusiones en equipo sobre el formato del código y mejora la legibilidad.
        </p>

        <h6 class="text-info mt-3">⚙️ Configuración básica:</h6>
        <pre class="bg-black text-light p-2 rounded"><code>{
  "semi": true,
  "tabWidth": 2,
  "singleQuote": true
}</code></pre>

        <h6 class="text-info mt-3">💡 Ventajas:</h6>
        <ul>
          <li>Automatiza el formato del código.</li>
          <li>Compatible con ESLint y múltiples lenguajes.</li>
          <li>Se integra fácilmente en pipelines de CI/CD.</li>
        </ul>

        <h6 class="text-info mt-3">📊 Soporte por lenguaje:</h6>
        <table class="table table-dark table-striped text-center">
          <thead><tr><th>Lenguaje</th><th>Compatibilidad</th></tr></thead>
          <tbody>
            <tr><td>JavaScript / TypeScript</td><td>100%</td></tr>
            <tr><td>HTML / CSS</td><td>100%</td></tr>
            <tr><td>Python</td><td>Parcial</td></tr>
            <tr><td>PHP</td><td>Alta</td></tr>
          </tbody>
        </table>
      `
    },

    modalLiveServer: {
      titulo: "Live Server",
      contenido: `
        <p>
          <strong>Live Server</strong> permite lanzar un servidor local de desarrollo con recarga automática.
          Es esencial para desarrolladores web que desean ver sus cambios en tiempo real.
        </p>

        <h6 class="text-info mt-3">🚀 Cómo usarlo:</h6>
        <ol>
          <li>Haz clic derecho en tu archivo HTML.</li>
          <li>Selecciona <em>Open with Live Server</em>.</li>
          <li>Tu navegador se abrirá automáticamente mostrando los cambios.</li>
        </ol>

        <div class="text-center my-3">
          <img src="img/extensiones/live-server-preview.png" alt="Vista Live Server" class="img-fluid rounded shadow">
        </div>

        <p>También puedes configurar el puerto y comportamiento en <code>settings.json</code>:</p>
        <pre class="bg-black text-light p-2 rounded"><code>{
  "liveServer.settings.port": 5500
}</code></pre>
      `
    },

    modalEslint: {
      titulo: "ESLint",
      contenido: `
        <p>
          <strong>ESLint</strong> es una herramienta que analiza el código JavaScript o TypeScript
          para detectar errores y aplicar buenas prácticas.
        </p>

        <h6 class="text-info mt-3">🧩 Ejemplo de reglas comunes:</h6>
        <pre class="bg-black text-light p-2 rounded"><code>{
  "rules": {
    "no-unused-vars": "warn",
    "eqeqeq": "error",
    "semi": ["error", "always"]
  }
}</code></pre>

        <h6 class="text-info mt-3">🧠 Beneficios:</h6>
        <ul>
          <li>Evita errores de sintaxis y variables no usadas.</li>
          <li>Establece un estilo de código uniforme.</li>
          <li>Integración directa con VS Code y Prettier.</li>
        </ul>
      `
    },

    modalDocker: {
      titulo: "Docker Extension",
      contenido: `
        <p>
          La extensión <strong>Docker</strong> permite construir, ejecutar y administrar contenedores directamente desde Visual Studio Code.
          Facilita la creación de entornos consistentes para desarrollo, pruebas y despliegue.
        </p>

        <h6 class="text-info mt-3">📦 Funcionalidades:</h6>
        <ul>
          <li>Construcción de imágenes desde Dockerfiles.</li>
          <li>Visualización de contenedores activos.</li>
          <li>Integración con Azure y Kubernetes.</li>
        </ul>

        <h6 class="text-info mt-3">📊 Comparativa de rendimiento:</h6>
        <table class="table table-dark table-striped text-center">
          <thead><tr><th>Entorno</th><th>Tiempo de despliegue</th></tr></thead>
          <tbody>
            <tr><td>Local sin Docker</td><td>15 min</td></tr>
            <tr><td>Contenedor Docker</td><td>2 min</td></tr>
          </tbody>
        </table>

        <div class="text-center my-3">
          <img src="img/extensiones/docker-view.png" alt="Docker Extension" class="img-fluid rounded shadow">
        </div>
      `
    },

    modalMaterial: {
      titulo: "Material Icon Theme",
      contenido: `
        <p>
          <strong>Material Icon Theme</strong> transforma la interfaz de VS Code mediante un diseño visual inspirado en Material Design.
        </p>

        <h6 class="text-info mt-3">🎨 Características:</h6>
        <ul>
          <li>Íconos coloridos y modernos.</li>
          <li>Más de <strong>400 tipos</strong> de íconos distintos.</li>
          <li>Compatible con temas claros y oscuros.</li>
        </ul>

        <div class="text-center my-3">
          <img src="img/extensiones/material-icons-preview.png" alt="Material Icons" class="img-fluid rounded shadow">
        </div>

        <h6 class="text-info mt-3">📋 Personalización:</h6>
        <pre class="bg-black text-light p-2 rounded"><code>{
  "workbench.iconTheme": "material-icon-theme"
}</code></pre>
      `
    }
  };

  // --- Carga dinámica de los modales ---
  const contenedor = document.getElementById("modales");
  for (const [id, datos] of Object.entries(modales)) {
    contenedor.innerHTML += `
      <div class="modal fade" id="${id}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content bg-dark text-light border-info">
            <div class="modal-header border-info">
              <h5 class="modal-title text-info">${datos.titulo}</h5>
              <button class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">${datos.contenido}</div>
          </div>
        </div>
      </div>
    `;
  }
});

// Efecto simple: iconos se iluminan al pasar el mouse
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => icon.style.opacity = '0.8');
  icon.addEventListener('mouseleave', () => icon.style.opacity = '1');
});
