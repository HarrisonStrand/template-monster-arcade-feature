import * as p5 from "p5";
import { lineIntersect } from "./utilities";

export default function Venom(p5, x, y) {
  this.x = x;
  this.y = y;
  this.r = 1;
  this.toDelete = false;

  this.show = function (p5) {
    p5.push();
    p5.noStroke();
    p5.fill("blue");
    p5.ellipse(this.x, this.y, this.r, this.r);
    p5.pop();
  };

  this.setDir = function (x, y) {
    this.xdir = x;
    this.ydir = y;
  };

  this.update = function () {
    let head = this.r;
    head.x += this.xdir*10;
    head.y += this.ydir*10;
  };

  // this.update = function() {
  //   this.pos.add(this.vel);
  // }

  this.dissipate = function () {
    this.toDelete = true;
  };

  // this.hits = function (enemy) {
  //   var d = dist(this.x, this.y, enemy.x, enemy.y);
  //   if (d < this.r + enemy.r) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // this.move = function () {
  //   this.y - 5;
  // };
}

// OPTION 2:

// export default function Venom(p5, spos) {
//   this.pos = p5.createVector(spos.x, spos.y);

//   this.update = function () {
//     this.pos.add(this.vel);
//   };

//   this.render = function () {
//     push();
//     stroke("red");
//     strokeWeight(4);
//     point(this.pos.x, this.pos.y);
//     pop();
//   };

//   // this.hits = function (enemy) {
//   //   var d = dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y);
//   //   if (d < enemy.r) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // };

//   this.offscreen = function () {
//     if (this.pos.x > width || this.pos.x < 0) {
//       return true;
//     }
//     if (this.pos.y > height || this.pos.y < 0) {
//       return true;
//     }
//     return false;
//   };
// }
