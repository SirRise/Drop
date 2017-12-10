function drop() {

  this.y = 0;
  this.x = random(0, width);
  var dir = random(5, 20);
  var dropped = false;

  this.show = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 10, 10);
  }

  this.update = function() {
    this.y += dir;
    if (this.y == height) {this.dropped = true;}
  }

}
