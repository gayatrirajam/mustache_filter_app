noseX = 0;
noseY = 0;
function preload(){

}
function setup(){
    canvas=createCanvas(650, 600);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(650, 600)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){

}
function save(){

}
function modelLoaded(){
    console.log("PoseNet is loaded!");
}
function gotPoses(){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);
    }
}
