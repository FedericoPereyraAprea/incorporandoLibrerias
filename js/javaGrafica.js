//Productos
class producto {
	constructor(id, nombre, precio, stock) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.stock = stock;
	}
}
const producto1 = new producto(1, "taza magica personalizada", 500, 30)
const producto2 = new producto(2, "resma A4 Autor", 650, 87)
const producto3 = new producto(3, "resma A3 Autor", 900, 64)
const producto4 = new producto(4, "aceite de Coco", 750, 25)
const producto5 = new producto(5, "dulce de leche chico", 340, 18)
const producto6 = new producto(6, "dulce de leche grande", 790, 18)
const producto7 = new producto(7, "sello automatico", 450, 42)
const producto8 = new producto(8, "yerba don arregui", 350, 20)
const producto9 = new producto(9, "yerba kalena", 450, 20)
let productosGrafica = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

//Inicio de sesión
class usuario {
	constructor (usuario, contraseña){
		this.usuario = usuario;
		this.contraseña = contraseña;
	}
}

//DOM
let iniciarSesion = document.getElementById("formIniciarSesion")
let buscarInput = document.querySelector(".buscador")
let consultaFooter = document.getElementById("consultaFooter")
let botonCarrito1 = document.getElementById("carritoBoton1")
let botonCarrito2 = document.getElementById("carritoBoton2")
let botonCarrito3 = document.getElementById("carritoBoton3")
let botonCarrito4 = document.getElementById("carritoBoton4")
let botonCarrito5 = document.getElementById("carritoBoton5")
let botonCarrito6 = document.getElementById("carritoBoton6")
let botonCarrito7 = document.getElementById("carritoBoton7")
let botonCarrito8 = document.getElementById("carritoBoton8")
let botonCarrito9 = document.getElementById("carritoBoton9")
let productoAgregado = document.querySelector(".carritoBoton")


//escuchadores y uso de localStorage
let user = []
localStorage.setItem("user", JSON.stringify(user))
iniciarSesion.addEventListener("submit", (event) => {
	event.preventDefault()
	let email = document.querySelector(".usuarioInput").value
	let contraseña = document.querySelector(".contraseñaInput").value
	let user = {usuario: email, contraseña: contraseña}
	localStorage.setItem("user", JSON.stringify(user))
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: '¡Bienvenido a GráficaB377!',
		showConfirmButton: false,
		timer: 3000
  	})
	iniciarSesion.reset()
})
let buscador = []
buscarInput.addEventListener("input", (event) => {
	event.preventDefault()
	let buscador = buscarInput.value
	localStorage.setItem("resultados", JSON.stringify (productosGrafica.filter (productosGrafica => productosGrafica.nombre.includes(buscador.toLowerCase()))))	
})
let correoConsulta = []
localStorage.setItem("correoConsulta", JSON.stringify(correoConsulta))
consultaFooter.addEventListener("submit",(event) => {
	event.preventDefault()
	let email = document.querySelector(".correoFooter").value
	let asunto = document.querySelector(".asuntoFooter").value
	let consulta = document.querySelector(".textoFooter").value
	let correoConsulta = {contacto: email, Asunto: asunto, consulta: consulta}
	localStorage.setItem("correoConsulta", JSON.stringify(correoConsulta))
	Swal.fire({
		title: '¡Consulta Enviada con Exito! <br> Te responderemos a la brevedad.',
		showClass: {
		  popup: 'animate__animated animate__fadeInDown'
		},
		hideClass: {
		  popup: 'animate__animated animate__fadeOutUp'
		}
	  })
	consultaFooter.reset()
})
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
botonCarrito1.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "taza magica personalizada")) {
		let indice = carrito.findIndex(producto => producto.nombre == "taza magica personalizada")
		carrito[indice].cant++
	} else {
		let producto1carrito = {
			...producto1,
			cant:1
		}
		carrito.push(producto1)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	Toastify({
		text: "¡Producto agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true, 
		style: {
		  background: "linear-gradient(to right, #43be4d, cornflowerblue)",
		},
		onClick: function(){}
	}).showToast();
})
botonCarrito2.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "resma A4 Autor")) {
		let indice = carrito.findIndex(producto => producto.nombre == "resma A4 Autor")
		carrito[indice].cant++
	} else {
		let producto2carrito = {
			...producto2,
			cant:1
		}
		carrito.push(producto2)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	Toastify({
		text: "¡Producto agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true, 
		style: {
		  background: "linear-gradient(to right, #43be4d, cornflowerblue)",
		},
		onClick: function(){}
	}).showToast();
}) 
botonCarrito3.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "resma A3 Autor")) {
		let indice = carrito.findIndex(producto => producto.nombre == "resma A3 Autor")
		carrito[indice].cant++
	} else {
		let producto3carrito = {
			...producto3,
			cant:1
		}
		carrito.push(producto3)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	Toastify({
		text: "¡Producto agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true, 
		style: {
		  background: "linear-gradient(to right, #43be4d, cornflowerblue)",
		},
		onClick: function(){}
	}).showToast();
})
botonCarrito4.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "aceite de Coco")) {
		let indice = carrito.findIndex(producto => producto.nombre == "aceite de Coco")
		carrito[indice].cant++
	} else {
		let producto4carrito = {
			...producto4,
			cant:1
		}
		carrito.push(producto4)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	Toastify({
		text: "¡Producto agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true, 
		style: {
		  background: "linear-gradient(to right, #43be4d, cornflowerblue)",
		},
		onClick: function(){}
	}).showToast();
}) 
botonCarrito5.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "dulce de leche chico")) {
		let indice = carrito.findIndex(producto => producto.nombre == "dulce de leche chico")
		carrito[indice].cant++
	} else {
		let producto5carrito = {
			...producto5,
			cant:1
		}
		carrito.push(producto5)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	Toastify({
		text: "¡Producto agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true, 
		style: {
		  background: "linear-gradient(to right, #43be4d, cornflowerblue)",
		},
		onClick: function(){}
	}).showToast();
})  
botonCarrito6.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "dulce de leche grande")) {
		let indice = carrito.findIndex(producto => producto.nombre == "dulce de leche grande")
		carrito[indice].cant++
	} else {
		let producto6carrito = {
			...producto6,
			cant:1
		}
		carrito.push(producto6)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	Toastify({
		text: "¡Producto agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true, 
		style: {
		  background: "linear-gradient(to right, #43be4d, cornflowerblue)",
		},
		onClick: function(){}
	}).showToast();
}) 
botonCarrito7.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "sello automatico")) {
		let indice = carrito.findIndex(producto => producto.nombre == "sello automatico")
		carrito[indice].cant++
	} else {
		let producto7carrito = {
			...producto7,
			cant:1
		}
		carrito.push(producto7)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	Toastify({
		text: "¡Producto agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true, 
		style: {
		  background: "linear-gradient(to right, #43be4d, cornflowerblue)",
		},
		onClick: function(){}
	}).showToast();
}) 
botonCarrito8.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "yerba don arregui")) {
		let indice = carrito.findIndex(producto => producto.nombre == "yerba don arregui")
		carrito[indice].cant++
	} else {
		let producto8carrito = {
			...producto8,
			cant:1
		}
		carrito.push(producto8)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	Toastify({
		text: "¡Producto agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true, 
		style: {
		  background: "linear-gradient(to right, #43be4d, cornflowerblue)",
		},
		onClick: function(){}
	}).showToast();
}) 
botonCarrito9.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "yerba kalena")) {
		let indice = carrito.findIndex(producto => producto.nombre == "yerba kalena")
		carrito[indice].cant++
	} else {
		let producto9carrito = {
			...producto9,
			cant:1
		}
		carrito.push(producto9)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	Toastify({
		text: "¡Producto agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true, 
		style: {
		  background: "linear-gradient(to right, #43be4d, cornflowerblue)",
		},
		onClick: function(){}
	}).showToast();
}) 









