// Q1
// function sum (a ,b) {
//   return a * b;
// } 
// console.log(sum(5 , 10));

// Q2
// function Fahrenheit(celsius){
//     return celsius * 9/5 + 32.
// }

// console.log(Fahrenheit(25));

// Q3
// function prime(number) {
//     if (number <= 1) {
//       return false;
//     }
//     for (var i = 2; i <= number; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
// }
  
// console.log(prime(7)); 
// console.log(prime(10)); 
  
// Q4
// function reverse (str){
//     return str.split('').reverse().join('');
// }
// console.log(reverse("Hello"));

// Q5
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));

// Q6
// function greetUser() {
//     console.log("Hello, welcome!");
// }

// greetUser(); 

// Q7
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// greet("Mariyam"); 

// Q8
// function sum (a ,b) {
//   return a * b;
// } 
// console.log(sum(5 , 10));

// Q9
// function random(){
//     return (Math.random() * 100);
// }
// console.log(random());

// Q10
function voting(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(voting(20));
console.log(voting(16)); 
