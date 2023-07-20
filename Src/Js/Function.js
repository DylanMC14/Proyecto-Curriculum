const playSound = function() {
    let element = document.createElement('div');
    element.innerHTML = `
    <audio autoplay>
    <source src="Src/Audio/lost frequencies ft. sandro cavazza - beautiful life (sub español).mp3" type="audio/mp3">
 </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);
