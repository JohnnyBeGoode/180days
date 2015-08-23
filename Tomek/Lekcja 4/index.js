var box = document.getElementsByClassName('box');
var color = " ";

	for (var i = 0; i < 4; i++) {	
		box[i].addEventListener('click', function() {
			box[i].style.backgroundColor = color
	});
	}

