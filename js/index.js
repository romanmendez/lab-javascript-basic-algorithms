// Iteration 1: Names and Input
let hacker1 = "Nacho";
let hacker2 = "Roman";

console.log("The driver's name is", hacker1);
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has XX characters.")
} else if (hacker2.length > hacker1.length){
  console.log("It seems that the navigator has the longest name, it has XX characters.")
} else {
  console.log("Wow, you both have equally long names,", hacker1,"and", hacker2+"!")
}
// Iteration 3: Loops
function nameCapital(name){
  let nameCapitals = [];
  for (let i = 0; i < name.length; i++){
  nameCapitals.push(name[i].toLocaleUpperCase())
  }
  console.log(nameCapitals.join(" "))
}
nameCapital(hacker1)

function nameReverse(name){
  console.log(name.split("").reverse().join(""))
}
nameReverse(hacker2)

function lexiOrder(a, b){
  let i = 0;
  for(; i < a.length || i < b.length; i++){
    if(a[i] < b[i]){
      console.log("The driver's name goes first")
      break;
    } else if(a[i] > b[i]){
      console.log("Yo, the navigator goes first definitely")
      break;
    } else if(i === a.length-1 || i === b.length-1){
      if(a.length < b.length){
        console.log("The driver's name goes first")
        break;
      } else if(a.length > b.length){
        console.log("Yo, the navigator goes first definitely")
        break;
      } else {
        console.log("What?! You both have the same name?")
      }
    }
  }
}
lexiOrder(hacker1, hacker2)

function lexiOrderShort(driver, navigator){
  let compare = driver.localeCompare(navigator)
  console.log("Compare:",compare)
  if(compare < 0){
    console.log("The driver's name goes first");
  } else if(compare > 0){
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("What?! You both have the same name?")
  }
}
lexiOrderShort(hacker1, hacker2)

// Bonus 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi arcu, elementum eget tellus non, viverra sagittis orci. Vestibulum consectetur non nibh vel aliquam. Cras facilisis vel quam non venenatis. Etiam finibus leo sem, in cursus ex suscipit a. Maecenas pretium est ut lacus finibus, a tristique neque consectetur. Morbi feugiat libero sit amet tincidunt ultrices. Vivamus facilisis rhoncus tempor. Aliquam consectetur arcu odio, eu fermentum ipsum tempor finibus. Pellentesque lacinia sem sed erat tincidunt, et mollis nisl egestas. Donec dignissim massa libero, ut viverra tellus pulvinar ut. Aenean ornare vulputate eros, at porttitor lacus iaculis a. Proin porttitor quam sed justo venenatis finibus."

let wordCount = loremIpsum.split(" ")
let et = 0;
for(let i = 0; i < wordCount.length; i++){
  if(wordCount[i] === "et"){
    et++;
  }
}
console.log(wordCount.length)
console.log(et)

function findWord(text, word){
  let reg = new RegExp("( "+word+")\\W", "g")
  return text.toLowerCase().match(reg).length
}
findWord(loremIpsum, "et")

// Bonus 2
function palindrome(text){
  let x = text.replace(/[^\w]/g, "").split(" ").join("").toLowerCase()
  let front = [];
  let back = [];
  for(let i = 0, j = x.length-1; i <= j; i++, j--){
    front.push(x[i])
    back.push(x[j])
  }
  if(front.join("") === back.join("")){
      console.log("Text is a Palindrome.")
    } else {
      console.log("Text is not a Palindrome")
    }
}
let userText = prompt("Write some text to test if it's a palindrome:");
palindrome(userText)

function palindromeSimple(text){
  let forwardText = text.replace(/[^\w]/g, "").split(" ").join("").toLowerCase()
  let backwardsText = forwardText.split("").reverse().join("")
  if(forwardText === backwardsText){
      console.log("Text is a Palindrome.")
    } else {
      console.log("Text is not a Palindrome")
  }
}
let userText = prompt("Write some text to test if it's a palindrome:");
palindrome(userText)