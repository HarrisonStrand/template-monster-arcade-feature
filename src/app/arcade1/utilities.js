import * as p5 from 'p5'

function cross(v1, v2) {
  return v1.x * v2.y - v2.x * v1.y;
}

export const lineIntersect = (l1v1, l1v2, l2v1, l2v2) => {
  let base = p5.Vector.sub(l1v1, l2v1);
  let l1_vector = p5.Vector.sub(l1v2, l1v1);
  let l2_vector = p5.Vector.sub(l2v2, l2v1);
  let direction_cross = cross(l2_vector, l1_vector);

  let t = cross(base, l1_vector) / direction_cross;
  let u = cross(base, l2_vector) / direction_cross;
  if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
    return true;
  } else {
    return false
  }
}