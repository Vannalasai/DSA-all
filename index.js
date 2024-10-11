

function validate(){

    let username = document.querySelectorAll(".username")
    let date = document.querySelectorAll(".date")
    let number = document.querySelectorAll(".number")
    let password = document.querySelectorAll(".pass")
    let repassword = document.querySelectorAll(".repass")

    if(username.value == "" || date.value == "" || number.value == "" || password.value == "" || repassword.value == ""){
        alert("please enter the details")
        return false;
    }else{
        return true;
    }
}


//find the missing element

let array = [1, 2, 0, 4, 5];
let K = 18;

function find_missing_element(array, K) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    let missing_element = K - sum;
    return missing_element;
}

let result = find_missing_element(array, K);
console.log(result); // prints 6

//the pairs the sum of even

// function count_pairs(arr, n) {
//     let even_count = 0, odd_count = 0;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] % 2 == 0) {
//             even_count++;
//         } else {
//             odd_count++;
//         }
//     }
//     return (even_count * (even_count - 1) / 2) + (odd_count * (odd_count - 1) / 2);
// }

// let arr = [9,2,3,4,5,88,76,45];
// let n = arr.length;
// console.log(count_pairs(arr, n));


// let array = [1,2,3,4,5,88,76,45]

// let max = [0]

// for(let i=0; i<array.length; i++){

//     if(array[i]>max){
//         max = array[i]
//     }

// }

// console.log(max)

// const numbers = [9,2,3,4,5,88,76,45];

// const smallestNumber = findSmallestNumber(numbers);

// function findSmallestNumber(array) {
  
//     let smallest = array[0]; // Assume the first element is the smallest
  
//     for (let i = 1; i < array.length; i++) {

//       if (array[i] < smallest) {

//         smallest = array[i]; // Update the smallest number if a smaller one is found
        
//       }
//     }
  
//     return smallest;
// }
  
// console.log(smallestNumber);




let n1 = 5;

for(i = 0; i <= n1; i++){
    let row = "";
    for(j = 1; j <= i; j++){
        row = row+ "* "
    }
    console.log(row)  // *
}                     // *  *  
                     // *  *  *



// let n = 5;

// for(i = 0; i <= n; i++){
//     let row = "";
//     for(j = 1; j <= i; j++){
//         row = row+j+ " "
//     }
//     console.log(row)  // 1
// }                     // 1  2  
                         // 1  2  3



// let n = 5;

// for(i=-1; i<n; i++){
//     let row = "";
//     for(j=1; j<n-i; j++){
//         row = row+j+ " "
//     }
//     console.log(row) // 1  2  3  4  5 
// }                    // 1  2  3  4
                        // 1  2  3



// let n = 5;

// for(i=0; i<n; i++){
//     let row = "";
//     for(j=0; j<n-i; j++){
//         row = row+ "* "
//     }
//     console.log(row)  // *  *  *  *  *
// }                     // *  *  *  *
//                       // *  *  *


// find the large name in string

let sentence = "I am learning full stack developer at cynohub"

let arr = sentence.split(" ")

let longestName = arr.reduce((a,b)=> a.length > b.length ? a:b )

console.log(longestName)



// program to find out the number of vowels in a string

let count = 0;

for(i=0; i<sentence.length; i++){

    let character = String(sentence[i]).toLowerCase()

    if(character == "a" || character == "e" || character == "o" || character == "i" || character == "u") count++;
}

console.log(count)



// program to find out the number of vowels and number of consonants in a string

function vowelsAndConsonantCount(str){

    let vowelsCount = 0;
    let consonantCount = 0;

    str = str.toLowerCase()

    for(i=0; i<str.length; i++){

        let char = str[i]

        if(char === "a" || char === "e" || char === "o" || char === "i" || char === "u"){
            vowelsCount++;
        }
        else if( char >= "a" && char <= "z"){
            consonantCount++;
        }
    }

    return {
        vowels: vowelsCount,
        consonants: consonantCount
    }
}

console.log(vowelsAndConsonantCount("I am learning full stack developer at cynohub"))



// Amstrong Number 

let n = 1634;

let originalNum = n;
let result1 = 0;
let remainder = 0;

originalNum = 1634;

while(originalNum!==0){

    remainder = originalNum%10;

    result1 = result1 + remainder**4;

            // 0 + 4**4

    originalNum = Math.floor(originalNum/10);

}

if(result1 === n){

    console.log("yes")

}else{

    console.log("no")

}


// Find out palindrome names in array

let palindrome = ["Civic", "Telugu", "level", "english", "madam", "program"];

function isPalindrome(palindrome) { 

    palindrome = palindrome.toLowerCase();

    return palindrome === palindrome.split("").reverse("").join("");
}

for (let name of palindrome) {

    if (isPalindrome(name)) {

      console.log(name, "is a palindrome.");

    } else {

      console.log(name, "is not a palindrome.");

    }
}

// let palindrome = 121;

// let original = palindrome;
// let reverse = 0;

// while(original!=0){
//     let value = original%10;
//     reverse = reverse*10+value;
//     original = Math.floor(original/10);
// }

// if(reverse === palindrome){
//     console.log("palindrome")
// }else{
//     console.log("Not palindrome")
// }


// Find out Prime Number 

let primeNum = 71;

function findPrimeNum(primeNum){

    if(primeNum < 2){
        return false;
    }

    for(i = 2; i <= Math.sqrt(primeNum); i++){
        if(primeNum%i === 0){
            return false;
        }
    }
   return true;

}

if(findPrimeNum(primeNum)){
    console.log(primeNum,"prime number")
} else {
    console.log(primeNum,"Not a Prime number")
}


let nums = 10;

let count1 = 0;

for(i=1; i<=nums; i++){
    if(nums%i===0){
        count1++
    }
}

if(count1 === 2){
    console.log("prime")
}else{
    console.log("not prime")
}


n = 5;

function sumOfDivisors (n) {
  let sum = 0; // initialize the sum variable
  for (let i = 1; i <= n; i++) { // loop over each number from 1 to n
        //   i = 1;
    for (let j = 1; j <= i; j++) { // loop over each possible divisor from 1 to i
           
      if (i % j === 0) { // check if j is a divisor of i
        sum += j; // add j to the sum
      }
    }
  }
  return sum; // return the final sum
}

console.log (sumOfDivisors (n));








let arr1 = [3, 2, 1, 0, 4, -1, -2]

let nm = arr1.length;

for(i = 0; i <= nm-2; i++){  //The outer loop iterates from i = 0 to i <= nm-2, which means it goes up to the second-to-last element of the array.
     let min = i;
    for(j = i; j <= nm-1; j++){   //The inner loop iterates from j = i to j <= nm-1, which means it goes up to the last element of the array.
        
        if(arr1[j]<arr1[min]){
            min = j;
        }
    }

    let temp = arr1[min];
    arr1[min] = arr1[i];
    arr1[i] = temp;
}

console.log(arr1)



// numbers = [25,35,16,8,6,9,1,3,13,-2,-5,]

// numbers.forEach(num=>{
//     if(num>10 || num<0){
//         console.log(num)
//     }
// })

// let name = "uoyevoli"

// let reverseName = ""

// for(i = name.length-1; i>=0; i--){
//     reverseName = reverseName + name[i];
// }

// console.log(reverseName)

function reverseString(str){
    let reverseName = ""
    for(i=str.length-1; i>=0; i--){
        reverseName = reverseName + str[i]
        console.log(reverseName)
    }
    return reverseName
}

reverseString("sai")


// numbers = [25,35,16,8,6,9,1,3,13,-2,-5,]

// numbers.forEach(num=>{
//     if(num>10 || num<0){
//         console.log(num)
//     }
// })

// let name = "uoyevoli"

// let reverseName = ""

// for(i = name.length-1; i>=0; i--){
//     reverseName = reverseName + name[i];
// }

// console.log(reverseName)

// function reverseString(str){
//     let reverseName = ""
//     for(i=str.length-1; i>=0; i--){
//         reverseName = reverseName + str[i]
//         console.log(reverseName)
//     }
//     return reverseName
// }

// reverseString("sai")

// let name = "cynohub"

// function reverseString(name){
    // let newArray = name.split("")

    // let reverseArray = newArray.reverse(" ")
    
    // let newReverseArray = reverseArray.join("")
    
    // let newReverseArray = name.split("").reverse(" ").join("")
    // return newReverseArray
    
// }

// console.log(reverseString("keyword is more in the keyboard"))

// let numbers = [2,5,6,9,8,3,16,19,14]

// let sum = 0;

// for(i=0; i<numbers.length; i++){
    
//     if(numbers[i]%2===0){
//         sum = sum+numbers[i];
//     }
// }

// console.log(sum)


// num = [4,5,6,2,4,5,3,2,6,3,0,8,6,3,8,9,7,5,7,9,0,1,5]

// for(i=0; i<num.length; i++){
//     for(j=0; j<num.length; j++){
//         if(i != j){
//             if(num[i]==num[j]){
//                 num.splice(j, 1)
//             }
//         }
//     }
// }

// console.log(num)

// let a = 20;
// let b = 10;
// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log(`a: ${a}, b: ${b}`)

// function newSwapNum(a,b){
//     console.log(`a: ${a}, b: ${b}`);
//     [a,b] = [b,a];
//     console.log(`a: ${a}, b: ${b}`);
// }

// newSwapNum(2,3)

// let sentence = "Hello I am learning javascript";

// let newStringSentence = sentence.split(" ").reverse().join(" ")

// console.log(newStringSentence)

// let sentence = "Hello I am learning javascript";

// let uniqueStr = sentence.split("").filter((char, index) => sentence.indexOf(char)=== index).join("")

// console.log(uniqueStr)

let num = [1, 3, 5, 7, 9];
let missingNum = [];

for(i=1; i<=10; i++){
    if(!num.includes(i)){
        missingNum.push(i)
    }
}
console.log(missingNum)
