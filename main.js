function preload() {

}

function setup() {
    canvas = createCanvas(300, 350);
    canvas.position(200, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 300, 350)
}


function take_snapshot() {
    save("photo.png");
}