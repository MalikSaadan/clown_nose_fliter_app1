noseX=0
noseY=0
function preload(){
clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
    canvas=createCanvas(350,300)
    canvas.center()
    img=createCapture(VIDEO)
    img.size(350,300)
    img.hide()
    posenet=ml5.poseNet(img,model_loaded)
    posenet.on('pose',got_poses)
}
function takesnapshot(){
    save("my_picture.png")
}

function draw(){
    image(img,0,0,350,300)
    //fill("red");
    //stroke("blue");
    //circle(noseX,noseY,20)
    image(clown_nose,noseX,noseY,30,30)
}
function model_loaded(){
    console.log("model_loaded")
}
function got_poses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x-10
        noseY=results[0].pose.nose.y-10
    }
}
