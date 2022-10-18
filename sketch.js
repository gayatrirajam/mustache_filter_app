noseX=0;
noseY=0;
function preload(){
    link = loadImage('https://th.bing.com/th/id/R.ab1ab4c8e3cc78f815893d48495aeacd?rik=MS5ExVH53%2byHsg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fmustache-transparent-png%2fmustache-transparent-png-4.png&ehk=ykTdznjWeuA33ao0NePZFjkycKrlN2LSK9bRmtxU2qo%3d&risl=&pid=ImgRaw&r=0');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(link, noseX, noseY, 50, 30);
}
function modelLoaded(){
    console.log("Posenet is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x - 25;
        noseY=results[0].pose.nose.y + 3;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);
    }
}
function take_snapshot(){
    save('myMustacheFilterImage.png');
}
