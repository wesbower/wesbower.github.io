
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

function start()  {
  this.oAnim1 = null;
    this.startx = width/2;
    this.starty = 4*height/6;

    this.helpx = width/2
    this.helpy = 5*height/6;

    this.gamex = width/2
    this.gamey = height/3;
    colorMode(RGB);

    this.start = createSprite(this.startx, this.starty);
    this.help = createSprite(this.helpx, this.helpy);
    this.game = createSprite(this.gamex, this.gamey);
    
    var c = color(random(100, 255), random(150, 200), random(0, 175));

  this.setup = function() {
    

   this.start.addAnimation("startbutton", "buttons/start1.png", "buttons/start2.png", "buttons/start3.png");
   this.help.addAnimation("helpbutton", "buttons/help1.png", "buttons/help2.png", "buttons/help3.png", "buttons/help4.png");
   this.game.addAnimation("gamemessage", "buttons/game1.png", "buttons/game2.png", "buttons/game3.png", "buttons/game4.png");
  }

  this.enter = function()
  {

  }



    this.draw = function()
    {
        background(0);
        drawSprite(this.start);
        drawSprite(this.help);
        drawSprite(this.game);
    }

    this.mousePressed = function()
    {

        if (mouseX < ((width/2) + 90) && mouseX > ((width/2) - 90) && mouseY > ((4*height/6)-40) && mouseY < ((4*height/6)+40)){
          this.sceneManager.showScene( intro1 );
        }
        else if (mouseX < ((width/2) + 90) && mouseX > ((width/2) - 90) && mouseY > ((5*height/6)-40) && mouseY < ((5*height/6)+40)){
          this.sceneManager.showScene( help );
        }
        // this.sceneManager.showNextScene();
        
    }
}

function help()  {
  this.oAnim1 = null;
    this.backx = 50;
    this.backy = 50;
    var count = -1;

    var  slideWidth = 100;
    var sliderX = 750;
    var sliderY =  100;

    var vol;

    var w;
    var wx;

    var h;
    var hx;

  this.setup = function(){
    colorMode(RGB);
    w = 200;
    wx = 3;
    h = 0;
    hx = 3;
    this.back = createSprite(this.backx, this.backy);
  }

  this.enter = function(){
    this.back.addAnimation("backbutton", "buttons/back1.png", "buttons/back2.png", "buttons/back3.png", "buttons/back4.png");
    if (count < 3){
      count += 1;
    }
    else {
      count = 0;
    }
  }

  this.draw = function(){
    background(0);
    fill(255, 190, 0);
    textSize(48);
    if (count == 0){
      text("have you tried", w, 2*height/3 + h);
      text("doing it better?", w, 3*height/4 + h);
    }
    else if (count == 1){
      text("click the thing faster.", w, 3*height/4 + h);
    }
    else if (count == 2){;
      text("try clicking the little circle.", w, 2*height/3 + h);
    }
    else{
      text("it would have taken", w, 3*height/5 + h);
      text("so long to draw out", w, 2*height/3 + h);
      text("all these words...", w, 3*height/4 + h);
    }

    w +=  wx;
    if ((w + wx > width - 550) || (w + wx < 20)){
      wx*=-1;
    }

    h +=  hx;
    if ((h + hx > 50) || (h + hx < -50)){
      hx*=-1;
    }

    drawSprite(this.back);


    // fill(0,255,0);
    // ellipse(sliderX,sliderY,40,40);
    }



    this.mousePressed = function(){
    console.log("woot");

    if (mouseX < (90) && mouseX > (0) && mouseY > (0) && mouseY < (90)){
          this.sceneManager.showScene(start);
        }
    //this.sceneManager.showNextScene();
  }

  this.mouseDragged = function(){
    console.log("drag");
    var d2 = dist(mouseX, mouseY, sliderX, sliderY);
      if (d2 < 40 )  {
        this.updateSlider();
      }
    }
  }

  this.updateSlider = function() {
  var slidermin = 20 ;
  var slidermax = 120;
  var sliderX = 750;

  if ( (mouseY > slidermin) && (mouseY < slidermax ) ) {
   sliderY = mouseY;
  }

  vol = map(sliderY,slidermin,slidermax,0,1);
  masterVolume(vol);
  fill(255);
  ellipse(sliderX, sliderY, 40, 40);


  }


function lost()  {

  

  this.oAnim1 = null;
    this.menux = width/2;
    this.menuy = 4*height/5;
    this.lostx = width/2;
    this.losty = 2*height/5;

    colorMode(RGB);
    // important to create object here not in set
    this.menu = createSprite(this.menux, this.menuy);
    this.lost = createSprite(this.lostx, this.losty);
    
    var c = color(random(100, 255), random(150, 200), random(0, 175));

  this.setup = function() {
    

   this.menu.addAnimation("menubutton", "buttons/menu1.png", "buttons/menu2.png", "buttons/menu3.png", "buttons/menu4.png");
   this.lost.addAnimation("lostmessage", "buttons/lost1.png", "buttons/lost2.png", "buttons/lost3.png", "buttons/lost4.png");
  }

  this.enter = function(){

  }



    this.draw = function()
    {
        background(0);
        drawSprite(this.menu);
        drawSprite(this.lost);
    }

    this.mousePressed = function()
    {

        if (mouseX < ((width/2) + 90) && mouseX > ((width/2) - 90) && mouseY > ((4*height/5)-40) && mouseY < ((4*height/5)+40)){
          this.sceneManager.showScene( start );
        }
        // else if (mouseX < ((width/2) + 90) && mouseX > ((width/2) - 90) && mouseY > ((5*height/6)-40) && mouseY < ((5*height/6)+40)){
        //   this.sceneManager.showScene( help );
        // }
        // this.sceneManager.showNextScene();
        
    }
}




function intro1()  {
  this.oAnim1 = null;
    this.level1x = width/2;
    this.level1y = height/3;
    var counter;
    var top;
    var t;

  this.setup = function(){
    colorMode(RGB);
    this.level1 = createSprite(this.level1x, this.level1y);
  }

  this.enter = function(){
    this.level1.addAnimation("level1", "buttons/level1.1.png", "buttons/level1.2.png", "buttons/level1.3.png");
    counter = millis();
    top = counter += 1500;
  }

  this.draw = function(){
    background(0);
    drawSprite(this.level1);

    counter = millis();
    t = top - counter;

    l = map(t, 0, 1500, 0, 300);
    noStroke();
    fill(0, 170, 170);
    rect((width/2)-150, height/2, l, 2);

    if (t < 0){
      this.sceneManager.showScene(scene1);
    }
  }

  this.mousePressed = function(){
    //this.sceneManager.showNextScene();
  }
}
////////////////////////////// 1 /////////////////
function scene1()  {
    colorMode(RGB);
    // important to create object here not in set
    
    var c = color(random(100, 255), random(0, 50), random(0, 175));
    var c2 = color(random(0, 100), random(150, 255), random(175, 255));
    var x;
    var y;
    var di;

    var counter;
    var top;
    var t;

  this.setup = function() {
    
    x = random(20, width - 20);
    y = random(20, height - 20);
    di = 40;
  }

  this.enter = function()
  {
    x = random(20, width - 20);
    y = random(20, height - 20);

    counter = millis();
    top = counter += 1500;
  }



    this.draw = function()
    {
      background(c);
      noStroke();
      fill(c2);
      ellipse(x, y, di, di);

      counter = millis();
      t = top - counter;

      textSize(20);
      text(nf(t/1000, 1, 2), width-40, 20);

      l = map(t, 0, 1500, 0, 40);
      noStroke();
      fill(c2);
      rect(width-42, 30, l, 2);
      
      if (t < 0){
        this.sceneManager.showScene(lost);
      }
    }

    this.mousePressed = function()
    {
        if (dist(mouseX, mouseY, x, y) < di/2){
          this.sceneManager.showScene(thumb1);
        }
        //this.sceneManager.showNextScene();
        
    }





}


function intro2()  {
  this.oAnim1 = null;
    this.level2x = width/2;
    this.level2y = height/3;
    var counter;
    var top;
    var t;

  this.setup = function(){
    colorMode(RGB);
    this.level2 = createSprite(this.level2x, this.level2y);
  }

  this.enter = function(){
    this.level2.addAnimation("level2", "buttons/level2.1.png", "buttons/level2.2.png", "buttons/level2.3.png");
    counter = millis();
    top = counter += 1500;
  }

  this.draw = function(){
    background(0);
    drawSprite(this.level2);

    counter = millis();
    t = top - counter;

    l = map(t, 0, 1500, 0, 300);
    noStroke();
    fill(0, 170, 170);
    rect((width/2)-150, height/2, l, 2);

    if (t < 0){
      this.sceneManager.showScene(scene2);
    }
  }

  this.mousePressed = function(){
    //this.sceneManager.showNextScene();
  }
}

///////////////////////  2  ////////////////////////

function scene2()  {
    colorMode(RGB);
    // important to create object here not in set
    
    var r = random(0, 100);
    var g = random(130, 255);
    var b = random(50, 140);
    var c = color(r, g, b);
    var c2 = color(r, g, b - 7);
    var x;
    var y;
    var di;

    var counter;
    var top;
    var t;

  this.setup = function() {
    
    x = random(20, width - 20);
    y = random(20, height - 20);
    di = 40;
  }

  this.enter = function()
  {
    x = random(20, width - 20);
    y = random(20, height - 20);

    counter = millis();
    top = counter += 3000;
  }



    this.draw = function()
    {
      background(c);
      noStroke();
      fill(c2);
      ellipse(x, y, di, di);

      counter = millis();
      t = top - counter;

      fill(255, 255, 0);
      textSize(20);
      text(nf(t/1000, 1, 2), width-40, 20);

      l = map(t, 0, 3000, 0, 40);
      noStroke();
      fill(255, 255, 0);
      rect(width-42, 30, l, 2);
      
      if (t < 0){
        this.sceneManager.showScene(lost);
      }
    }

    this.mousePressed = function()
    {
        if (dist(mouseX, mouseY, x, y) < di/2){
          this.sceneManager.showScene(thumb2);
        }
        //this.sceneManager.showNextScene();



  }

}


function intro3()  {
  this.oAnim1 = null;
    this.level3x = width/2;
    this.level3y = height/3;
    var counter;
    var top;
    var t;

  this.setup = function(){
    colorMode(RGB);
    this.level3 = createSprite(this.level3x, this.level3y);
  }

  this.enter = function(){
    this.level3.addAnimation("level3", "buttons/level3.1.png", "buttons/level3.2.png", "buttons/level3.3.png");
    counter = millis();
    top = counter += 1500;
  }

  this.draw = function(){
    background(0);
    drawSprite(this.level3);

    counter = millis();
    t = top - counter;

    l = map(t, 0, 1500, 0, 300);
    noStroke();
    fill(255, 102, 51);
    rect((width/2)-150, height/2, l, 2);

    if (t < 0){
      this.sceneManager.showScene(scene3);
    }
  }

  this.mousePressed = function(){
    //this.sceneManager.showNextScene();
  }
}


////////////////////////////// 3 /////////////////

function scene3() {
    var crowd;
    var bass;
    var hum;
    colorMode(RGB);
  
    // important to create object here not in set
    
    var r = random(200, 255);
    var g = random(200, 255);
    var b = random(50, 150);
    var c = color(r, g, b);
    var c2 = color(r-2, g-2, b);
    var x;
    var y;
    var di;

    var counter;
    var top;
    var t;

    var dis;
    var vol;
    crowd = loadSound("buttons/crowd.wav");
    hum = loadSound("buttons/hum.wav");
    bass = loadSound("buttons/bass.wav");

    this.setup = function() {
    
    x = random(20, width - 20);
    y = random(20, height - 20);
    di = 60;
  }
      
  this.enter = function()
  {

    x = random(20, width - 20);
    y = random(20, height - 20);

    counter = millis();
    top = counter += 7000;
  }



    this.draw = function()
    {
      dis = dist(mouseX, mouseY, x, y);
      vol = map(dis, 0, 600, 1, 0);

      crowd.amp(vol);
      bass.amp(vol);
      hum.amp(vol);
      masterVolume(vol);

      if ( !crowd.isPlaying() ) {
        crowd.play();
      }
      if ( !bass.isPlaying() ) {
        bass.play();
      }
      if ( !hum.isPlaying() ) {
        hum.play();
      }

      background(c);
      noStroke();
      fill(c2);
      ellipse(x, y, di, di);

      counter = millis();
      t = top - counter;

      fill(255, 0, 255);
      textSize(20);
      text(nf(t/1000, 1, 2), width-40, 20);

      l = map(t, 0, 7000, 0, 40);
      noStroke();
      fill(255, 0, 255);
      rect(width-42, 30, l, 2);
      
      if (t < 0){
        if ( crowd.isPlaying() ) {
          crowd.pause();
        }
        if ( bass.isPlaying() ) {
          bass.pause();
        }
        if ( hum.isPlaying() ) {
          hum.pause();
        }

        this.sceneManager.showScene(lost);
      }
    }

    this.mousePressed = function()
    {

        if (dist(mouseX, mouseY, x, y) < di/2){
          if ( crowd.isPlaying() ) {
            crowd.pause();
          }
          if ( bass.isPlaying() ) {
            bass.pause();
          }
          if ( hum.isPlaying() ) {
            hum.pause();
          }
          this.sceneManager.showScene(won);
        }
        //this.sceneManager.showNextScene();



  }

}

function won(){
   this.oAnim1 = null;
    this.wonx = width/2;
    this.wony = 2*height/5;

    this.menux = width/2
    this.menuy = 4*height/5;
    colorMode(RGB);
    // important to create object here not in set
    this.won = createSprite(this.wonx, this.wony);
    this.menu = createSprite(this.menux, this.menuy);
    
    var c = color(random(100, 255), random(150, 200), random(0, 175));

  this.setup = function() {
    
      console.log("congrats!");

   this.won.addAnimation("wonmessage", "buttons/won1.png", "buttons/won2.png", "buttons/won3.png", "buttons/won4.png");
   this.menu.addAnimation("menubutton", "buttons/menu1.png", "buttons/menu2.png", "buttons/menu3.png", "buttons/menu4.png");
  }

  this.enter = function()
  {
      
  }



    this.draw = function()
    {
        background(0);
        drawSprite(this.won);
        drawSprite(this.menu);
    }

    this.mousePressed = function()
    {

        // if (mouseX < ((width/2) + 90) && mouseX > ((width/2) - 90) && mouseY > ((3*height/5)-40) && mouseY < ((3*height/5)+40)){
        //   this.sceneManager.showScene( intro1 );
        // }
        if (mouseX < ((width/2) + 90) && mouseX > ((width/2) - 90) && mouseY > ((5*height/6)-40) && mouseY < ((5*height/6)+40)){
          this.sceneManager.showScene( start );
        }
        // this.sceneManager.showNextScene();
        
    }
}

function thumb1(){
    this.oAnim1 = null;
    this.thumb1x = width/2;
    this.thumb1y = height/2;
    var counter;
    var top;
    var t;

  this.setup = function(){
    colorMode(RGB);
    this.thumb1 = createSprite(this.thumb1x, this.thumb1y);
  }

  this.enter = function(){
    this.thumb1.addAnimation("thumb1", "buttons/thumb1.1.png", "buttons/thumb1.2.png", "buttons/thumb1.3.png");
    counter = millis();
    top = counter += 1500;
  }

  this.draw = function(){
    background(0);
    drawSprite(this.thumb1);

    counter = millis();
    t = top - counter;

    // l = map(t, 0, 1500, 0, 300);
    // noStroke();
    // fill(255, 102, 51);
    // rect((width/2)-150, height/2, l, 2);

    if (t < 0){
      this.sceneManager.showScene(intro2);
    }
  }

  this.mousePressed = function(){
    //this.sceneManager.showNextScene();
  }
}

function thumb2(){
   this.oAnim1 = null;
    this.thumb2x = width/2;
    this.thumb2y = height/2;
    var counter;
    var top;
    var t;

  this.setup = function(){
    colorMode(RGB);
    this.thumb2 = createSprite(this.thumb2x, this.thumb2y);
  }

  this.enter = function(){
    this.thumb2.addAnimation("thumb2", "buttons/thumb2.1.png", "buttons/thumb2.2.png", "buttons/thumb2.3.png");
    counter = millis();
    top = counter += 1500;
  }

  this.draw = function(){
    background(0);
    drawSprite(this.thumb2);

    counter = millis();
    t = top - counter;

    // l = map(t, 0, 1500, 0, 300);
    // noStroke();
    // fill(255, 102, 51);
    // rect((width/2)-150, height/2, l, 2);

    if (t < 0){
      this.sceneManager.showScene(intro3);
    }
  }

  this.mousePressed = function(){
    //this.sceneManager.showNextScene();
  }
}