const links = document.querySelectorAll('a');
const highlighter = document.createElement('span');
highlighter.classList.add('highlight');
document.body.append(highlighter);

function highlightEvent(){
  const values = this.getBoundingClientRect();
  console.log(values);	

  const coords = {
  	width : values.width,
  	height : values.height,
  	top : values.top + window.scrollY,
  	left : values.left + window.scrollX
  }

  highlighter.style.height = `${coords.height}px`;
  highlighter.style.width = `${coords.width}px`;
  highlighter.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach(a => a.addEventListener('mouseenter', highlightEvent));