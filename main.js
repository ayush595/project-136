status= "";  
  
  function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
  }
  function draw() {
    image(video, 0, 0, 380, 380);
  }
function start() {
  ml5.objectDetector("cocossd", modelLoaded);
}
function modelLoaded() {
  console.log("model just got loaded");
  status= true;
}