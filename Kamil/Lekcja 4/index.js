var colorPalette = document.getElementsByClassName( 'choose_color' );
var boxes = document.getElementsByClassName( 'put-color' );
var pickedColor = '';

for ( i = 0; i < colorPalette.length; i++ ) {
    colorPalette[i].addEventListener( 'click', function(){
        pickedColor = window.getComputedStyle(this,null).getPropertyValue("background-color")
    })
}

for ( i = 0; i < boxes.length; i++ ) {
    boxes[i].addEventListener( 'click', function(){
        this.style.backgroundColor = pickedColor;
    })
}