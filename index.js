//Segunda PreEntrega
//Alumno Lucas Santino Steckler

let productos = [
  {
    nombre: 'Camiseta',
    precio: 20000,
    descripcion: 'Camiseta deportiva nike',
  },
  {
    nombre: 'Pantalones',
    precio: 50000,
    descripcion: 'Pantalones tiro bajo anchoss para hombres',
  },
  {
    nombre: 'Zapatos',
    precio: 40000,
    descripcion: 'Zapatos de vestir para cumpleaños',
  },
];

function mostrarBienvenida() {
  alert(
    'Bienvenido a Mi tienda online de ropa\n\nEn nuestra tienda, ofrecemos los siguientes productos:'
  );
  mostrarProductos();
}

function mostrarProductos() {
  let mensaje = '';
  productos.forEach((producto, index) => {
    mensaje =
      mensaje + `${index + 1} ${producto.nombre} - $${producto.precio}\n`;
    mensaje = mensaje + ` Descripción: ${producto.descripcion}\n`;
  });
  alert(mensaje);
}

function simularCompra() {
  while (true) {
    mostrarBienvenida();
    let total = 0;
    let carrito = [];

    let seleccion;
    while (seleccion !== '0') {
      seleccion = prompt(
        'Ingrese el numero del producto que quieres comprar (0 para terminar la compra de productos):'
      );

      if (seleccion === null) {
        return;
      }

      let index = parseInt(seleccion) - 1;

      if (seleccion === '0') {
        break;
      }

      if (isNaN(index) || index < 0 || index >= productos.length) {
        alert(
          'Por favor elija un numero dentro del rango de numeros de productos que establecimos'
        );
        continue;
      }

      let productoSeleccionado = productos[index];
      carrito.push(productoSeleccionado);
      total += productoSeleccionado.precio;
    }

    if (carrito.length === 0) {
      alert('No seleciconaste ningun producto por lo que cancelamos tu compra');
    } else {
      let resumenCompra = 'Resumen de la compra:\n';
      carrito.forEach((producto) => {
        resumenCompra += `${producto.nombre} - $${producto.precio}\n`;
      });
      resumenCompra += `total: $${total}`;
      alert(resumenCompra);
    }
  }
}

simularCompra();
