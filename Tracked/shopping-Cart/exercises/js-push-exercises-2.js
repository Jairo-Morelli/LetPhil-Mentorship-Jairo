// ================================================
// Exercise 1: Push Favorite Colors
// ================================================
// STEP 1: Create an empty array named "favoriteColors".
// STEP 2: Create an array called "newColors" with three color names.
// STEP 3: Use push() with the spread operator to add all items from "newColors" into "favoriteColors".
// STEP 4: Log "favoriteColors" to the console.
let favouriteColours = [];
let newColours = ["blue", "red", "green"];

favouriteColours.push(...newColours);
console.log(favouriteColours);


// ================================================
// Exercise 2: Push Favorite Foods
// ================================================
// STEP 1: Create an array named "favoriteFoods" with two food items.
// STEP 2: Use push() to add three more food items to the same array.
// STEP 3: Print the "favoriteFoods" array to the console.
let favoriteFoods = ["pizza", "pasta"];
favoriteFoods.push("sushi", "tacos", "wings");
console.log(favoriteFoods);

// ================================================
// Exercise 3: Push Numbers with a Loop
// ================================================
// STEP 1: Create an empty array named "numberList".
// STEP 2: Write a for loop that goes from 1 to 5.
// STEP 3: Inside the loop, push each number into "numberList".
// STEP 4: Print "numberList" to the console.
let numberList = [];
for (let i = 1; i <= 5; i++) {
    numberList.push(i);
}
console.log(numberList);


// ================================================
// Exercise 4: Push Only Odd Numbers
// ================================================

// STEP 1: Create an empty array named "oddNumbers".
// STEP 2: Write a function called "isOdd" that returns true if a number is odd.
// STEP 3: Write a for loop from 1 to 10.
// STEP 4: Inside the loop, check if the number is odd using "isOdd".
// STEP 5: If it is, push it into the "oddNumbers" array.
// STEP 6: Print "oddNumbers" to the console.

let oddNumbers = [];

function isOdd(n) {
    let val = 2+1 *n;   
    if(val % 2 !==0)
    {
        return true;
    }
    return false;
}

for (let i = 1; i < 10; i++) {
    if(isOdd(i)==true)
    {
        oddNumbers.push(i);
    }
}
console.log(oddNumbers);


// ================================================
// Exercise 5: Push and Track Usernames
// ================================================

// STEP 1: Create an empty array named "usernames".
// STEP 2: Create a function called "addUsername".
// STEP 3: Inside the function, prompt the user to enter a username.
// STEP 4: Push the entered name into the "usernames" array.
// STEP 5: Call the function three times.
// STEP 6: Print "usernames" to the console.

let userNames = [];


function addUserName()
{
    let userPrompt =prompt("Please enter your username:", "");
    userNames.push(userPrompt);
}

addUserName();
addUserName();
addUserName();

console.log(userNames);