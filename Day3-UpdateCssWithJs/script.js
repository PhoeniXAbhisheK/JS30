const controls = document.querySelectorAll('.controls input');

function changeValues(){
	const suffix = this.dataset.sizing || '';

	document.documentElement.style.setProperty('--'+this.name, this.value+suffix);
	console.log(this.name+', '+this.value+', '+suffix);
}

controls.forEach(input => input.addEventListener('change', changeValues));
controls.forEach(input => input.addEventListener('mousemove', changeValues));