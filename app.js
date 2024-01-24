const arr = [20, 34, 12, 32, 456, 45, 67, 46];

const [firstNumber, secondNumber, thirdNumber, fourthNumber] = arr;

if (firstNumber < secondNumber) {
  console.log("First number is less than Second number");
} else if (firstNumber === secondNumber) {
  console.log("First number is equal to Second number");
} else {
  console.log("First number is greater than Second number");
}

if (firstNumber < secondNumber && thirdNumber < fourthNumber) {
  console.log("That statement is True");
} else {
  console.log("That statement is False");
}

// "", null, undefined, 0, NaN = > Returns False

if (null || "" || undefined || NaN || 0) {
  console.log("True");
} else {
  console.log("False");
}

// 1 and -1 = > Returns True

if (1 && -1) {
  console.log("True");
} else {
  console.log("False");
}

if (arr.length) {
  console.log("Array is not empty");
} else {
  console.log("Array is empty");
}

const obj = {
  name: "Fariz",
  surName: "Rehimov",
};

if (obj) {
  console.log("Object is not empty");
} else {
  console.log("Object is empty");
}

console.log(obj.length); // Returns = > undefined

let a = null;
//console.log(a.length); // Return = > Error occured
