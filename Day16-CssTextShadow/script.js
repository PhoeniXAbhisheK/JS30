const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow (e) {
	/*const height = hero.offsetHeight;
	const width = hero.offsetWidth;*/
	// The above can also be written as below(destructuring)
	const { offsetHeight : height, offsetWidth : width} = hero;
	let { offsetX : x, offsetY : y} = e;
	const walk = 100;

	if(this !== e.target){
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}

	const walkX = Math.round((x / width * walk) - (walk / 2));
	const walkY = Math.round((y / height * walk) - (walk / 2));

	text.style.textShadow =  `
		${walkX}px ${walkY}px 0 rgba(0, 0, 0, 0.5),
		${walkX * -1}px ${walkY}px 0 rgba(255, 0, 0, 0.5),
		${walkX}px ${walkY * -1}px 0 rgba(0, 255, 0, 0.5),
		${walkX * -1}px ${walkY * -1}px 0 rgba(0, 0, 255, 0.5)

	`;
}

hero.addEventListener('mousemove', shadow);