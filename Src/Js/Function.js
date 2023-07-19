const playSound = function() {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
      <audio controls autoplay>
      <source src="Src/Audio/Lost Frequencies - Are You With Me (Official Music Video).mp3" type="audio/mp3">
  </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);
