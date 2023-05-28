window.sr = ScrollReveal ();

sr.reveal("header",{
    duration: 2000,
    origin: "bottom" ,
    distance: "-100px",
});

sr.reveal(".titulo-quienes-somos > h1",{
  duration: 2000,
  origin: "right" ,
  distance: "-100px",
});

sr.reveal(".titulo-seccion > h1",{
    duration: 1000,
    origin: "right" ,
    distance: "-100px",
});

sr.reveal("#hero >h1",{
    duration: 3000,
    origin: "top",
    distance: "-200px",
} )

sr.reveal("#hero >h2",{
    duration: 3000,
    origin: "top",
    distance: "-200px",
} )

// Aca esta lo del form

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	Names: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. 
	cuitNum: /^.{11}$/, // 11 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phoneNum: /^.{10}$/ // 10 numeros.
}

const campos = {
	Names: false,
	cuitNum: false,
	correo: false,
	phoneNum: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "Names":
			console.log('funciona')
			validarCampo(expresiones.Names, e.target, 'Names');
		break;
		case "cuitNum":
			console.log('funciona')
			validarCampo(expresiones.cuitNum, e.target, 'cuitNum');
		break;
		case "correo":
			console.log('funciona')
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "phoneNum":
			console.log('funciona')
			validarCampo(expresiones.phoneNum, e.target, 'phoneNum');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
		document.querySelector(`#grupo__${campo} .formulario__-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.Names && campos.cuitNum && campos.correo && campos.phoneNum){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});