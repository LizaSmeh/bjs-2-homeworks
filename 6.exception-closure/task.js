function parseCount(numberUnits) {
	let namberParse = Number.parseFloat(numberUnits);
	if (isNaN(namberParse)) {
		throw new Error("Невалидное значение");
	}
	return namberParse;
}

function validateCount(newNamberUnits) {
	try {
		return parseCount(newNamberUnits);
	} catch (error) {
		return error;
	}

}

class Triangle {
    constructor(sideA, sideB, sideC) {
      if ( (sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideA + sideC) < sideB) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
    get perimeter() {
      return (this.sideA + this.sideB + this.sideC);
    }
    get area() {
      let halfPerimetr = 0.5 * this.perimeter ;
      return Number(Math.sqrt(halfPerimetr * (halfPerimetr - this.sideA) * (halfPerimetr - this.sideB) * (halfPerimetr - this.sideC)).toFixed(3));
    }
  }
  
  function getTriangle(sideA, sideB, sideC) {
    try {
      return new Triangle(sideA, sideB, sideC);
    } catch(error) {
        return {
          get perimeter() {
            return "Ошибка! Треугольник не существует";
          },
          get area() {
            return "Ошибка! Треугольник не существует";
          }
        }
    }
  }

