var numSquares = 6
var pickedColor
var squares = document.getElementsByClassName('square')
var resetButton = document.getElementById('reset')
var modeButtons = document.getElementsByClassName('mode')
var defaultCode = document.getElementById('default-code')
var userCode = document.getElementById('user-code')

var colors = generateRandomColor(6)
pickedColor = pickColor()

resetButton.addEventListener('click', function () {
	colors = generateRandomColor(6)
	pickedColor = pickColor()
	defaultCode.innerHTML = pickedColor
	userCode.innerHTML = ''
	for (var i = 0; i <= squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]
	}
})

defaultCode.innerHTML = pickedColor

for (var i = 0; i <= squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]
	squares[i].addEventListener('click', colorChecker)
}


function colorChecker() {
	var clickedColor = this.style.backgroundColor
	userCode.innerHTML = this.style.backgroundColor
	// alert('klik')
	if (pickedColor === clickedColor) {
		userCode.innerHTML = 'Correct!'
		changeColors(pickedColor)
	}
	else {
		this.style.backgroundColor = "#232323"
	}
}

function changeColors(color) {
	for (var i = 0; i <= squares.length; i++) {
		squares[i].style.backgroundColor = color
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function randomColor() {
	var red = Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}


function generateRandomColor(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr
}