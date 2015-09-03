var date = new Date();
var weekday = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
var messages = [ 'sunny', 'monnie', 'tues', 'wennie', 'thursy', 'frisy', 'saturd' ];
var day = weekday[date.getDay()];

var list = document.getElementById( 'day' );
var msg = document.getElementById( 'message' );



switch(day) {
    case 'Sunday':
        list.children[0].className = "active";
        msg.innerHTML = messages[0];
        break;
    case 'Monday':
        list.children[1].className = "active";
        msg.innerHTML = messages[1];
        break;
    case 'Tuesday':
        list.children[2].className = "active";
        msg.innerHTML = messages[2];
        break;
    case 'Wednesday':
        list.children[3].className = "active";
        msg.innerHTML = messages[3];
        break;
    case 'Thursday':
        list.children[4].className = "active";
        msg.innerHTML = messages[4];
        break;
    case 'Friday':
        list.children[5].className = "active";
        msg.innerHTML = messages[5];
        break;
    case 'Saturday':
        list.children[6].className = "active";
        msg.innerHTML = messages[6];
        break;
}