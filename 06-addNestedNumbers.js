// Create a function that takes in an array of arrays. Like so:
// [
//   [1, 5],
//   [2],
//   [5, 10, 3]
// ]

// Your function must add up all of the numbers in all of the 
// arrays and return the value.

// Examples:
// let nestedNumbers = [
//   [1, 5],
//   [2],
//   [5, 10, 3]
// ]

// addNestedNumbers()
//     should evaluate to 26


function addNestedNumbers(arrayOfNumArray) {
  let totalSum = 0;
  for (let i = 0; i < arrayOfNumArray.length; i++) {
    let numArray = arrayOfNumArray[i];

    for (let x = 0; x < numArray.length; x++) {
      totalSum += numArray[x]
    }
  }
  return totalSum;
}

try {
  module.exports = addNestedNumbers;
} catch (err) {
  // do nothing...
}
