document.addEventListener("DOMContentLoaded", () => {
  const modales = {
    modalNavigation: {
      titulo: "📁 Navegación - Atajos y trucos",
      contenido: `
        <p><strong>Resumen:</strong> Abrir archivos, saltar a símbolos, moverte entre tabs y retroceder/avanzar.</p>

        <h6 class="text-info">Atajos clave</h6>
        <table class="table table-dark table-striped">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + P</td><td>Abrir archivo por nombre</td></tr>
            <tr><td>Ctrl + T</td><td>Ir a cualquier símbolo (Go to Symbol)</td></tr>
            <tr><td>Ctrl + G</td><td>Ir a línea</td></tr>
            <tr><td>Ctrl + Shift + O</td><td>Ir a símbolo en archivo</td></tr>
            <tr><td>Alt + ← / →</td><td>Navegar atrás/adelante</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Consejos</h6>
        <ul>
          <li>Usa <code>Ctrl + P</code> con : para buscar símbolos (ej. <code>:myFunction</code>).</li>
          <li>Combina <code>Ctrl + P</code> con <kbd>#</kbd> para buscar por símbolos y con <kbd>@</kbd> para ver símbolos dentro del archivo.</li>
        </ul>
      `
    },

    modalEditing: {
      titulo: "✍️ Edición - Manipulación rápida",
      contenido: `
        <p><strong>Resumen:</strong> Edición de líneas, duplicados, cortar/copiar sin seleccionar y atajos para acelerar la escritura.</p>

        <h6 class="text-info">Atajos esenciales</h6>
        <table class="table table-dark">
          <thead class="table-warning text-dark"><tr><th>Atajo</th><th>Función</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + X</td><td>Cortar línea</td></tr>
            <tr><td>Ctrl + C</td><td>Copiar línea</td></tr>
            <tr><td>Shift + Alt + ↓</td><td>Duplicar línea abajo</td></tr>
            <tr><td>Alt + ↑ / ↓</td><td>Mover línea arriba/abajo</td></tr>
            <tr><td>Ctrl + Shift + K</td><td>Eliminar línea</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Ejemplo práctico</h6>
        <pre><code>// Duplicar y modificar rápidamente
console.log('line 1');
console.log('line 2'); // duplicar y cambiar con multicursor</code></pre>
      `
    },

    modalSelection: {
      titulo: "🔎 Selección avanzada",
      contenido: `
        <p><strong>Resumen:</strong> Selecciones por coincidencia, expandir selección y columnas.</p>

        <h6 class="text-info">Atajos útiles</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + D</td><td>Seleccionar siguiente coincidencia</td></tr>
            <tr><td>Ctrl + Shift + L</td><td>Seleccionar todas las coincidencias</td></tr>
            <tr><td>Ctrl + Shift + Alt + Arrow</td><td>Selección en columna</td></tr>
            <tr><td>Shift + Alt + I</td><td>Insertar cursor al final de las líneas seleccionadas</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Truco avanzado</h6>
        <p>Combina <code>Ctrl + D</code> con <code>Alt + Click</code> para seleccionar patrones y editar múltiples lugares simultáneamente.</p>
      `
    },

    modalMultiCursor: {
      titulo: "🖊️ Multicursor - Edita en paralelo",
      contenido: `
        <p><strong>Resumen:</strong> Añade múltiples cursores para editar varias líneas al mismo tiempo.</p>

        <h6 class="text-info">Combinaciones</h6>
        <ul>
          <li><code>Alt + Click</code> añade un cursor manualmente.</li>
          <li><code>Ctrl + Alt + Down/Up</code> añade cursores en líneas siguientes o anteriores.</li>
          <li><code>Ctrl + Shift + L</code> selecciona todas las coincidencias y coloca cursores.</li>
        </ul>

        <h6 class="text-info">Ejemplo</h6>
        <pre><code>name1 = 'a'
name2 = 'b'
name3 = 'c'
# Selecciona las variables y cambia el prefijo con multicursor</code></pre>
      `
    },

    modalRefactor: {
      titulo: "🔧 Refactorización",
      contenido: `
        <p><strong>Resumen:</strong> Renombrar, extraer funciones, mover símbolos — atajos para refactorizar sin romper el código.</p>

        <h6 class="text-info">Atajos</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>F2</td><td>Renombrar símbolo</td></tr>
            <tr><td>Ctrl + .</td><td>Mostrar acciones rápidas (Quick Fix / Refactor)</td></tr>
            <tr><td>Shift + Alt + R</td><td>Refactorizar (según extensión)</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Consejo</h6>
        <p>Antes de refactorizar, asegúrate de ejecutar tests o usar análisis estático para evitar cambios no deseados.</p>
      `
    },

    modalSearchReplace: {
      titulo: "🔁 Buscar y Reemplazar",
      contenido: `
        <p><strong>Resumen:</strong> Buscar en archivo, proyecto y usar expresiones regulares para reemplazos potentes.</p>

        <h6 class="text-info">Atajos principales</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + F</td><td>Buscar en archivo</td></tr>
            <tr><td>Ctrl + H</td><td>Reemplazar en archivo</td></tr>
            <tr><td>Ctrl + Shift + F</td><td>Buscar en proyecto</td></tr>
            <tr><td>Alt + Enter</td><td>Seleccionar todas las coincidencias</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Regex ejemplo</h6>
        <pre><code>// Buscar todos los números: \\b\\d+\\b</code></pre>
      `
    },

    modalDebugging: {
      titulo: "🐞 Depuración",
      contenido: `
        <p><strong>Resumen:</strong> Breakpoints, step over, step in, step out y watch expressions.</p>

        <h6 class="text-info">Atajos de depuración</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>F5</td><td>Iniciar/Continuar</td></tr>
            <tr><td>F9</td><td>Alternar breakpoint</td></tr>
            <tr><td>F10</td><td>Step Over</td></tr>
            <tr><td>F11</td><td>Step Into</td></tr>
            <tr><td>Shift + F11</td><td>Step Out</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Ejemplo de uso</h6>
        <p>Coloca breakpoints en secciones críticas y utiliza la consola de depuración para ejecutar expresiones en contexto.</p>
      `
    },

    modalTerminal: {
      titulo: "💻 Terminal integrada",
      contenido: `
        <p><strong>Resumen:</strong> Accede al shell integrado, multiplexer de terminales, y atajos para ejecutar tareas.</p>

        <h6 class="text-info">Comandos</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + ` + "`" + `</td><td>Abrir/Cerrar terminal</td></tr>
            <tr><td>Ctrl + Shift + ` + "`" + `</td><td>Nueva terminal</td></tr>
            <tr><td>Ctrl + C</td><td>Enviar SIGINT (dependiendo del shell)</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Tips</h6>
        <ul>
          <li>Configura tu shell por defecto en settings.json para que lance Zsh/Bash/Pwsh automáticamente.</li>
          <li>Usa tasks.json para automatizar build/test con <code>Ctrl+Shift+B</code>.</li>
        </ul>
      `
    },

    modalSourceControl: {
      titulo: "🔗 Control de versiones (Git)",
      contenido: `
        <p><strong>Resumen:</strong> Atajos para commits, staging, push/pull y comparaciones visuales.</p>

        <h6 class="text-info">Flujo rápido</h6>
        <ol>
          <li>Abrir panel de Source Control: <code>Ctrl + Shift + G</code></li>
          <li>Stage archivos: botón + atajos dentro del panel</li>
          <li>Commit: escribe mensaje y presiona ✔</li>
          <li>Push/Pull desde la barra de estado o comandos</li>
        </ol>

        <h6 class="text-info">Acciones útiles</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Comando</th><th>Uso</th></tr></thead>
          <tbody>
            <tr><td>Git: View History</td><td>Ver historial (con extensión GitLens es aún mejor)</td></tr>
            <tr><td>Git: Merge</td><td>Resolver merges desde la UI</td></tr>
          </tbody>
        </table>
      `
    },

    modalExplorer: {
      titulo: "📂 Explorador de archivos",
      contenido: `
        <p><strong>Resumen:</strong> Atajos para crear, renombrar, mover y abrir archivos rápidamente.</p>

        <h6 class="text-info">Atajos prácticos</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + N</td><td>Nuevo archivo</td></tr>
            <tr><td>F2</td><td>Renombrar archivo</td></tr>
            <tr><td>Delete</td><td>Eliminar archivo</td></tr>
            <tr><td>Ctrl + Shift + E</td><td>Abrir Explorador</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Consejo</h6>
        <p>Puede asignar atajos personalizados para crear plantillas de archivos con extensiones.</p>
      `
    },

    modalTabs: {
      titulo: "🗂️ Pestañas y Ventanas",
      contenido: `
        <p><strong>Resumen:</strong> Mover pestañas, dividir editores y navegar entre ventanas.</p>

        <h6 class="text-info">Atajos</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + W</td><td>Cerrar pestaña</td></tr>
            <tr><td>Ctrl + \\</td><td>Dividir editor</td></tr>
            <tr><td>Ctrl + 1 / 2 / 3</td><td>Ir al primer/segundo/tercer editor</td></tr>
            <tr><td>Ctrl + K then Ctrl + W</td><td>Cerrar todos los editores</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Tip</h6>
        <p>Usa mover pestañas arrastrando con mouse + modifier para reorganizar rápidamente proyectos grandes.</p>
      `
    },

    modalPanes: {
      titulo: "🧭 Layout / Paneles",
      contenido: `
        <p><strong>Resumen:</strong> Control total del layout: maximizar, minimizar, ver problems/terminal/output.</p>

        <h6 class="text-info">Atajos de panel</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + J</td><td>Toggle panel (Terminal/Problems/Output)</td></tr>
            <tr><td>Ctrl + B</td><td>Toggle side bar</td></tr>
            <tr><td>Ctrl + K Z</td><td>Zen Mode (maximizar editor)</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Sugerencia</h6>
        <p>Combina Zen Mode y Focus Mode para presentaciones o para concentrarte al codificar.</p>
      `
    },

    modalSnippets: {
      titulo: "📌 Snippets",
      contenido: `
        <p><strong>Resumen:</strong> Plantillas de código que te salvan minutos en tareas repetitivas.</p>

        <h6 class="text-info">Ejemplo de snippet (JavaScript)</h6>
        <pre><code>{
  "Print to console": {
    "prefix": "log",
    "body": [
      "console.log('$1');",
      "$2"
    ],
    "description": "Log output"
  }
}</code></pre>

        <h6 class="text-info">Uso</h6>
        <p>Escribe el <code>prefix</code> y presiona <kbd>Tab</kbd> para expandir. Puedes crear snippets por lenguaje o globales.</p>
      `
    },

    modalFormatting: {
      titulo: "🎨 Formateo",
      contenido: `
        <p><strong>Resumen:</strong> Formateado con Prettier, Beautify y atajos para aplicar formato en archivo o selección.</p>

        <h6 class="text-info">Atajos</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Shift + Alt + F</td><td>Format Document/Selection</td></tr>
            <tr><td>Ctrl + K Ctrl + F</td><td>Format selection</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Config recomendado (.prettierrc)</h6>
        <pre><code>{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}</code></pre>
      `
    },

    modalEmmet: {
      titulo: "⚡ Emmet - productividad HTML/CSS",
      contenido: `
        <p><strong>Resumen:</strong> Expande abreviaturas HTML/CSS en bloques completos con un solo <kbd>Tab</kbd>.</p>

        <h6 class="text-info">Ejemplo</h6>
        <pre><code>ul>li.item*5</code></pre>
        <p>Expande a una lista con 5 &lt;li class="item"&gt;...</p>

        <h6 class="text-info">Atajos</h6>
        <ul>
          <li><code>Tab</code> para expandir en archivos con Emmet habilitado</li>
          <li><code>Ctrl+Shift+P → Emmet: Expand Abbreviation</code></li>
        </ul>
      `
    },

    modalExtensions: {
      titulo: "🧩 Extensiones - Manejo rápido",
      contenido: `
        <p><strong>Resumen:</strong> Buscar, instalar, deshabilitar y configurar extensiones sin salir del editor.</p>

        <h6 class="text-info">Atajos</h6>
        <ul>
          <li><code>Ctrl + Shift + X</code> abrir panel de extensiones</li>
          <li>Buscar por nombre y presionar <strong>Install</strong></li>
        </ul>

        <h6 class="text-info">Consejo</h6>
        <p>Usa <code>Extensions: Show Installed Extensions</code> para listar y actualizar todo el pack del proyecto.</p>
      `
    },

    modalRemote: {
      titulo: "🌐 Remote / SSH / Containers",
      contenido: `
        <p><strong>Resumen:</strong> Atajos para conectar a servidores remotos, WSL y contenedores mediante Remote - SSH / Containers.</p>

        <h6 class="text-info">Comandos</h6>
        <ul>
          <li>Remote-SSH: <code>F1 → Remote-SSH: Connect to Host...</code></li>
          <li>Dev Containers: abrir carpeta dentro de contenedor</li>
        </ul>

        <h6 class="text-info">Beneficios</h6>
        <p>Desarrollar con el entorno exacto del servidor evita "works on my machine" y acelera testing.</p>
      `
    },

    modalWorkspaces: {
      titulo: "🗃️ Workspaces",
      contenido: `
        <p><strong>Resumen:</strong> Usar archivos .code-workspace para configurar múltiples carpetas, ajustes y tareas por proyecto.</p>

        <h6 class="text-info">Atajos y comandos</h6>
        <ul>
          <li><code>File → Save Workspace As...</code></li>
          <li>Usa <code>workspace settings</code> para personalizar sin tocar global settings</li>
        </ul>

        <h6 class="text-info">Ejemplo workspace</h6>
        <pre><code>{
  "folders": [{"path": "."}],
  "settings": {
    "editor.tabSize": 2
  }
}</code></pre>
      `
    },

    modalCommands: {
      titulo: "⌨️ Paleta de comandos",
      contenido: `
        <p><strong>Resumen:</strong> La paleta es el centro de control: <code>Ctrl + Shift + P</code> para ejecutar cualquier comando.</p>

        <h6 class="text-info">Atajos</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Uso</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + Shift + P</td><td>Abrir paleta de comandos</td></tr>
            <tr><td>F1</td><td>Abrir paleta de comandos (alternativa)</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Truco</h6>
        <p>Empieza a escribir 'Toggle' para ver toggles (sidebar, terminal, problems) y asigna teclas personalizadas.</p>
      `
    },

    modalAccessibility: {
      titulo: "♿ Accesibilidad",
      contenido: `
        <p><strong>Resumen:</strong> Atajos y configuraciones para hacer VS Code accesible: zoom, temas de alto contraste y lector de pantalla.</p>

        <h6 class="text-info">Atajos</h6>
        <table class="table table-dark">
          <thead class="table-primary text-dark"><tr><th>Atajo</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + = / Ctrl + -</td><td>Aumentar/Disminuir zoom</td></tr>
            <tr><td>Ctrl + K Ctrl + T</td><td>Cambiar tema</td></tr>
            <tr><td>Ctrl + K Z</td><td>Activate accessibility options</td></tr>
          </tbody>
        </table>

        <h6 class="text-info">Configuraciones</h6>
        <pre><code>{
  "editor.accessibilitySupport": "on",
  "workbench.colorTheme": "Default High Contrast"
}</code></pre>
      `
    },

    // end of modales object
  };

  // --- DYNAMIC ADD: add rest of categories to reach 20 if needed ---
  // (We already defined 20 keys above — ensure all present.)
  // Now inject modals into DOM:
  const contenedor = document.getElementById('modales');

  for (const [id, data] of Object.entries(modales)) {
    contenedor.insertAdjacentHTML('beforeend', `
      <div class="modal fade" id="${id}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header border-info">
              <h5 class="modal-title text-info">${data.titulo}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              ${data.contenido}
            </div>
          </div>
        </div>
      </div>
    `);
  }

  // Extra: small entrance animation for modals (optional, non-blocking)
  document.querySelectorAll('.modal').forEach(mod => {
    mod.addEventListener('show.bs.modal', () => {
      const dialog = mod.querySelector('.modal-dialog');
      dialog.style.transform = 'translateY(-10px)';
      dialog.style.transition = 'transform .18s ease';
      setTimeout(() => dialog.style.transform = 'translateY(0)', 1);
    });
  });
});

// Efecto simple: iconos se iluminan al pasar el mouse
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => icon.style.opacity = '0.8');
  icon.addEventListener('mouseleave', () => icon.style.opacity = '1');
});


