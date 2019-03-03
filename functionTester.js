function generateRandomColor(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr
}
function randomColor() {
	var red = Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

var colors = generateRandomColor(6)
console.log(colors)
console.log(pickColor())