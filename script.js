'use strict'

// Ejecutar Popup

document.querySelectorAll('.modal .overlay').forEach((eventoUno) => {
	eventoUno.addEventListener('click', function (eventoDos) {
		eventoDos.stopPropagation();// No propaga el clic al contenedor PADRE
		console.log(this)
		// Accedo al padre directo de overlay
		this.parentNode.classList.add('activo');
	});
});

let listaModal = document.querySelectorAll('.modal ');

// Equivalente al foreach

// for ( let i=0; i<listaModal.length; i++ ){
// 	listaModal[i].addEventListener('click', function () {
// 		this.classList.remove('activo');
// 		listaModal[i].classList.remove('activo');
// 	});
// }

listaModal.forEach((cadaNodoImagenModal) => {
	cadaNodoImagenModal.addEventListener('click', function () {
		this.classList.remove('activo');
	});
});

// Seleccionar elementos

let nodoBtnTierra = document.querySelector("#btnTierra");
let nodoBtnAgua = document.querySelector("#btnAgua");
let nodoBtnFuego = document.querySelector("#btnFuego");
let nodoBtnTodos = document.querySelector("#btnTodos");

// Seleccionar listas (es necesario poner All para que reconozca la lista)

let nodoListaTierra = document.querySelectorAll(".tierra");
let nodoListaAgua = document.querySelectorAll(".agua");
let nodoListaFuego = document.querySelectorAll(".fuego");
let nodoListaTodos = document.querySelectorAll(".imagen");



// Eventos de click

nodoBtnTierra.addEventListener("click", function (){
	
	for(let i = 0 ; i < nodoListaTodos.length; i++){

		nodoListaTodos[i].classList.add ('out');
	}

	for(let i = 0 ; i < nodoListaTierra.length; i++){

		nodoListaTierra[i].classList.remove ('out');

	}

	
})



nodoBtnAgua.addEventListener("click", function (){
	
	for( let i = 0 ; i < nodoListaTodos.length; i++) {
		nodoListaTodos [i].classList.add ('out');
	}
	
	for( let i = 0 ; i < nodoListaAgua.length; i++) {
		nodoListaAgua [i].classList.remove ('out');
	}
})


nodoBtnFuego.addEventListener("click", function (){
	
	for( let i = 0 ; i < nodoListaTodos.length; i++) {
		nodoListaTodos [i].classList.add ('out');
	}
	
	for( let i = 0 ; i < nodoListaFuego.length; i++) {
		nodoListaFuego [i].classList.remove ('out');
	}
})



nodoBtnTodos.addEventListener("click", function (){
	
	for( let i = 0 ; i < nodoListaTodos.length; i++) {
		nodoListaTodos [i].classList.add ('out');
	}
	
	for( let i = 0 ; i < nodoListaTodos.length; i++) {
		nodoListaTodos [i].classList.remove ('out');
	}
})


