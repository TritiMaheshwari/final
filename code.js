var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["14502954-e73c-4023-9087-610f437d3d5a","a787cdf4-436a-4f24-ac95-5685c74c11d8","9d7e618d-3fc9-4209-8b80-0ff0832bf390","b589b419-a0c4-455f-8c93-c99e69bb15c4","f599e235-af12-46c5-8299-9c096e8837dd","655fdaa6-2772-4e2f-96c5-62d89edbf6ce","d9da3bbf-ac5f-4a6b-b0a7-a9b6fa8cce37"],"propsByKey":{"14502954-e73c-4023-9087-610f437d3d5a":{"name":"bg1","sourceUrl":"assets/api/v1/animation-library/gamelab/4phLTHjHz6LTATVviIO56W0iUSonnkZ3/category_backgrounds/texture_12.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"4phLTHjHz6LTATVviIO56W0iUSonnkZ3","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4phLTHjHz6LTATVviIO56W0iUSonnkZ3/category_backgrounds/texture_12.png"},"a787cdf4-436a-4f24-ac95-5685c74c11d8":{"sourceSize":{"x":248,"y":450},"frameSize":{"x":248,"y":450},"frameCount":1,"frameDelay":4,"name":"door img.jpg_1","sourceUrl":"assets/v3/animations/_SXtqObkswA3tLHUQkkA8zRWtWoNOrS8fyB-Ca2XZy8/a787cdf4-436a-4f24-ac95-5685c74c11d8.png","size":13381,"version":"zqO1L5CZhNJSteNWAxWJwAI5k1FGzl4A","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/_SXtqObkswA3tLHUQkkA8zRWtWoNOrS8fyB-Ca2XZy8/a787cdf4-436a-4f24-ac95-5685c74c11d8.png"},"9d7e618d-3fc9-4209-8b80-0ff0832bf390":{"sourceSize":{"x":233,"y":216},"frameSize":{"x":233,"y":216},"frameCount":1,"frameDelay":4,"name":"retry.png_1","sourceUrl":"assets/v3/animations/_SXtqObkswA3tLHUQkkA8zRWtWoNOrS8fyB-Ca2XZy8/9d7e618d-3fc9-4209-8b80-0ff0832bf390.png","size":2626,"version":"xyCiK8qerApVZVFuQXOlpnFJbHxbkLGd","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/_SXtqObkswA3tLHUQkkA8zRWtWoNOrS8fyB-Ca2XZy8/9d7e618d-3fc9-4209-8b80-0ff0832bf390.png"},"b589b419-a0c4-455f-8c93-c99e69bb15c4":{"name":"award_trophy1_1","categories":["video_games"],"frameCount":1,"frameSize":{"x":312,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-03-29 19:33:00 UTC","pngLastModified":"2021-03-29 19:33:00 UTC","version":"qYuvwscvicUp26fkvQOaDTrPjKxv1BlU","sourceUrl":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png","sourceSize":{"x":312,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png"},"f599e235-af12-46c5-8299-9c096e8837dd":{"name":"city_1","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:39:13 UTC","pngLastModified":"2021-01-05 18:39:28 UTC","version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"655fdaa6-2772-4e2f-96c5-62d89edbf6ce":{"name":"cave_1","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:40:01 UTC","pngLastModified":"2021-01-05 18:38:54 UTC","version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"},"d9da3bbf-ac5f-4a6b-b0a7-a9b6fa8cce37":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"lJ03smSsUZIu1wv.dLNsoXcyDiLBnetm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d9da3bbf-ac5f-4a6b-b0a7-a9b6fa8cce37.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END =0;
var gameState = PLAY;
var stage="START";

var player = createSprite(20,380,20,20);
player.tint="blue";
var door = createSprite(390,10,20,20);
door.tint="brown";
var police =createSprite(20,20,20,20);
police.tint="yellow";
var police2=createSprite(200,200,20,20);
police2.tint="yellow";

var OGroup = createGroup();
var guardGroup = createGroup();
//var WGroup = createGroup();

function draw() {
  background("white");
  createEdgeSprites();
  player.bounceOff(edges);
  
  police.bounceOff(edges);
  police2.bounceOff(edges);
  police.addToGroup(guardGroup);
  police2.addToGroup(guardGroup);
  
 
  
  //stage one 
  if (gameState===PLAY && stage==="START"){
  police.visible=false;
  police2.visible=false;
  player.visible=false;
  door.visible=false;
  text("YOU HAVE BEEN TAKEN INTO YOUR ENEMY BASE.",60,200);
  text("USE THE ARROW KEYS TO NAVIGATE YOUR WAY TO ESCAPE.",15,225);
  text("REMEMBER TO NOT GET CAUGHT BY THE GUARDS",60,250);
  text("press F to begin",100,100);
  
  textSize(18);
textFont("Georgia");
  
  if(keyDown("f")){
    stage="STAGE1";
  }
  }
  
  if(stage==="STAGE1"){
    
    player.visible=true;
    police.visible=true;
    police2.visible=true;
    door.visible=true;
  
    
    var o1=createSprite(80,360,10,80);
    var o2=createSprite(30,275,60,10);
    var o3=createSprite(65,145,10,120);
    var o4=createSprite(345,80,120,10);
    var o5=createSprite(185,305,10,190);
    var o6=createSprite(150,140,80,10);
    var o7=createSprite(340,70,10,90);
    var o8=createSprite(200,40,10,90);
    var o9=createSprite(310,240,130,10);
    var o10=createSprite(290,305,10,120);
    var o11=createSprite(140,295,90,10);
    
    Move();
    
    o1.addToGroup(OGroup);
   o2.addToGroup(OGroup);
   o3.addToGroup(OGroup);
   o4.addToGroup(OGroup);
   o5.addToGroup(OGroup);
   o6.addToGroup(OGroup);
   o7.addToGroup(OGroup);
   o8.addToGroup(OGroup);
   o9.addToGroup(OGroup);
   o10.addToGroup(OGroup);
   o11.addToGroup(OGroup);
    
    player.bounceOff(OGroup);
   guardGroup.bounceOff(OGroup);
   /* if(police.displace(player)){
      OGroup.destroyEach();
      police.velocityY=0;
      police.velocityX=0;
      gameState=END;
    }*/
    
    if(guardGroup.isTouching(player)){
     // stage==="CAUGHT";
      gameState=PLAY;
      stage="START";
      
      OGroup.visible=false;
      player.position.x=20;
      player.position.y=380;
      
    }
    
    /*if(stage==="CAUGHT"){
      guardGroup.destroyEach();
      OGroup.destroyEach();
      player.destroy();
      
      //background("");
      text("YOU'VE BEEN CAUGHT!",160,200);
      var retry = createSprite(170,300);
      retry.setAnimation("retry.png");
    }*/
    
    if(player.isTouching(door)){
      stage="STAGE2";
      OGroup.destroyEach();
    }
    /*if(stage==="STAGE2"){
      
      door.destroy();
      police.position.x=20;
      police.position.y=20;
      police2.position.x=380;
      police2.position.y=380;
      police.velocityY=0;
      police.velocityX=0;
      police2.velocityY=0;
      police2.velocityX=0;
      
      var d2 = createSprite(200,200,20,20);
      d2.tint="brown";
      
      var w1 = createSprite(190,160,110,10);
      var w2 = createSprite(240,200,10,80);
      var w3 = createSprite(370,85,80,10);
      var w4 = createSprite(300,65,10,80);
      var w5 = createSprite(185,80,100,10);
      var w6 = createSprite(85,130,10,100);
      var w7 = createSprite(290,130,70,10);
      var w8 = createSprite(255,300,120,10);
      var w9 = createSprite(60,260,10,110);
      var w10 = createSprite(340,195,80,10);
      var w11 = createSprite(140,350,10,90);
      w1.addToGroup(WGroup);
      w2.addToGroup(WGroup);
      w3.addToGroup(WGroup);
      w4.addToGroup(WGroup);
      w5.addToGroup(WGroup);
      w6.addToGroup(WGroup);
      w7.addToGroup(WGroup);
      w8.addToGroup(WGroup);
      w9.addToGroup(WGroup);
      w10.addToGroup(WGroup);
      w11.addToGroup(WGroup);
      
      player.bounceOff(WGroup);
      guardGroup.bounceOff(WGroup);
 
      
    }*/
    
    if(stage==="STAGE2"){
      guardGroup.destroyEach();
      OGroup.destroyEach();
      player.destroy();
      door.destroy();
    
      
      var win = createSprite(200,300,10,10);
      win.setAnimation("award_trophy1_1");
      win.scale=0.4;
       var TEXT = createSprite(200,100,10,10);
      TEXT.setAnimation("animation_1");
      fill("red");
      text("CONGRATULATION! YOU HAVE ESCAPED",100,40);
    }
    
  
  }

  
  drawSprites();

}

function Move(){
   //police random movement
  if(keyDown(UP_ARROW)){
 var rand1=randomNumber(-20,20);
  police.velocityX=rand1;
  police2.velocityX=rand1;
  }
  if(keyDown(DOWN_ARROW)){
    var rand2=randomNumber(-20,20);
    police.velocityY=rand2;
    police2.velocityX=rand2;
  }
  if(keyDown(RIGHT_ARROW)){
    var rand3=randomNumber(-20,20);
    police.velocityX=rand3;
    police.velocityY=rand3;
  }
  if(keyDown(LEFT_ARROW)){
    var rand4=randomNumber(-20,20);
    police.velocityY=rand4;
    police2.velocityY=rand4;
  }
  
  //player controlled movement
  if(keyDown(UP_ARROW)){
    player.position.y = player.position.y-10;
    }
  if(keyDown(DOWN_ARROW)){
    player.position.y = player.position.y+10;
  }
  if(keyDown(LEFT_ARROW)){
    player.position.x = player.position.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    player.position.x = player.position.x+10;
  }
}

  
   

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
