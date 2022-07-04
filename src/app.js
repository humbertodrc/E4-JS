import { crearCard } from '../src/components/card.js';
import { pizzas } from './data/data.js';


// Variables
const formulario = document.querySelector("#form-data");
const idPizza = document.querySelector("#idPizza");
const container = document.querySelector(".card-container");

// Variables exprtaralas para usar en el evento del boton de agregar a favoritos
const carrito = document.querySelector(".amount");



// Guardar array al localStorage
window.addEventListener("load", () => {
	localStorage.setItem("pizzas", JSON.stringify(pizzas));
	// localStorage.setItem("favoritos", JSON.stringify(favoritos));
	// Cantidad que esta en el carrito
});

// Mostar numero de pizzas en el carrito
document.addEventListener("DOMContentLoaded", () => {
	// Obtener las pizzas favoritas
	let pizzasFavoritasCart = JSON.parse(localStorage.getItem("pizzaFavorita"));
	// console.log(pizzasFavoritasCart);
	if (pizzasFavoritasCart) {
		carrito.innerHTML = pizzasFavoritasCart.length;
		// mostrarPizzasFavoritas();
	} 
});


formulario.addEventListener("submit", (e) => {
	e.preventDefault();

	// Obtener el array de pizzas del localStorage
	const pizzasLocalStorage = JSON.parse(localStorage.getItem("pizzas"));

	// Encuentra el primer objeto que cumple con el id que se le pasa
	// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	const pizzaByID = pizzasLocalStorage.find(
		(pizza) => pizza.id == idPizza.value
	);

	// Me devuelve un array donde esta la pizza con el id que le paso
	// const pizzaByID = pizzasLocalStorage.filter((pizza) => pizza.id == idPizza.value);

	// Validaciones
	if (idPizza.value == "") {
		alert("Debes ingresar un ID");
		return;
	}

	if (pizzaByID == undefined) {
		alert("No existe la pizza con el ID ingresado");
		return;
	}

	// Mostrar la pizza en la card
	// console.log(pizzaByID);
	crearCard(pizzaByID, container, carrito);

	// Limpiar el formulario
	formulario.reset();
});