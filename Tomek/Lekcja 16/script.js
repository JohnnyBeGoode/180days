var div = document.getElementsByClassName('box');
var span = document.getElementById('span');
var body = document.getElementById('body');

var x = 0;
var y = 0;

document.addEventListener( 'mousemove', function(){
	x = event.clientX;
	y = event.clientY;
	var coor = 'Coordinates: ' + x +' ; ' + y
	span.innerHTML = coor;

})
function size(x) {	
	return Math.floor(Math.random() * x);
}
function color() {
	return "#" + Math.random().toString(16).slice(2,8);
}
var num = 0;

console.log(num);

for (var i = 0; i < div.length; i++) {
	num = size(100);
console.log(num);	
	div[i].style.height = num + 'px';
	div[i].style.width = num + 'px';	
	div[i].style.backgroundColor = color();
	moveDiv(div[i],num);	
}



function moveDiv(elm, speed) {
	var xp = 0, yp = 0;
	var loop = setInterval(function () {
		xp +=  ( x - xp )  / speed;
		yp +=  ( y - yp ) / speed;
		elm.style.top = yp + 'px';
		elm.style.left = xp + 'px';	
	}, 30);
};





console.log(x);