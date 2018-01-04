class Square {
  constructor(length, x = 0, y = 0) {
    this.length = length;
    this.x = x;
    this.y = y;
    this.leftSide = this.x - (this.length / 2);
    this.rightSide = this.x + (this.length / 2);
    this.top = this.y + (this.length / 2);
    this.bottom = this.y - (this.length / 2);
  }

  area() {
    return this.length * this.length;
  }

  perimeter() {
    return this.length * 4;
  }

  contains_point(x,y) {
    return ((x > this.leftSide) && (x < this.rightSide) && (y < this.top) && (y > this.bottom));
  }
}
