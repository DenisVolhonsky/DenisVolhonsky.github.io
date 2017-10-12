var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
var block3 = document.getElementById('block3');
var block4 = document.getElementById('block4');
var block5 = document.getElementById('block5');
var img = document.getElementById('bmw');


document.getElementById('block3').onmouseover = function(event) {
    if(event.relatedTarget== block1) {
        var y=-302;
        img.style.top = (y+402)+'px';
        console.log('сверху заводит');
    }

    document.getElementById('block3').onmouseout = function(event) {
        if(event.relatedTarget== block1) {
            var y=100;
            img.style.top = (y-402)+'px';
            console.log('сверху уводит');
        }
    }



    // if(event.relatedTarget== block2) {
    //     var x=-302;
    //     img.style.left = (x+402)+'px';
    //     img.style.top = 100+'px';
    //     console.log('слева');
    // }


    // if(event.relatedTarget== block4) console.log('справа');
    // if(event.relatedTarget== block5) console.log('снизу');
}


