export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  lados: number[];

  constructor(
    public color: string,
    a: number,
    b: number,
    c: number,
  ) {
    this.lados = [a, b, c];

    const sorted = [...this.lados].sort(
      (numberA, numberB) => numberB - numberA,
    );

    if (this.lados[0] <= 0 || this.lados[1] <= 0 || this.lados[2] <= 0) {
      throw new Error('Error, the side was expected to be greater than zero.');
    } else if (sorted[0] >= sorted[1] + sorted[2]) {
      throw new Error(
        'Error, the triangle has one side that' +
          'is longer than the sum of the other two sides.',
      );
    }
  }

  getArea(): number {
    // 3, 4, 5 // 10, 12, 15
    const smp = this.lados.reduce((sum, n) => sum + n, 0) / 2; // 6 // 18,5
    const area = Math.sqrt(
      smp *
        (smp - this.lados[0]) *
        (smp - this.lados[1]) *
        (smp - this.lados[2]),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error, the radius is less than or equal to zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error, the side was expected to be greater than zero.');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
