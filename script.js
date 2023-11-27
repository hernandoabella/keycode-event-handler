const insert = document.getElementById("insert");
const number = document.getElementById("number");

window.addEventListener("keydown", (e) => {
  console.log(number);
  console.log(e);
  number.style.display = "block";
  number.innerHTML = `
		<div>${e.which}</div>
	`;

  insert.innerHTML = `
		<div class="key__container">
			<div class="key">
				<div class="value">${e.key === " " ? "Space" : e.key}</div>
				<small>event.key</small>
			</div>
			<div class="key">
				<div class="value">${e.location}</div>
				<small>event.location</small>
			</div>
			<div class="key">
				<div class="value">${e.code}</div>
				<small>event.code</small>
			</div>
		</div>
	`;
});
