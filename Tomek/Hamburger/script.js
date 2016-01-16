var hamburger = document.querySelector('body > div > div')
var menu = document.querySelector('body > div > div:nth-child(2)')

var flag = false;
var windowWidth = -window.innerWidth;
var breakPoint = window.innerWidth

hamburger.addEventListener('click', function(){

	menu.style.width =  window.innerWidth + 'px';
	menu.style.height = window.innerHeight + 'px';
	menu.style.backgroundColor = 'blue';
	menu.style.position = 'relative';
	hamburger.style.position = 'relative'
	
	function up(){

		if( windowWidth <= 1 ) {
			menu.style.left = windowWidth + 'px';
			hamburger.style.left = breakPoint - 50 + 'px'
			windowWidth += 10
			setTimeout( up, 40 )
			flag = true
		}

	}

	function down(){

		if( windowWidth >= -breakPoint ) {
			windowWidth -= 10
			menu.style.left = windowWidth + 'px';
			hamburger.style.left = 10 + 'px'
			setTimeout( down, 40 )
			flag = false;
		}

	}	

	if( flag ){
		down()
	} else {
		up()
	}

})
