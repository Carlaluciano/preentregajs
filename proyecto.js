
class Producto {
    constructor(nombre, numero, precio, stock) {
        this.nombre = nombre;
        this.numero = numero;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Inicializo los arrays para las categorias de los productos
const galletitas = [];
const tortas = [];
const tartas = [];

//Cargo el stock de productos segun su categoria
//GALLETITAS
galletitas.push(new Producto("Galletitas Vainilla", 1, 50, 30));
galletitas.push(new Producto("Galletitas Chocolate", 2, 50, 10));
galletitas.push(new Producto("Galletitas con chips", 3, 80,  20));
galletitas.push(new Producto("Galletitas Brownie", 4, 100,  15));
//TORTAS
tortas.push(new Producto("Torta Oreo", 5, 2100,  10));
tortas.push(new Producto("Chocotorta", 6, 2000, 8));
tortas.push(new Producto("Torta Matilda", 7, 2500, 5));
//TARTAS
tartas.push(new Producto("Tarta Cabsha", 8, 1500, 7));
tartas.push(new Producto("Tarta Frutal", 9, 1500, 10));
tartas.push(new Producto("Tarta Sambayon", 10, 1800, 5));



//Recorro los arrays para mostrarle los productos al usuario
for (const galletita of galletitas) {
    alert("Numero (" + galletita.numero + ") - " + galletita.nombre);
}
for (const torta of tortas) {
    alert("Numero (" + torta.numero + ") - " + torta.nombre);
}
for (const tarta of tartas) {
    alert("Numero (" + tarta.numero + ") - " + tarta.nombre);
}

//Funcion para calcular el precio final de la compra
function calcularPrecio(precioProducto, cantidadProducto, costoEnvio) {
    return ((precioProducto * 1.21) * cantidadProducto) + costoEnvio;
}

//Solicito al usuario el numero del producto y lo almaceno en una nueva variable con el producto seleccionado
let productoSeleccionado = parseInt(prompt("Ingrese el Numero del producto que desea comprar:"));
const galletitasBuscada = galletitas.find(galletita => galletita.numero === productoSeleccionado);
const tortaBuscado = tortas.find(torta => torta.numero === productoSeleccionado);
const tartaBuscado = tartas.find(tarta => tarta.numero === productoSeleccionado);

//Solicito al usuario la cantidad del producto
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del producto seleccionado:"));

//Costo de envio promedio dentro de Pergamino
const envio = 300;

//Salidas de consola indicando el precio final de la compra segun el producto seleccionado
if (productoSeleccionado <= 0) {
    alert("Ingresa un Numero valido");
} else if (productoSeleccionado <= 4) {
    alert("El precio final de tu compra con envio es: $" + calcularPrecio(galletitasBuscada.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    galletitasBuscada.vender(cantidad);
} else if (productoSeleccionado <= 7) {
    alert("El precio final de tu compra con envio es: $" + calcularPrecio(tortaBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    tortaBuscado.vender(cantidad);
} else if (productoSeleccionado <= 9) {
    alert("El precio final de tu compra con envio es: $" + calcularPrecio(tartaBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    p
    tartaBuscado.vender(cantidad);
} else {
    alert("Ingresa un Numero valido");
}