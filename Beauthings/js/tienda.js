let productos = [];
let total = 0;

function agregarProducto(producto, precio) {
    let carrito = document.getElementById("carrito");
    let productoItem = document.createElement("p");
    productoItem.textContent = producto;
    carrito.appendChild(productoItem);

    // Agrega producto al array
    productos.push({ nombre: producto, precio: precio });

    // Actualizar el total
    total += precio;
    document.getElementById("btnPagar").textContent = `Pagar: $${total}`;
}

function pagar() {
    // Guardar datos en sessionStorage
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('total', total);

    alert("Total a pagar: $ " + total);
    window.location.href = "compra.html"; // Redirige a la página de compra.html
}

function limpiarCarrito() {
    if (confirm("Vaciar carrito?")) {
        productos = [];
        total = 0;
        document.getElementById("carrito").innerHTML = ""; // Elimina todos los productos del carrito
        document.getElementById("btnPagar").textContent = "Pagar";

        // Limpia los datos del sessionStorage
        localStorage.removeItem('productos');
        localStorage.removeItem('total');
    }
}