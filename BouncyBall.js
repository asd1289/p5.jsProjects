var x = 50;
var y = 50;
var changeX = 5;
var changeY = 0.5;
var changeS = 0.01;

function setup() {
    createCanvas(640, 400);
    //translate(width/2, height/2);
}

function draw() {
    background(0);
    stroke(255, 100, 0);
    fill(255); //map(sin(changeX), -1, 1, 150, 0), 0,  map(sin(changeX), -1, 1, 0, 255));
    ellipse(x, y, 10, 10);//map(sin(changeS), -1, 1, 0, width/2), map(sin(changeS), -1, 1, 0, width/2));
    //changeS += 0.02;
    x += changeX;
    y += changeY;
    if (x > width || x < 0){
	fill(255, 0, 0);
	ellipse(x, y, 80, 80);
	changeX = -changeX;
    }
    if (y > height || y < 0){
	fill(255, 0, 0);
	ellipse(x, y, 80, 80);
	changeY = -changeY;
    }

}