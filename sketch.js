noseX = 0;
noseY = 0;
playerX = 0;
playerY = 0;
diamondX = Math.floor(Math.random()*1200);
var fireworks = "";
found = false;
function preload() {
    bg = loadImage("background.jpg");
    player = loadImage("player.png");
    grass = loadImage("Grass.jpg");
    stone = loadImage("Stone.png");
    planks = loadImage("Wood.png");
    wood = loadImage("WoodLog.png");
    leaves = loadImage("leaves.png");
    bedrock = loadImage("Bedrock.png");
    diamond = loadImage("diamond.jpg");
    fireworks = loadSound("fireworks_minecraft.mp3");
}
function setup() {
    canvas = createCanvas(1280, 720);

    video = createCapture(VIDEO);
    video.size(1280, 720);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw() {
    playerX = noseX - 160;
    playerY = noseY - 200;
    genWorld();
    image(player, playerX, playerY, 80, 160); 
    fill("white");
    text("X="+playerX+" Y="+playerY,10,10);
    if(playerX>diamondX && playerX<diamondX+80 && playerY>400 && playerY<480 || found == true){
        diamondFound();
    }
}

function modelLoaded(){
    console.log("Loaded AI model");
  }
  
  function gotPoses(results){
    if (results.length > 0){
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
    }
  }

function genWorld() {
    image(bg,0,0,1280,720);
    grass1 = image(grass, 0, 160, 80, 80);
    grass2 = image(grass, 80, 160, 80, 80);
    grass3 = image(grass, 160, 240, 80, 80);
    grass4 = image(grass, 240, 320, 80, 80);
    grass5 = image(grass, 320, 320, 80, 80);
    grass6 = image(grass, 400, 320, 80, 80);
    grass7 = image(grass, 480, 400, 80, 80);
    grass8 = image(grass, 560, 400, 80, 80);
    grass9 = image(grass, 640, 320, 80, 80);
    grass10 = image(grass, 720, 320, 80, 80);
    grass11 = image(grass, 800, 320, 80, 80);
    grass12 = image(grass, 880, 320, 80, 80);
    grass13 = image(grass, 960, 320, 80, 80);
    grass14 = image(grass, 1040, 240, 80, 80);
    grass15 = image(grass, 1120, 240, 80, 80);
    grass16 = image(grass, 1200, 240, 80, 80);
    console.log("Grass generated - 16");
    stone1 = image(stone, 0, 240, 80, 80);
    stone2 = image(stone, 0, 320, 80, 80);
    stone3 = image(stone, 0, 400, 80, 80);
    stone4 = image(stone, 0, 480, 80, 80);
    stone5 = image(stone, 0, 560, 80, 80);
    stone6 = image(stone, 80, 240, 80, 80);
    stone7 = image(stone, 80, 320, 80, 80);
    stone8 = image(stone, 80, 400, 80, 80);
    stone9 = image(stone, 80, 480, 80, 80);
    stone10 = image(stone, 80, 560, 80, 80);
    stone11 = image(stone, 160, 320, 80, 80);
    stone12 = image(stone, 160, 400, 80, 80);
    stone13 = image(stone, 160, 480, 80, 80);
    stone14 = image(stone, 160, 560, 80, 80);
    stone15 = image(stone, 240, 400, 80, 80);
    stone16 = image(stone, 240, 480, 80, 80);
    stone17 = image(stone, 240, 560, 80, 80);
    stone18 = image(stone, 320, 400, 80, 80);
    stone19 = image(stone, 320, 480, 80, 80);
    stone20 = image(stone, 320, 560, 80, 80);
    stone21 = image(stone, 400, 400, 80, 80);
    stone22 = image(stone, 400, 480, 80, 80);
    stone23 = image(stone, 400, 560, 80, 80);
    stone24 = image(stone, 480, 480, 80, 80);
    stone25 = image(stone, 480, 560, 80, 80);
    stone26 = image(stone, 560, 480, 80, 80);
    stone27 = image(stone, 560, 560, 80, 80);
    stone28 = image(stone, 640, 400, 80, 80);
    stone29 = image(stone, 640, 480, 80, 80);
    stone30 = image(stone, 640, 560, 80, 80);
    stone31 = image(stone, 720, 400, 80, 80);
    stone32 = image(stone, 720, 480, 80, 80);
    stone33 = image(stone, 720, 560, 80, 80);
    stone34 = image(stone, 800, 400, 80, 80);
    stone35 = image(stone, 800, 480, 80, 80);
    stone36 = image(stone, 800, 560, 80, 80);
    stone37 = image(stone, 880, 400, 80, 80);
    stone38 = image(stone, 880, 480, 80, 80);
    stone39 = image(stone, 880, 560, 80, 80);
    stone40 = image(stone, 960, 400, 80, 80);
    stone41 = image(stone, 960, 480, 80, 80);
    stone42 = image(stone, 960, 560, 80, 80);
    stone43 = image(stone, 1040, 320, 80, 80);
    stone44 = image(stone, 1040, 400, 80, 80);
    stone45 = image(stone, 1040, 480, 80, 80);
    stone46 = image(stone, 1040, 560, 80, 80);
    stone47 = image(stone, 1120, 320, 80, 80);
    stone48 = image(stone, 1120, 400, 80, 80);
    stone49 = image(stone, 1120, 480, 80, 80);
    stone50 = image(stone, 1120, 560, 80, 80);
    stone51 = image(stone, 1200, 320, 80, 80);
    stone52 = image(stone, 1200, 400, 80, 80);
    stone53 = image(stone, 1200, 480, 80, 80);
    stone54 = image(stone, 1200, 560, 80, 80);
    console.log("Stone generated - 54");
    wood1 = image(wood, 720, 240, 80, 80);
    wood2 = image(wood, 720, 160, 80, 80);
    leaves1 = image(leaves, 720, 80, 80, 80);
    leaves2 = image(leaves, 720, 0, 80, 80);
    leaves3 = image(leaves, 640, 80, 80, 80);
    leaves4 = image(leaves, 800, 80, 80, 80);
    console.log("Tree generated");
    bedrock1 = image(bedrock, 0, 640, 80, 80);
    bedrock2 = image(bedrock, 80, 640, 80, 80);
    bedrock3 = image(bedrock, 160, 640, 80, 80);
    bedrock4 = image(bedrock, 240, 640, 80, 80);
    bedrock5 = image(bedrock, 320, 640, 80, 80);
    bedrock6 = image(bedrock, 400, 640, 80, 80);
    bedrock7 = image(bedrock, 480, 640, 80, 80);
    bedrock8 = image(bedrock, 560, 640, 80, 80);
    bedrock9 = image(bedrock, 640, 640, 80, 80);
    bedrock10 = image(bedrock, 720, 640, 80, 80);
    bedrock11 = image(bedrock, 800, 640, 80, 80);
    bedrock12 = image(bedrock, 880, 640, 80, 80);
    bedrock13 = image(bedrock, 960, 640, 80, 80);
    bedrock14 = image(bedrock, 1040, 640, 80, 80);
    bedrock15 = image(bedrock, 1120, 640, 80, 80);
    bedrock16 = image(bedrock, 1200, 640, 80, 80);
    console.log("Bedrock generated - 16");
}
function diamondFound(){
  if (found == false){
    play();
  }
found = true;
image(diamond,diamondX,480,80,80);
text("Diamond Found!",10,20);
}
function play(){
  fireworks.play();
}