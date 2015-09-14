var result = document.getElementById('result');
var roll = document.getElementsByClassName('start');
var dice = document.getElementsByClassName('dice');
var button = document.getElementById('button');
var listclass = ['one','two','three','four1','four2','six']

button.addEventListener('click', function(){

	result.innerHTML = "Shake shake shake";
	result.style.animation = 'move 1s'	
		
	setTimeout(function(){
		clear();
		var roll1 = makeRoll(dice[0]);
		var roll2 = makeRoll(dice[1]);
		result.innerHTML = roll1 + roll2;	
		result.style.animation = '';
	}, 1000);		
});

function clear () {
	for (var i = 0; i < roll.length; i++) {
		roll[i].style.display = 'none';
		for (var j = 0; j < listclass.length; j++) {
			roll[i].classList.remove(listclass[j]);
		};
	}
}

function makeRoll ( element ){
	var num1 = Math.floor(Math.random()*6) + 1;
	if ( num1 == 1 ) {
		element.children[0].style.display = 'block';
		element.children[0].className += ' one';
	}
	if ( num1 == 2 ) {
		element.children[0].style.display = 'block';
		element.children[1].style.display = 'block';
		element.children[0].className += ' two';
		element.children[1].className += ' three';
	}
	if ( num1 == 3 ) {
		element.children[0].style.display = 'block';
		element.children[1].style.display = 'block';
		element.children[2].style.display = 'block';
		element.children[0].className += ' one';
		element.children[1].className += ' two';
		element.children[2].className += ' three';		
	}
	if ( num1 == 4 ) {
		element.children[0].style.display = 'block';
		element.children[1].style.display = 'block';
		element.children[2].style.display = 'block';
		element.children[3].style.display = 'block';
		element.children[0].className += ' two';
		element.children[1].className += ' three';		
		element.children[2].className += ' four1';
		element.children[3].className += ' four2';
	}
	if ( num1 == 5 ) {
		for (var i = 0; i < 5; i++) {
			element.children[i].style.display = 'block';
		};
		element.children[0].className += ' one';
		element.children[1].className += ' two';
		element.children[2].className += ' three';		
		element.children[3].className += ' four1';
		element.children[4].className += ' four2';
	}
	if ( num1 == 6) {
		for (var i = 0; i < 6; i++) {
			element.children[i].style.display = 'block';
			element.children[i].style.display = ' six';	
		};			
	}
	return num1;
}