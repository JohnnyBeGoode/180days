var container = document.querySelector('body > div');
var images = document.querySelectorAll('body > div > div');

// Convert NodeList to Array
var array = Array.prototype.slice.call(images);
array.reverse()

var slides = images.length - 1
function slider(){
	if(slides < 0){
		slides = images.length - 1
	}
	array.forEach(function(a){
		a.style.animation = 'move 2s'
	})	
	container.removeChild(array[slides])
	container.insertBefore(array[slides], null)	
	slides--
	setTimeout(slider, 4000)
}

function anim(){
	array.forEach(function(a){
		a.style.animation = ''
	})	
	setTimeout(anim, 3980)
}

anim()
slider()



