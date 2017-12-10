var peng;
var drops = [];
var lost = "GG we lost!";

function setup() {
  createCanvas(400, 800);
  background(51);
  peng = new peng();
}

function draw() {
  background(51);
  if (random(1) < 0.1) {drops.push(new drop());}
  for (var i = drops.length-1; i >=0; i--) {
    drops[i].update(drops[i].dir);
    drops[i].show();
    if (drops[i].dropped) {drops.splice(i ,1);}
    if (peng.hits(drops[i])) {text(lost, 180, 380, 220, 420); sleep(5);}
  }
  peng.show();
  peng.update();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {peng.y -= 10;}
  else if(keyCode === DOWN_ARROW) {peng.y += 15;}
  else if(keyCode === LEFT_ARROW) {peng.x -= 15;}
  else if(keyCode === RIGHT_ARROW) {peng.x += 15;}

}
