var button = document.getElementById( 'button' );

button.addEventListener( 'click', function() {
    getRandomColor();
});

function getRandomColor() {
    var value = "0123456789ABCDEF".split( '' );
    var color = "#"
    for ( i = 0; i < 6; i++ ) {
        color += value[Math.floor(Math.random() * 16)]
    }
    document.body.style.backgroundColor = color;
}