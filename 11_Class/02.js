import Rectangle from "./01";

class Square extends Rectangle {
  isSquare() {
    return this.width === this.height;
  }
}
