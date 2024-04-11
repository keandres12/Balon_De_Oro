const agregarAlCarritoBotones = document.querySelectorAll('.agregar-al-carrito');
let articulosEnCarrito = [];

agregarAlCarritoBotones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const articulo = boton.parentElement;
    const precio = parseFloat(articulo.querySelector('[data-precio]').innerText.slice(1));
    const nombre = articulo.querySelector('h2').innerText;

    const articuloExistente = articulosEnCarrito.find((articuloEnCarrito) => articuloEnCarrito.nombre === nombre);

    if (articuloExistente) {
      articuloExistente.cantidad++;
    } else {
      articulosEnCarrito.push({ nombre, precio, cantidad: 1 });
    }

    actualizarCarrito();
  });
});

function actualizarCarrito() {
  const carritoContenedor = document.getElementById('articulos-en-carrito');
  carritoContenedor.innerHTML = '';

  let subtotal = 0;

  articulosEnCarrito.forEach((articuloEnCarrito) => {
    const li = document.createElement('li');
    li.innerText = `${articuloEnCarrito.nombre} ($${articuloEnCarrito.precio}) x ${articuloEnCarrito.cantidad} = $${articuloEnCarrito.precio * articuloEnCarrito.cantidad}`;
    carritoContenedor.appendChild(li);

    subtotal += articuloEnCarrito.precio * articuloEnCarrito.cantidad;
  });

  document.getElementById('subtotal').innerText = `Subtotal: ${subtotal}`;
}