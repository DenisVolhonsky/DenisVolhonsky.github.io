var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
var block4 = document.getElementById('block4');
var block5 = document.getElementById('block5');
var block3 = document.getElementById('block3');
var img = document.getElementById('bmw');
var t;
function music1() {
    var audio = new Audio();
    audio.src = '1.mp3';
    audio.autoplay = true;
}
// function music2() {
//     var audio = new Audio();
//     audio.src = '2.mp3';
//     audio.autoplay = true;
// }
block3.onmouseover = function (event) {
    event = event || window.event;
    if (event.relatedTarget === block1) {
        img.style.top = -402 + 'px';
        img.style.left = 0;
        img.style.display = 'block';
        music1();
        img.animate([{top: "-402px", transform:"rotate(0deg)"}, {top: "0",transform:"rotate(360deg)"}], {duration: 1000});
        img.style.top = 0 + 'px';
        t = 1;
    }
    if (event.relatedTarget === block5) {
        img.style.top = 402 + 'px';
        img.style.left = 0;
        img.style.display = 'block';
        music1();
        img.animate([{top: "402px", transform:"rotate(0deg)"},{top: "0", transform:"rotate(360deg)"}], {duration: 1000});
        img.style.top = 0 + 'px';
        t = 5;
    }
    if (event.relatedTarget === block2) {
        img.style.top = 0;
        img.style.left = -402 + 'px';
        img.style.display = 'block';
        music1();
        img.animate([{left: "-402px", transform:"rotate(0deg)"}, {left: "0", transform:"rotate(360deg)"}], {duration: 1000});
        img.style.left = 0 + 'px';
        t = 2;
    }
    if (event.relatedTarget === block4) {
        img.style.top = 0;
        img.style.left = 402 + 'px';
        img.style.display = 'block';
        music1();
        img.animate([{left: "402px", transform:"rotate(0deg)"}, {left: "0", transform:"rotate(-360deg)"}], {duration: 1000});
        img.style.left = 0 + 'px';
        t = 4;
    }
};
block3.onmouseout = function (event) {
    event = event || window.event;
    if (t === 1) {
        //music2();
        img.animate([{top: "0px", transform:"rotate(0deg)"}, {top: "-402px", transform:"rotate(-360deg)"}], {duration: 500});
        img.style.top = -402 + 'px';
    }
    if (t === 5) {
        //music2();
        img.animate([{top: "0px", transform:"rotate(0deg)"}, {top: "402px",transform:"rotate(-360deg)"}], {duration: 500});
        img.style.top = 402 + 'px';
    }
    if (t === 2) {
        //music2();
        img.animate([{left: "0px", transform:"rotate(0deg)"}, {left: "-402px", transform:"rotate(-360deg)"}], {duration: 500});
        img.style.left = -402 + 'px';
    }
    if (t === 4) {
        //music2();
        img.animate([{left: "0px", transform:"rotate(0deg)"}, {left: "402px", transform:"rotate(360deg)"}], {duration: 500});
        img.style.left = 402 + 'px';
    }
};