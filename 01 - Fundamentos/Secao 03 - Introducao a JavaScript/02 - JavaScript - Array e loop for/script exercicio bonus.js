let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiply = [];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);


for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index <= numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex <= index + 1; secondIndex += 1) {
    if (numbers[secondIndex] === numbers[index - 1]) {
      if (index < numbers.length){
        numbersMultiply.push(numbers[index] * numbers[secondIndex]);
    } else if (index === numbers.length) {
          numbersMultiply.push(numbers[secondIndex] * 2);
      }
    }
  }
}

console.log(numbersMultiply);