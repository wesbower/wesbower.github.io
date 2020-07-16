
// manager stuff
var mgr;
var crowd;
function preload() {
    crowd = loadSound("buttons/crowd.wav");
  }
function setup() {
    createCanvas(800, 600);
    colorMode(RGB);
    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (start);
    mgr.addScene (help);
    mgr.addScene (lost);

    mgr.addScene (thumb1);
    mgr.addScene (thumb2);

    mgr.addScene (intro1);
    mgr.addScene (scene1);

    mgr.addScene (intro2);
    mgr.addScene (scene2);

    mgr.addScene (intro3);
    mgr.addScene (scene3);

    mgr.addScene (won);

    mgr.showNextScene();
}

function draw()
{
    mgr.draw();
}

function mousePressed()
{
    mgr.mousePressed();
}

function mouseDragged(){
    this.updateSlider();
    console.log("drag");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( start );
            break;
        case '2':
            mgr.showScene( thumb );
            break;
        case '3':
            mgr.showScene( intro1 );
            break;
        case '4':
            mgr.showScene( scene1 );
            break;
        case '5':
            mgr.showScene( intro2 );
            break;
        case '6':
            mgr.showScene( scene2 );
            break;
        case '7':
            mgr.showScene( intro3 );
            break;
        case '8':
            mgr.showScene( scene3 );
            break;
        case '9':
            mgr.showScene( lost );
            break;
        case '0':
            mgr.showScene( won );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
