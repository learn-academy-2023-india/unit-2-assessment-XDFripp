// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "India 2023"
// console.log(cohort.split(" "))

// a) Your answer: .split turns the const cohort into an array so the answer would be ["India", "2023"]
// b) Verify and explain: when console logging it, the answer it gave was ['India', '2023']

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student'
// b) Verify and explain: Undefined was kicked out as name was not defined

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The answer is [11.13.15]. You want to divide everything by 2 and return the numbers that don't divide evenly while removing the numbers that do.

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: You're taking the 0 index of languages which is Javascript

// --------------------5) What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "India"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: The answer was Learn {student: 'George', cohort: 'India', year: 2023}.  LearnStudent takes the declaration Learn and drops "George" into the this.student = name section.
