const divs = document.querySelectorAll('div');

function show(e){
	console.log(this.classList.value);
	e.stopPropagation(); //this stops bubbling
}

divs.forEach(div => div.addEventListener('click', show));
// divs.forEach(div => div.addEventListener('click', show, {capture: true}));
