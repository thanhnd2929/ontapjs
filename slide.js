var arr = [];
var index = 1;
var running = false;

function loadImage() {
   for(var i = 1; i < 6; i++) {
    arr[i] = new Image();
    arr[i].src = "anh/photo" + i + '.jpg'
   }
}

function First() {
    index = 1;
    updateImage();
}

function Last() {
    index = arr.length - 1;
    updateImage();
}

function Back() {
    if(running) {
        Stop();
    }

    if(index > 1) {
        index--;
        updateImage();
    }
}

function Next() {
    if(running) {
        Stop();
    }
    
    if(index < arr.length - 1) {
        index++;
        updateImage();
    }
}

function updateImage() {
    document.getElementById('img1').src =  arr[index].src; 
}

function Start() {
    loadImage();
    updateImage();
    index++;
    if(index==arr.length) {
        index = 1;
    }
    running = true; // slide dang chay
    t = setTimeout("Start()", 2000);
}

function Stop() {
    clearTimeout(t);
    running = false; // slide da dung
}