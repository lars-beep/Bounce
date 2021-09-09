var x = [50,100,150,200,250];
var y = [50,100,150,200,250];
var speedY = [10,20,30,40,50];
var speedX = [50,40,30,20,10];
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  // stel vulkleur in
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x[0],y[0],80,80);
  ellipse(x[1],y[1],80,80);
  ellipse(x[2],y[2],80,80);
  ellipse(x[3],y[3],80,80);
  ellipse(x[4],y[4],80,80);

  x[0] = x[0] + speedX[0];
  x[1] = x[1] + speedX[1];
  x[2] = x[2] + speedX[2];
  x[3] = x[3] + speedX[3];
  x[4] = x[4] + speedX[4];

  y[0] = y[0] + speedY[0];
  y[1] = y[1] + speedY[1];
  y[2] = y[2] + speedY[2];
  y[3] = y[3] + speedY[3];
  y[4] = y[4] + speedY[4];

//bal 1
 if (y[0] > 720 ) {
   speedY[0] = speedY[0] * -1;
 }

 if(y[0] < 0 ) {
   speedY[0] = speedY[0] * -1;
 }

 if(x[0] < 0 ) {
   speedX[0] = speedX[0] * -1;
 }

 if(x[0] > 1280) {
   speedX[0] = speedX[0] * -1;
 }



 //bal 2
if (y[1] > 720 ) {
  speedY[1] = speedY[1] * -1;
}

if(y[1] < 0 ) {
  speedY[1] = speedY[1] * -1;
}

if(x[1] < 0 ) {
  speedX[1] = speedX[1] * -1;
}

if(x[1] > 1280) {
  speedX[1] = speedX[1] * -1;
}


//bal 3
if (y[2] > 720 ) {
  speedY[2] = speedY[2] * -1;
}

if(y[2] < 0 ) {
  speedY[2] = speedY[2] * -1;
}

if(x[2] < 0 ) {
  speedX[2] = speedX[2] * -1;
}

if(x[2] > 1280) {
  speedX[2] = speedX[2] * -1;
}


//bal 4
if (y[3] > 720 ) {
  speedY[3] = speedY[3] * -1;
}

if(y[3] < 0 ) {
  speedY[3] = speedY[3] * -1;
}

if(x[3] < 0 ) {
  speedX[3] = speedX[3] * -1;
}

if(x[3] > 1280) {
  speedX[3] = speedX[3] * -1;
}


//bal 5
if (y[4] > 720 ) {
  speedY[4] = speedY[4] * -1;
}

if(y[4] < 0 ) {
  speedY[4] = speedY[4] * -1;
}

if(x[4] < 0 ) {
  speedX[4] = speedX[4] * -1;
}

if(x[4] > 1280) {
  speedX[4] = speedX[4] * -1;
}
}