var rightx=0;
var righty=0;
var leftx=0;
var lefty=0;
leftWristscore=0;
rightWristscore=0;
function setup(){
canvas=createCanvas(600,500);
canvas.position(500,200);
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("black");

if(rightWristscore>0.2){
    circle(rightx,righty,20);
    if(righty>0 && righty<=100){
document.getElementById("speed").innerHTML="Speed =0.5x";
song.rate(0.5);
    }
    if(righty>100 && righty<=200){
        document.getElementById("speed").innerHTML="Speed =1x";
        song.rate(1);
            }
            if(righty>200 && righty<=300){
                document.getElementById("speed").innerHTML="Speed =1.5x";
                song.rate(1.5);
                    }
                    if(righty>300 && righty<=400){
                        document.getElementById("speed").innerHTML="Speed =2x";
                        song.rate(2);
                            }
                            if(righty>400 && righty<=500){
                                document.getElementById("speed").innerHTML="Speed =2.5x";
                                song.rate(2.5);
                                    }
}
    


    if(leftWristscore>0.2){
   circle(leftx,lefty,20);
   leftynumber=Number(lefty);
   rounder=floor(leftynumber);
   volume=rounder/500;
   document.getElementById("volume").innerHTML="volume= "+volume;
   song.setVolume(volume);
    }
}
song="";
function preload(){
    song=loadSound("ben.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("posenet is working");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    rightWristscore=results[0].pose.keypoints[10].score;
    leftWristscore=results[0].pose.keypoints[9].score;
leftx=results[0].pose.leftWrist.x;
lefty=results[0].pose.leftWrist.y;
rightx=results[0].pose.rightWrist.x;
righty=results[0].pose.rightWrist.y;
}
}