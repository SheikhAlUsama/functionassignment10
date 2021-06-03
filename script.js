// 1. Write a function that displays current date & time in your
// browser.

// function date (){
//     var date = new Date ();
//     console.log(date)
// }
// date()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greetings (firstName,lastName){
//     console.log(`Hello Good Day ${firstName} ${lastName} `)
// }
// greetings("Muhammad","Usama")

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function numCalculator(num1,num3){
//     console.log(num1 + num3)
// }
// numCalculator(6,10)


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculator(num1,num3,Operand){
//     if(Operand == "+"){
//         console.log(num1 + num3)
//     }
//      else if(Operand == "-"){
//         console.log(num1 - num3)
//     }
//     else if(Operand == "*"){
//         console.log(num1 * num3)
//     }
//     else if(Operand == "/"){
//         console.log(num1 / num3)
//     }
//     else {
//         console.log("Enter Correect Number")
//     }
// }
// calculator(3,5,"-")

// 5. Write a function that squares its argument.

// function square (num){
//     return num * num
// }
// console.log(square(9))

// 6. Write a function that computes factorial of a number.

// function factorial(n){
//     if(n == 0 || n == 1){
//         return 1;

//     }else{
//         return n * factorial(n-1);
//     }
// }
// var n = 7
// answer = factorial(n)
// console.log("The factorial of " + n +   " is " + answer);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function counting(startNum,endNum){
//     for (i = startNum; i <=endNum ; i++ ){
//         console.log(i)
//     }
// }
// counting(69,99)


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }

//   console.log(pythagorean(4, 3));


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(width,height){
//      area = width * height
//      return area
// }
// console.log(area(9,4))

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// program to check if the string is palindrome or not

// function checkPalindrome(str) {

//     // convert string to an array
//     var check = str.split('').reverse().join("");

//     if(str == check) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }

// //take input
// const str = prompt('Enter a string: ');

// checkPalindrome(str);


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var i = 0; i < array1.length; i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// console.log(longestWord("Web Developemnt Tutorial"))


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('w3resourooooce.com', 'o'));


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr


// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
//   }

//   console.log(Math.PI);


//   console.log(calculateCircumference(10));

//   function calcArea (radius){
//       return Math.PI * (radius + radius)
//   }

//   console.log(calcArea(1));