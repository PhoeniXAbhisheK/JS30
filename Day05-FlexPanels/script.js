const panelList = document.querySelectorAll('.panel');

function toggleOpen(e){
  this.classList.toggle('open');
}

panelList.forEach(panel => panel.addEventListener('click', toggleOpen));
// The below code will perform the same function as the above one, this just has different mouse events.

// panelList.forEach(panel => panel.addEventListener('mouseenter', toggleOpen));
// panelList.forEach(panel => panel.addEventListener('mouseleave', toggleOpen));