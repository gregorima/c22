class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image = loadImage("assets/canon.png")
    this.base = loadImage("assets/cannonBase.png")
  }
  
  show(){
    image(this.base, 70, 20, 200, 200)
    push();
    imageMode(CENTER)
    image(this.image,this.x, this.y, this.width, this.height)
    pop();
  }

}
