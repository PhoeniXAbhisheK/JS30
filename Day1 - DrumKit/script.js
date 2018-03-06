window.addEventListener('keydown', function(e){
	// console.log(e.keyCode);
	const audioSrc = document.querySelector('audio[data-key="'+e.keyCode+'"]');
	const keySrc = document.querySelector('.key[data-key="'+e.keyCode+'"]');
	keySrc.classList.add('playing');
	// console.log(audioSrc);
	audioSrc.currentTime = 0;
	if(!audioSrc) return;
	audioSrc.play();
});

function removePlayingClass(e){
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys =  document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removePlayingClass));