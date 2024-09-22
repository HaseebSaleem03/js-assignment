// Q1. Write a program that takes a character (number or string in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

let chartr = prompt("Enter a character (number, uppercase letter, or lowercase letter):");
let aciCde = chartr.charCodeAt(0);

if (aciCde >= 48 && aciCde <= 57) {
    console.log( "    " + chartr + "  number.");
}
else if (aciCde >= 65 && aciCde <= 90) {
    console.log( "    " + chartr + "  uppercase letter.");
}

else if (aciCde >= 97 && aciCde <= 122) {
    console.log("     " + chartr + " lowercase letter.");
}
else {
    console.log("      " + chartr + "    not a number or letter.");
}


  // Q2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

let number1 = parseInt(prompt("1st integer:"));
let number2 = parseInt(prompt("2nd integer:"));

if (number1 > number2) {
    console.log(number1 + "  greater than " + number2);
} else if (number2 > number1) {
    console.log(number2 + "   greater than " + number1);
} else {
    console.log("Equal");
}

// Q3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

let numberr = parseInt(prompt("Number:"));

if (numberr > 0) {
    console.log(numberr + " Positive");
} else if (numberr < 0) {
    console.log(numberr + " Negative");
} else {
    console.log("Zero.");
}

// Q4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

let charterr = prompt("Character:").toLowerCase();

if (charterr === 'a' || charterr=== 'e' || charterr === 'i' || charterr === 'o' || charterr === 'u') {
    console.log("Vowel");
} else {
    console.log("Not vowel.");
}

// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect password” otherwise.

let corctPass = "haseeb";

let usrPass = prompt("Password:");

if (!usrPass) {
    console.log("password");
} else if (usrPass === corctPass) {
    console.log("Correct");
} else {
    console.l("Incorrect password");
}

// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greet;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting); 