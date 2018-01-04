class Circle {
  constructor(radius, x = 0, y = 0) {
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  diameter() {
    return this.radius * 2;
  }

  area() {
    return (Math.pow(this.radius, 2)) * Math.PI;
  }

  perimeter() {
    return 2 * (Math.PI * this.radius);
  }
}
