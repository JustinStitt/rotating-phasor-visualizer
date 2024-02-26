let angle = 0;
let theta = 0;
let t;
let amplitude = 0;

function setup() {
    createCanvas(950, 700);
    w = createCanvas(950, 700).width;
    h = createCanvas(950, 700).height;
    stroke('#fae');
    strokeWeight(3);
    angleMode(RADIANS);
    noFill();


}

function draw() {
    background(29);
    // make center of screen our starting point
    translate(w/2, h/2);
    drawAxes()
    amplitude = 75; // radius == amplitude
    angle = 0.05;
    t = frameCount/5;
    theta = angle * t;
    y = amplitude * sin(-theta); // y = r sinΘ
    x = amplitude * sin(theta + PI/2); // x = r cosΘ
    drawOscillations(y, x);
    drawRadius(y, x);
    drawSignal(t, y, x);
    circle(0, 0, 2 * amplitude);
}

function drawSignal(t, y2, y1) {
    point(t, y2);
    point(y1, t);

}

function drawRadius(y, x) {
    line(0, 0, x, y);
    drawProjections(y, x);
}

function drawProjections(y, x) {
    line(x, 0, x, y);
    line(x, y, 0, y);
}

function drawOscillations(y, x) {
    circle(0, y, 5); // sin
    circle(x, 0, 5); // cos

}

function drawAxes() {
    stroke("grey")
    line(-w, 0, w, 0)
    line(0, -h, 0, h)
}
