let log = document.getElementById('log');
// let log = document.getElementsByClassName('log');

document.onclick = inputChange;

function inputChange(e) {
	log.textContent = 'Position: (' + e.clientX + ',' + e.clientY + ')';
}