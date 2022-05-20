// 'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });



//create a function just to find a ramp number (not count them)
//this is a separate function, because when we return false
//we want it to exit out of the findRamps function, only
//(we want the numOfRamps loop to continue nums number of times, regardless)
const findRamps = (string) => {
  //loop over the current string
  for (let j=0; j<= string.length-1 ; j++ ){

    //if, at any point, the current number of the string is bigger than the previous number
    if (string[j] > string[j+1]) {
      //exit out of the function
      //so this string will NOT be counted in numOfRampsBelow
      return false
    }
    //implied "else" makes the if statment KEEP ITERATING
    //we don't put the return true here, 
    //because we only want the function to return true if it loops over the whole string
  }
  //if the if statement above doesn't ever return false
  //that means that each successive number is bigger than the one before it
  //so return true
  //so this can be counted in numOfRampsBelow
  return true
}

const numOfRampsBelow = (nums) => {
  let counter = 0

  //save the original nums as length
  //so we can loop over this many times
  //(because we'll change nums later)
  let length = nums

  //declare a variable that holds nums as a string
  //so we can loop over it
  let string = nums.toString()

  //loop length (original nums) times, minus one
  for (let j=0; j <= length-1; j++){

    //if the findRamps function returns true...
    if (findRamps(string)){

      //..then add one to the counter
      counter++
    }

    //redefine nums; reduce the number by one
    nums = nums - 1 

    //redefine string to be based on the NEW num
    //so the next time the for loop runs, it will be running with the new string
    string = nums.toString()
  }
  return counter
}

let input = '';
const textInput = document.getElementById("numInput");
console.log(textInput)
const button = document.getElementById("button");
const textOutPut = document.getElementById("display-element");

textInput.addEventListener('keyup', (event) => {
  input = event.target.value
  console.log(input)
})

button.addEventListener('click', (e) => {
  e.preventDefault()
  let number = numOfRampsBelow(input)
  textOutPut.innerText = `There are ${number} total ramp numbers less than ${input}!!`

  console.log(numOfRampsBelow(input))
  console.log(`There are ${number} total ramp numbers less than ${input}`)
})








// const getPrompt = () =>  {
//   rl.question('Enter your string to count the characters: ', (str) => {
//     countIt(str);
//     getPrompt();
//   });
// }

// if (typeof describe === 'function') {
//   describe('#countIt()', () => {
//     it('should be of type function', () => {
      
//       assert.equal(typeof countIt, "function");
//     });
//   });
// } else {
//   getPrompt();
// }