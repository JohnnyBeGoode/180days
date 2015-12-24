var container = document.querySelector('.container');
var images = document.querySelectorAll('div.container > div');

// Need to convert Nodelist to Array
var arr = [];
function makeArray(nodelitst){
	for (var i = 0; i < nodelitst.length; i++) {
		arr.push(nodelitst[i])
	};
	return arr;
}
makeArray(images)
arr.reverse()

// Slider Function
var slides = images.length - 1
function slider(){
	if(slides < 0){
		slides = images.length - 1
	}
	container.removeChild(arr[slides])
	container.insertBefore(arr[slides], null)	
	slides--
	arr.forEach(function(a){
		a.style.animation = 'move 2s'
	})
	setTimeout(slider, 4000)
}
function anim(){
	arr.forEach(function(a){
		a.style.animation = ''
	})	
	setTimeout(anim, 3980)
}

anim()
slider()



