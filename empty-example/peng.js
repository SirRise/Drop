function peng() {

  this.y = height-20;
  this.x = width/2;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 16, 25);
    this.head();
  }
  this.head = function() {
    fill(0);
    ellipse(this.x, this.y-5, 8, 12.5);
  }

  this.update = function() {
    if (this.y == 0 || this.y == height || this.x == 0 || this.x == width) {this.y = height-20; this.x = width/2;}
  }

  this.hits = function(thing) {
    return (sq(this.x-thing.x)+sq(this.y-thing.y) <= 100);
  }
}
