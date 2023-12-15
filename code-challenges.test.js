// ASSESSMENT 2: Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")
const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("string", () => {
    it("takes an object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
      expect(string(object1)).toEqual("15 is divisible by three")
      expect(string(object2)).toEqual("0 is divisible by three")
      expect(string(object3)).toEqual("-7 is not divisible by three")
    })
  })

// describe("number", () => {
//     it("returns if number is evenly divisible by 3", () => {
//         expect(string(object1) / 3 === 0)
//         expect(string(object2) / 3 === 0)
//         expect(string(object3) / 3 === 0)
//     })
// }) 

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"

const object2 = { number: 0 }
// Expected output: "0 is divisible by three"

const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
const string = (object) => {
    if(object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else if (object.number % 3 !== 0) {
        return `${object.number} is not divisible by three`
    }
}

// Pseudo code:
// Input: 1 function
// Output: If objects are divisible by 3 and pass test
// Breakdown: First we must create a function where we start off with the anatomy of a    jest test. This includes the "describe" statement and the string of what is being         tested.  We then have an "it" statement which explains what the test is doing.  Lastly we have the "expect" statement which calls the function.  Once everything is in place, we create the function that would pass by using the if, else if formula. 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// describe("words", () => {
//     it("takes in an array of words and returns an array with all the words capitalized", () => {
//         const randomNouns1 = { ["streetlamp", "potato", "teeth", "conclusion", "nephew"] }
//         // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//         const randomNouns2 = { ["temperature", "database", "chopsticks", "mango"] }
//         // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
//         expect(words(randomNouns1)).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//          expect(words(randomNouns2)).toEqual["Temperature", "Database", "Chopsticks", "Mango"]
//     })
//   })

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
const words = (array) => {
  let newArr = []
  for (let x = 0; x < array.length; x++)  
  newArr.map(array[x].toUpperCase)
}

// // Pseudo code:
// Input: One array, convert to string and capitalize.
// Output: One array with all words capitalized.
// Breakdown: To take an array of words, capitalize all the letters inside and return it as an array, we can utilize a for loop. We have x begin at the 0 interval, go through the length of the array, and increase by an index of one. From there, we take our new declaration, which is newArr, and .map which will look at every value in the array. On the inside of our parenthesis, we have our parameter called 'array' and our x value that we .toUpperCase and that should capitalize all the words in the array.  

