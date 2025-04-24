// ========================================
// Exercise 1: Basic `push()` method
// ========================================

// STEP 1: Create an empty array named "cars".

// STEP 2: Create an array named "carsToPush" containing car brand names.

// STEP 3: Add all elements from "carsToPush" into the "cars" array using `push()`.

// STEP 4: Log the updated contents of the "cars" array.

let cars = [];
let carsToPush = ["Toyota", "Honda", "Ford"];

// cars.push(carsToPush[0], carsToPush[1], carsToPush[2]);
// cars.push(carsToPush);
cars.push(...carsToPush);
console.log(cars);

// ========================================
// Exercise 2: Adding Multiple Elements with `push()`
// ========================================

// STEP 1: Create an array named "cities" with two city names.

// STEP 2: Add three more city names directly into the "cities" array using `push()`.

// STEP 3: Log the updated contents of the "cities" array.

let cities = ["New York City", "Mexico City"];
cities.push("Manila", "Los Angeles", "Toronto");
console.log(cities);

// ========================================
// Exercise 3: Pushing Elements Using a Loop
// ========================================

// STEP 1: Create an empty array named "numbers".

// STEP 2: Use a loop to push numbers 1 through 5 into the "numbers" array.

// STEP 3: Log the contents of the "numbers" array.

let numbers = [];
for (let x = 1; x <= 5; x++) {
  numbers.push(x);
}
console.log(numbers);

// ========================================
// Exercise 4: Pushing Objects into an Array
// ========================================

// STEP 1: Create an empty array named "students".

// STEP 2: Define two objects named "alice" and "bob", each containing name and age properties.

// STEP 3: Add both objects ("alice" and "bob") to the "students" array using `push()`.

// STEP 4: Log the contents of the "students" array.

let students = [];

let student1 = { name: "Alice", age: 15 };
let student2 = { name: "Bob", age: 16 };

students.push(student1, student2);

console.log(students);

// ========================================
// Exercise 5: Pushing Arrays into an Array (Nested Arrays)
// ========================================

// STEP 1: Create an empty array named "nestedArray".

// STEP 2: Define three separate arrays named "arr1", "arr2", and "arr3".

// STEP 3: Add all three arrays ("arr1", "arr2", and "arr3") into the "nestedArray" using `push()`.

// STEP 4: Log the contents of the "nestedArray".

let nestedArray = [];

let arr1 = [10, 20, 30];
let arr2 = ["Kevin", "Ann", "Colby"];
let arr3 = [
  { name: "student1", age: 15 },
  { name: "student2", age: 17 },
];

nestedArray.push(arr1, arr2, arr3);
console.log(nestedArray);

// ========================================
// Exercise 6: Using Conditional Statements with `push()`
// ========================================

// STEP 1: Create an empty array named "evenNumbers".

// STEP 2: Create a function named "isEven" that determines if a number is even.

// STEP 3: Use a loop from 1 to 10, and push only even numbers into the "evenNumbers" array.

// STEP 4: Log the contents of the "evenNumbers" array.

let evenNumbers = []; // this variable

// function isEven(n) {
// return n % 2 === 0;
//}

/*  if (n % 2 ===0)
{
    return n; 
}
*/

// for (let i = 1; i <= 10; i++) {
//   if (isEven(i)) {
//     evenNumbers.push(i);
//   }
// }
// console.log(evenNumbers);
function isEven() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i); // you modified data
    }
  }
}
isEven();
console.log(isEven());

// ========================================
// Exercise 7: Merging Arrays Using `push()`
// ========================================

// STEP 1: Create two arrays named "array1" and "array2".

// STEP 2: Use `push()` with the spread operator to add all elements from "array2" into "array1".

// STEP 3: Log the contents of the merged "array1".

let array1 = ["Kevin", "Jairo", "Juno"];
let array2 = ["Ann", "Colby"];

array1.push(...array2);

console.log(array1);

// ========================================
// Exercise 8: Using `push()` with User Input
// ========================================

// STEP 1: Create an empty array named "userInputs".

// STEP 2: Dynamically create and append three input fields to the document body.

// STEP 3: Create a button that the user can click to submit inputs.

// STEP 4: Add an event listener to the button:
//   - When clicked, retrieve values from all input fields.
//   - Push those values into the "userInputs" array.

// STEP 5: Log the contents of the "userInputs" array.

// STEP 6: Append the button to the document body so the user can see and interact with it.

let userInputs = [];

let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");

// let submitAllInputsBtn = document.createElement("button");
// submitAllInputsBtn.textContent = "Submit all";

let submitAllInputsBtn2 = document.createElement("button");
submitAllInputsBtn2.textContent = "Jairo's Submit all";

// submitAllInputsBtn2.setAttribute(
//   "onclick",
//   `retreiveAllInputs(${[input1.value, input2.value, input3.value]})`
// );

// function retrieveAllInputs(inputs) {
//   userInputs.push(...inputs);
//   console.log(userInputs);
// }

submitAllInputsBtn2.addEventListener("click", () => {
  let allValues = [input1.value, input2.value, input3.value];

  userInputs.push(...allValues);
  console.log(userInputs);
  console.log(allValues);
});

document.body.append(input1);
document.body.append(input2);
document.body.append(input3);
// document.body.append(submitAllInputsBtn);
document.body.append(submitAllInputsBtn2);
