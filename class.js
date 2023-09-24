class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    perimeter() {
        return this.sides.reduce((a, b) => a + b, 0);
    }
}

// Contoh penggunaan:
let segitiga = new Polygon([3, 4, 5]);
console.log(segitiga.perimeter()); // Ini akan mencetak keliling segitiga
