var boxes = document.getElementsByClassName( 'box' );

for ( i = 0; i < boxes.length; i++ ) {
    boxes[i].addEventListener( 'mouseover', function(){
        var randomColor = '#' + Math.random().toString(16).slice(2, 8);
        this.style.backgroundColor = randomColor;
    });
}