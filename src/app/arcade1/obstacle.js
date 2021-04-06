//Obstacle.js
export default function Obstacle(p5, x, y, r, color) {
  this.pos = p5.createVector(x, y);
  this.r = r;

  this.render = function() {
    p5.push();
    p5.fill(color);
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.rect(0, 0, this.r, this.r);
    p5.pop();
  }

  this.verticies = function() {
    var obstacleVerticies = [
      this.pos.add(p5.createVector(-this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(-this.r / 2, -this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, -this.r /2), this.pos),
    ]
    return obstacleVerticies;
  }

  
}


// export default function Obstacle {

//   constructor(p5, x, y, w, h) {
//     this.x = x;
// 		this.y = y;
// 		this.size = 2;
// 		this.body = p5.createVector(p5.floor(w/2), p5.floor(h/2));
//   }

//   show(p5) {
//       p5.fill('#C2B280');
// 			p5.stroke(0);
// 			p5.strokeWeight(.1)
//       p5.rect(this.body.x, this.body.y, this.size, this.size);
//   }

// }