document.addEventListener('DOMContentLoaded', () => {
  const modalesHTML = `

   <div class="modal fade" id="modalCPP" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header border-info">
            <h5 class="modal-title text-info">C++</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
        <div class="modal-body">
          <p>VS Code proporciona soporte para C y C++ con IntelliSense, depuración con GDB y configuración de tareas personalizadas.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modalPHP" tabindex="-1">
   <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header border-info">
            <h5 class="modal-title text-info">PHP</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
        <div class="modal-body">
          <p>Con extensiones como PHP IntelliSense y Laravel Tools, VS Code permite desarrollar proyectos web robustos en PHP con facilidad.</p>
        </div>
      </div>
    </div>
    </div>

    <!-- Modal HTML -->
    <div class="modal fade" id="modalHTML" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header border-info">
            <h5 class="modal-title text-warning">HTML - Lenguaje de Marcado</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>HTML define la estructura básica de las páginas web. Cada elemento describe un bloque de contenido, como títulos, párrafos, imágenes o enlaces.</p>
            <pre><code>&lt;h1&gt;Hola Mundo&lt;/h1&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal CSS -->
    <div class="modal fade" id="modalCSS" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header border-info">
            <h5 class="modal-title text-info">CSS - Hojas de Estilo</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>CSS define la apariencia visual del contenido HTML. Controla colores, fuentes, tamaños y disposición de los elementos.</p>
            <pre><code>body { background-color: #0d1117; color: white; }</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal JS -->
    <div class="modal fade" id="modalJS" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header border-warning">
            <h5 class="modal-title text-warning">JavaScript - Interactividad</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>JavaScript permite agregar comportamiento dinámico, validaciones y animaciones a las páginas web.</p>
            <pre><code>document.querySelector("h1").innerText = "¡Hola desde JS!";</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Python -->
    <div class="modal fade" id="modalPython" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header border-success">
            <h5 class="modal-title text-success">Python - Backend y Ciencia de Datos</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>Python es ideal para análisis de datos, inteligencia artificial y desarrollo web.</p>
            <pre><code>print("Hola, Mundo!")</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal C# -->
    <div class="modal fade" id="modalCSharp" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header border-primary">
            <h5 class="modal-title text-primary">C# - Aplicaciones y Juegos</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>C# es un lenguaje de Microsoft muy usado en videojuegos con Unity y software empresarial.</p>
            <pre><code>Console.WriteLine("Hola Mundo!");</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Java -->
    <div class="modal fade" id="modalJava" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header border-danger">
            <h5 class="modal-title text-danger">Java - Multiplataforma</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>Java es un lenguaje estable y portable, ideal para aplicaciones empresariales complejas.</p>
            <pre><code>public class Hola { 
  public static void main(String[] args) { 
    System.out.println("Hola Mundo!");
  } 
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById("modales").innerHTML = modalesHTML;
});

// Efecto simple: iconos se iluminan al pasar el mouse
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => icon.style.opacity = '0.8');
  icon.addEventListener('mouseleave', () => icon.style.opacity = '1');
});
