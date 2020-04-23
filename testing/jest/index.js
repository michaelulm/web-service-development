"use strict";

const throwsError = () => {
  throw Error("this is an error");
};

const asyncResponse = async () => {
  return Promise.resolve(true);
};

const condition = (yes) => {
  if (yes) {
    return "this is true";
  } else {
    return -1;
  }
};

class Point {
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }

  distance(otherPoint) {
    if (!otherPoint) otherPoint = new Point();
    if (!(otherPoint instanceof Point)) throw Error("invalid type");

    const dx = Math.abs(this._x - otherPoint._x);
    const dy = Math.abs(this._y - otherPoint._y);

    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }
}


module.exports = { asyncResponse, condition, Point, throwsError };
