const insertar = document.getElementById('insertar');
const numero = document.getElementById('numero');

window.addEventListener('keydown', (e) => {
	console.log(numero);
	console.log(e);
	numero.style.display = "block";
	numero.innerHTML = `
		<div>${e.which}</div>
	`;
	
	insertar.innerHTML = `
		<div class="tecla">
			${e.key === ' ' ? 'Space' : e.key}
			<small>event.key</small>
		</div>
		<div class="tecla">
			${e.location}
			<small>event.location</small>
		</div>
		<div class="tecla">
			${e.which}
			<small>event.which</small>
		</div>
		<div class="tecla">
			${e.code}
			<small>event.code</small>
		</div>
	`
});
