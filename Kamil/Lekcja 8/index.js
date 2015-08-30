var boxShadowList = document.getElementsByClassName( 'box-shadow' );
var textShadowList = document.getElementsByClassName( 'text-shadow' );

var boxBlur = 0;
var boxShadow = 0;
var textBlur = 0;
var shadowPosition = 0;

for ( i=0; i < boxShadowList.length; i++ ) {
    boxShadowList[i].addEventListener( 'click', function(){
        dropShadow(this, 'box');
    });
}

for ( i=0; i < textShadowList.length; i++ ) {
    textShadowList[i].addEventListener( 'click', function(){
        dropShadow(this, 'text');
    });
}

function dropShadow(element, type) {
    if ( type == 'box' ) {
        boxBlur += 3;
        boxShadow ++;
        element.style.boxShadow = '#ccc 0 0 ' + boxShadow + 'px ' + boxBlur + 'px';
    } else {
        textBlur += 2;
        shadowPosition += 1;
        element.style.textShadow = '#000 0 ' + shadowPosition + 'px ' + textBlur + 'px';
    }
}