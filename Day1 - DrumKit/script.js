function playAudio(e){
	// console.log(e.keyCode);
	const audioSrc = document.querySelector('audio[data-key="'+e.keyCode+'"]');
	const keySrc = document.querySelector('.key[data-key="'+e.keyCode+'"]');
	keySrc.classList.add('playing');
	// console.log(audioSrc);
	audioSrc.currentTime = 0;
	if(!audioSrc) return;
	audioSrc.play();
}
function playAudioClick(){
	// console.log(this.getAttribute('data-key'));
	const audioSrcClk = document.querySelector('audio[data-key="'+this.getAttribute('data-key')+'"]');
	const keySrcClk = document.querySelector('.key[data-key="'+this.getAttribute('data-key')+'"]');
	keySrcClk.classList.add('playing');
	// console.log(audioSrc);
	audioSrcClk.currentTime = 0;
	if(!audioSrcClk) return;
	audioSrcClk.play();
}

function removePlayingClass(e){
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys =  document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removePlayingClass));
keys.forEach(key => key.addEventListener('click', playAudioClick));

window.addEventListener('keydown', playAudio);
