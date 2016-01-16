var dragndrop = (function(){
	var myX = '';
	var myY = '';
	var item = '';

	function moveStart(e){
		item = this
		myX = e.offsetX === undefined ? e.layerX : e.offsetX;
		myY = e.offsetY === undefined ? e.layerY : e.offsetY;
		item.style.zIndex = 10;
		console.log(myY)
		console.log(item)
		console.log(e)

	}

	function moveDragOver(e){
		e.preventDefault();
	}
	function moveDrop(e){
		e.preventDefault();
		item.style.position = 'absolute';
		item.style.left = e.pageX - myX + 'px';
		item.style.top = e.pageY - myY + 'px';
	}

	var box = document.querySelectorAll('body > div')

	for (var i = 0; i < box.length; i++) {
		box[i].addEventListener('dragstart', moveStart, false);
	};
	// window.addEventListener('dragstart', moveStart, false);
	window.addEventListener('dragover', moveDragOver, false);
	window.addEventListener('drop', moveDrop, false);

})();