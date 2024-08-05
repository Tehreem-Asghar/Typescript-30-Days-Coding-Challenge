//second file
export class Circle {
    name;
    area;
    radius;
    constructor(name, radius) {
        (this.name = name), (this.radius = radius);
        this.area = this.calculateArea();
    }
    calculateArea() {
        return Math.floor(Math.PI * this.radius * this.radius);
    }
}
