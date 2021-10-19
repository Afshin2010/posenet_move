difference = 0;
rightElbowX = 0;
leftElbowX = 0;
nY= 0;
nX= 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
nX = results[0].pose.nose.x
nY = results[0].pose.nose.y
console.log("nY = " + floor(nY) + " nX = " + floor(nX));

    leftElbowX = results[0].pose.leftElbow.x;
    rightElbowX = results[0].pose.rightElbow.x;
    difference = floor(leftElbowX - rightElbowX);

    console.log("leftWristX  = " + floor(leftElbowX)  + " rightWristX = "+ floor(rightElbowX) + " difference = " + difference);
  }
}

function draw() {
background('#00F800');
 document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
  textSize(difference);
fill('#F80000');
text('Hi!', nX, nY);
}
