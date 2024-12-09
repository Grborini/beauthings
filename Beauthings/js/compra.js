// Recuperar los datos del sessionStorage
const productos = JSON.parse(localStorage.getItem('productos')) || [];
const total = localStorage.getItem('total') || 0;

// Mostrar el resumen de la compra
const resumen = document.getElementById("detalle");
let resumenTexto = "Resumen de la compra:<br><br>";

// Usar un bucle for tradicional para los productos
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    resumenTexto += `${producto.nombre}: $${producto.precio}<br>`;
}

resumenTexto += `<br>Total a pagar: $${total}`;
resumen.innerHTML = resumenTexto;

// Función envío del Formulario
function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtiene datos de contacto
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('contactoEmail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (!nombre || !apellido || !email || !telefono) {
        alert("Por favor, completa todos los campos de contacto.");
        return; // detiene la ejecucuión de la función hasta que pase el if
    }

    // Crea el listado del carrito
    let carritoContenido = '';
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        carritoContenido += `${producto.nombre} - $${producto.precio}\n`;
    }

    // Agrega al valor total el signo de pesos $
    const totalConPesos = `$${total}`;

    // Asigna los datos a los campos ocultos del formulario
    document.getElementById('carritoData').value = carritoContenido;
    document.getElementById('totalCarrito').value = totalConPesos;

    // Envía el formulario a Formspree
    document.getElementById('formulario').submit();
}

// Asociamos el evento al botón de enviar
document.getElementById('botonEnviar').addEventListener('click', enviarFormulario);

