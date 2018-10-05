var speed = 300;
var cursorSpeed = 400;
var time = 0;
var prevTime = 0;

var text = 'hello, world! i use this website as a landing page for some of my parked domains ;-)';

function writeWord(word) {
    var _loop = function _loop(
        c) {
        time = Math.floor(Math.random() * speed);

        setTimeout(function() {
            $('#text').before(word[c]);
        }, prevTime + time);

        prevTime += time;
    };
    for (var c in word.split('')) {
        _loop(c);
    }
}

writeWord(text);

window.setInterval(function() {
    $('.cursor').toggleClass('hide');
}, cursorSpeed);