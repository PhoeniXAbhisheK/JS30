const slides = document.querySelector('.items');

let isDown = false;

let startX;
let scrollLeft;

slides.addEventListener('mouseup', () =>{
  isDown = false;
  slides.classList.remove('active');
});
slides.addEventListener('mousedown', (e) =>{
  isDown = true;
  slides.classList.add('active');
  startX = e.pageX - slides.offsetLeft;
  scrollLeft = slides.scrollLeft;
});
slides.addEventListener('mouseleave', () =>{
  isDown = false;
  slides.classList.remove('active');
});
slides.addEventListener('mousemove', (e) =>{
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slides.offsetLeft;
  const diff = x - startX;
  slides.scrollLeft = scrollLeft - diff;
});