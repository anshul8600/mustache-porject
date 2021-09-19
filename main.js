noseX = 0;
noseY = 0;

function setup(){
    c1 = createCanvas(700,550)
    c1.center()
    v1 = createCapture(VIDEO)
    v1.hide()
    pn = ml5.poseNet(v1, modelLoaded);
    pn.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet has loaded");
}

function gotPoses(results){
if(results.length > 0){
    noseX = results[0].pose.nose.x + 15;
    noseY = results[0].pose.nose.y + 50; 
    console.log("noseX = " + noseX + "noseY = " + noseY);
}



}

function draw(){
image (v1, 0, 0, 700, 550)
image(i1, noseX, noseY, 70, 50)

}

function takephoto(){
save ("mustachey.png")



}

function preload(){
    i1 = loadImage("https://i.postimg.cc/Ss1KjrS3/mustachey.png")
}
