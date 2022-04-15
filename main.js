Status = ""
load = ""
objects = []
function setup(){
    Canvas=createCanvas(380,380)
    Canvas.center()
    video= createCapture(VIDEO)
    video.size(380,380)
    video.hide()
    objectDetector =ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("detectionkeliyeid").innerHTML="Status: Detecting Object"
    
}
function modelloaded(){
console.log("modelLoaded")
Status = true
}


function gotresult(error,result){
if (error){
    console.error(error)
}
console.log(result)
object = result
}

function preload(){
   load= loadImage("dog_cat.jpg")
}
function draw(){
image(video,0,0,380,380)

if(Status!= ""){
    r=random(255)
    g=random(255)
    b=random(255)
    objectDetector.detect(video,gotResult())
for(i=0;i<object.length;i++){
    document.getElementById("detectionkeliyeid").innerHTML = "Status: detecting objects"
    document.getElementById("blablabla").innerHTML = "Number of objects detected are :"+objects.length()
    fill(r,g,b)
    automatic = floor(object[i].confidence*100)
    text(object[i].label+""+automatic+"%",object[i].x,object[i].y)
    noFill()
    stroke(r,g,b)
    rect(object[i].x,object[i].y,object[i].width,object[i].height)

}

}
}