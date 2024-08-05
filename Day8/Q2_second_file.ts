//second file

import { Shape } from "./Q2_First_file.js";

export class Circle implements Shape {
  name: string;
  area: number;
  radius: number;
  constructor(name: string, radius: number) {
    (this.name = name), (this.radius = radius);
    this.area = this.calculateArea();
  }
  calculateArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius);
  }
}
