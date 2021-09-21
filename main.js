function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    syth = window.speechSynthesis;
}

function preload() {
 
    classifier = ml5.imageClassifier('DoodleNet');
}


function clearCanvas() {

    background("white");
}

function draw() {

    strokeWeight(13);
}

stroke(0);
if (mouseIsPressed) {
  line(pmouseX,pmouseY,pmouseX,pmouseY )
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}