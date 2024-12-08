function calculateDeliveryTime(houses, speed) {

  // Atstumo tarp 2 taškų formulė: d=√[(x2-x1)^2+(y2-y1)^2]:
  function canculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2-x1) ** 2 +(y2-y1) ** 2);
  }

  // Pradiniai kintamieji:
  let totalDistance = 0, currentX = 0, currentY = 0;

  // Apskaičiuojam atstumą nuo pradinio taško iki kito iš eilės:
  for (let house of houses) {
    const [houseX, houseY] = house;
    totalDistance += canculateDistance(currentX, currentY, houseX, houseY);
    currentX = houseX;
    currentY = houseY;
  }

  // Grįžimo į pradinę padėtį apskaičiavimas:
  totalDistance += canculateDistance(currentX, currentY, 0, 0);

  // Laiko apskaičiavimas:
  const totalTime = totalDistance / speed;

  // Paverčiam gautą skaičių į valandas ir minutes:
  // Math.floor() paima sveiką skaičiaus dalį:
  const hours = Math.floor(totalTime);
  // Likusią skaičiaus dalį paverčiam į minutes:
  const minutes = Math.round((totalTime - hours) * 60);

  return `${hours} hour(s) and ${minutes} minute(s)`;
}

const houses = [[1, 2], [3, 4], [5, 6]];
const speed = 10;
console.log(calculateDeliveryTime(houses, speed));