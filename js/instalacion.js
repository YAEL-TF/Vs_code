document.addEventListener("DOMContentLoaded", () => {
  const modales = [
    {
      id: "modalGui",
      titulo: "Instalación GUI (Windows / macOS)",
      contenido: `
        <p><strong>1)</strong> Descarga el instalador desde <a href="https://code.visualstudio.com" target="_blank" rel="noopener" class="text-info">https://code.visualstudio.com</a></p>

        <h6 class="text-info mt-3">Pasos (Windows)</h6>
        <ol>
          <li>Ejecuta el instalador (.exe).</li>
          <li>Acepta la licencia y selecciona carpeta de instalación.</li>
          <li>Marca "Add to PATH" si quieres usar <code>code</code> desde la terminal.</li>
          <li>Presiona Install y espera a que finalice.</li>
        </ol>

        <div class="text-center my-3">
          <img src="img/instalacion/step2-ejecutable.png" alt="Instalador" class="img-fluid rounded shadow-sm" style="max-height:300px;">
        </div>

        <h6 class="text-info mt-3">Pasos (macOS)</h6>
        <ol>
          <li>Descarga el .zip o .dmg.</li>
          <li>Arrastra Visual Studio Code a la carpeta de Aplicaciones.</li>
          <li>Abre VS Code y confirma que funcione (puede pedir permisos para abrir).</li>
        </ol>

        <h6 class="text-info mt-3">Notas</h6>
        <ul>
          <li>En macOS con Apple Silicon usa la versión universal o Apple Silicon específica para mejor rendimiento.</li>
          <li>Si aparece un aviso de seguridad al abrir por primera vez, ve a Preferencias de Seguridad y permite la app.</li>
        </ul>
      `
    },

    {
      id: "modalTerminalInstall",
      titulo: "Instalación por Terminal (winget / brew / apt / snap)",
      contenido: `
        <h6 class="text-info">Windows (winget)</h6>
        <pre><code>winget install --id Microsoft.VisualStudioCode -e</code></pre>

        <h6 class="text-info mt-3">macOS (Homebrew)</h6>
        <pre><code>brew install --cask visual-studio-code</code></pre>

        <h6 class="text-info mt-3">Ubuntu / Debian (APT)</h6>
        <pre><code>sudo apt update<br>
sudo apt install -y wget gpg<br>
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor &gt; packages.microsoft.gpg<br>
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/<br>
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" &gt; /etc/apt/sources.list.d/vscode.list'<br>
sudo apt update<br>
sudo apt install code</code></pre>

        <h6 class="text-info mt-3">Fedora / CentOS (DNF)</h6>
        <pre><code>sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc<br>
sudo sh -c 'echo -e "[code]\\nname=Visual Studio Code\\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" &gt; /etc/yum.repos.d/vscode.repo'<br>
sudo dnf check-update<br>
sudo dnf install code</code></pre>

        <h6 class="text-info mt-3">Snap (si está disponible)</h6>
        <pre><code>sudo snap install --classic code</code></pre>
      `
    },

    {
      id: "modalFirstStart",
      titulo: "Primer inicio y configuración recomendada",
      contenido: `
        <p>Al abrir VS Code por primera vez, revisa estos pasos iniciales para dejarlo listo:</p>

        <ol>
          <li>Añadir idioma si lo necesitas: Extensión "Spanish (Language Pack)".</li>
          <li>Instalar extensiones esenciales: <em>Prettier, ESLint, Live Server, GitLens, Docker</em>.</li>
          <li>Habilitar <strong>Auto Save</strong> si lo prefieres (File → Auto Save).</li>
          <li>Configurar <code>workbench.colorTheme</code> y <code>editor.fontSize</code> desde Settings.</li>
        </ol>

        <div class="row g-3 mt-3">
          <div class="col-md-6 text-center">
            <img src="img/instalacion/theme.png" alt="Tema" class="img-fluid rounded shadow-sm">
            <p class="small text-secondary mt-2">Cambiar tema (Ctrl+K Ctrl+T)</p>
          </div>
          <div class="col-md-6 text-center">
            <img src="img/instalacion/extensions.png" alt="Extensiones" class="img-fluid rounded shadow-sm">
            <p class="small text-secondary mt-2">Instalar extensiones (Ctrl+Shift+X)</p>
          </div>
        </div>
      `
    },

    {
      id: "modalAddPath",
      titulo: "Agregar al PATH (comando `code`)",
      contenido: `
        <p>Para abrir VS Code desde terminal con <code>code .</code> es necesario que el ejecutable esté en el PATH.</p>

        <h6 class="text-info">Windows (opción del instalador)</h6>
        <p>Durante la instalación marca <strong>"Add to PATH"</strong>. Si no lo marcaste, reinstala o crea un alias manualmente.</p>

        <h6 class="text-info mt-3">macOS</h6>
        <pre><code>Shell Command: abrir paleta → 'Shell Command: Install 'code' command in PATH'</code></pre>

        <h6 class="text-info mt-3">Linux</h6>
        <p>Normalmente el paquete .deb o snap ya configura el comando <code>code</code>. Si no, crea un symlink:</p>
        <pre><code>sudo ln -s /usr/share/code/bin/code /usr/local/bin/code</code></pre>
      `
    },

    {
      id: "modalTroubleshoot",
      titulo: "Problemas comunes y soluciones",
      contenido: `
        <h6 class="text-info">Error: 'code' no encontrado</h6>
        <p>Verifica que el PATH tenga el ejecutable. Reinstala y marca "Add to PATH" o crea symlink manualmente.</p>

        <h6 class="text-info mt-3">Permisos denegados al instalar (Linux)</h6>
        <p>Usa <code>sudo</code> o instala con apt/snap/flatpak según tu distro. Revisa SELinux/AppArmor si aplica.</p>

        <h6 class="text-info mt-3">Extensiones que no cargan</h6>
        <ul>
          <li>Reinicia VS Code con <code>--disable-extensions</code> para probar si una extensión causa conflicto.</li>
          <li>Actualiza VS Code y las extensiones a la última versión.</li>
          <li>Revisa la consola de desarrollador (Help → Toggle Developer Tools) para errores.</li>
        </ul>

        <h6 class="text-info mt-3">Problemas de rendimiento</h6>
        <ul>
          <li>Deshabilita extensiones innecesarias.</li>
          <li>Aumenta la memoria del sistema o cierra otros procesos pesados.</li>
          <li>Si usas WSL/Remote, verifica recursos del host y la latencia.</li>
        </ul>
      `
    },

    {
      id: "modalTips",
      titulo: "Consejos avanzados y optimizaciones",
      contenido: `
        <h6 class="text-info">Instalación headless / en scripts</h6>
        <p>En servidores o contenedores puedes instalar VS Code Server (Code - Remote) o usar CLI para instalar extensiones:</p>
        <pre><code>code --install-extension ms-python.python<br>
code --list-extensions</code></pre>

        <h6 class="text-info mt-3">Integración con Docker / WSL</h6>
        <p>Instala las extensiones Remote - Containers y Remote - WSL para trabajar en entornos aislados de forma transparente.</p>

        <h6 class="text-info mt-3">Backup de configuración</h6>
        <p>Usa Settings Sync (built-in) o exporta <code>settings.json</code>, <code>keybindings.json</code> y la lista de extensiones.</p>
      `
    }
  ];

  // Insertar modales dinámicamente
  const contenedor = document.getElementById("modales");
  modales.forEach(m => {
    const modalHTML = `
      <div class="modal fade" id="${m.id}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header border-info">
              <h5 class="modal-title text-info">${m.titulo}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              ${m.contenido}
            </div>
          </div>
        </div>
      </div>
    `;
    contenedor.insertAdjacentHTML("beforeend", modalHTML);
  });

  // Optional: small entrance animation
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
