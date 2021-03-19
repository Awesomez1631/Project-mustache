nosex = 0;
nosey = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    //video.center();
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
} 
function modelLoaded() {
     console.log('modelloaded');
     } 
     function gotPoses(results) {
          if (results.length > 0)
           { console.log(results); 
            console.log("nose x = " + results[0].pose.nose.x); 
            console.log("nose y = " + results[0].pose.nose.y); 
            nosex = results[0].pose.nose.x - 40;
             nosey = results[0].pose.nose.y; 
            } 
        } 
        function draw() {
             image(video, 0, 0, 350, 300); 
             image(clown_nose, nosex, nosey, 80, 35);
             } function takesnapshot() {
                  save("Cb.png"); 
                }