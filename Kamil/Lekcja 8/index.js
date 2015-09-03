var boxShadowList = document.getElementsByClassName( 'box-shadow' );
var textShadowList = document.getElementsByClassName( 'text-shadow' );

var boxBlur = 0;
var boxShadow = 0;
var spanBlur = 0;
var spanShadowPosition = 0;
var paraBlur = 0;
var paraShadowPosition = 0;
var tag = '';

for ( i=0; i < boxShadowList.length; i++ ) {
    boxShadowList[i].addEventListener( 'click', function(){
        console.log(boxShadowList[i]);
        dropShadow(this, 'box');
    });
}

for ( i=0; i < textShadowList.length; i++ ) {
    textShadowList[i].addEventListener( 'click', function(){
        tag = this.tagName;
        dropShadow(this, 'text', tag);
    });
}

function dropShadow(element, type, tag) {
    if ( type == 'box' ) {
        boxBlur += 3;
        boxShadow ++;
        element.style.boxShadow = '#ccc 0 0 ' + boxShadow + 'px ' + boxBlur + 'px';
    } else if ( tag == 'SPAN' ) {
        spanBlur += 2;
        spanShadowPosition += 1;
        element.style.textShadow = '#000 0 ' + spanShadowPosition + 'px ' + spanBlur + 'px';
    } else {
        paraBlur += 2;
        paraShadowPosition += 1;
        element.style.textShadow = '#000 0 ' + paraShadowPosition + 'px ' + paraBlur + 'px';
    }
}