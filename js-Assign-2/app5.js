          // Assignment # 05

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var numb1 = 3;
var numb2 = 5;
var add = numb1 + numb2;
document.write("<p>Sum of" + " "+numb1 + "  " + " and " +numb2+ " "+ "is"+" "+add+""+"</p>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
let numb1 = 3;
let numb2 = 5;
let subtraction = numb1 - numb2;
let multiplication = numb1 * numb2;
let division = numb1 / numb2;
let modulus = numb1 % numb2;
document.write("<p> Subtraction of" + " "+numb1 + "  " + " and " +numb2+ " "+ "is"+" "+subtraction+""+"</p>");
document.write("<p> Multiplication of" + " "+numb1 + "  " + " and " +numb2+ " "+ "is"+" "+multiplication+""+"</p>");
document.write("<p> Divide of" + " "+numb1 + "  " + " and " +numb2+ " "+ "is"+" "+division+""+"</p>");
document.write("<p> Modulus of" + " "+numb1 + "  " + " and " +numb2+ " "+ "is"+" "+modulus+""+"</p>");



// Q3

        var number;
        document.write("Value after variable declaration is: " + number + "<br>");
        number = 5;
        document.write("Initial value: " + number + "<br>");
        number++;
        document.write("Value after increment is: " + number + "<br>");
        number = number+ 7;
        document.write("Value after addition is: " + number + "<br>");
        number--;
        document.write("Value after decrement is: " + number + "<br>");
        var remainder = number % 3;
        document.write("The remainder is: " + remainder);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
let tic = 600;
let pr = 5 * tic;
document.write("<p> Total cost " + " "+pr + "  " + " PKR "+ "</p>");



// 5. Write a script to display multiplication table of any number in your browser.
var numb = 3;
document.write("<p> table " + numb + "</p>");
document.write(numb + " x 1 = " + (numb * 1) + "<br>");
document.write(numb + " x 2 = " + (numb * 2) + "<br>");
document.write(numb + " x 3 = " + (numb * 3) + "<br>");
document.write(numb + " x 4 = " + (numb * 4) + "<br>");
document.write(numb + " x 5 = " + (numb * 5) + "<br>");
document.write(numb + " x 6 = " + (numb * 6) + "<br>");
document.write(numb + " x 7 = " + (numb * 7) + "<br>");
document.write(numb + " x 8 = " + (numb * 8) + "<br>");
document.write(numb + " x 9 = " + (numb * 9) + "<br>");
document.write(numb + " x 10 = " + (numb * 10) + "<br>");


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

let cel = 32; 
let fahr = (cel * 9/5) + 32;
document.write(cel + "°C is " + fahr + "°F<br>");

let fahrTemp = 70; 
let celTemp = (fahrTemp - 32) * 5/9;
document.write(fahrTemp + "°F is " + celTemp + "°C");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

let prItm1 = 650; 
let prItm2 = 100; 
let quanItm1 = 3; 
let quanItm2 = 7; 
let shipCharg = 100; 

let totItm1 = prItm1 * quanItm1;
let totItm2 = prItm2 * quanItm2;
let total = totItm1 + totItm2 + shipCharg;

document.write("<h3>Shopping Cart</h3>");
document.write("Price of item 1 is" + " "+ prItm1 + "<br>");
document.write("Quantity of item 1 is" + " " + quanItm1 +" " + "<br>");
document.write("Price of item 2 is " + " " + prItm2 + "<br>");
document.write("Quantity of item 2 is " + quanItm2+ "<br>");
document.write("Shipping Charges" + " "+ shipCharg + "<br><br>");
document.write("Total cost of your order is " + total + "");


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
let totMrks = 980; 
let mrksObtnd = 804; 

let perc = (mrksObtnd / totMrks) * 100;
document.write("<h3>Marks Sheet</h3>");
document.write("Total Marks: " + totMrks + "<br>");
document.write("Marks Obtained: " + mrksObtnd + "<br>");
document.write("Percentage: " + perc + "%");

//Q9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


let usDolrs = 10;
let sadRyls = 25;
 let usPkr = 104.80;
 let rylPkr = 28;
 let totPkr = (usDolrs * usPkr) + (sadRyls * rylPkr);
 document.write("Total currency in Pakistani Rupees: " + totPkr);



 //Q10. Write a program to initialize a variable with some
//number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression
    let numbr = 10;
    let res = ((numbr + 5) * 10) / 2;
    document.write("The result of the calculation is: " + res);


//Q11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.

 let crntYr = 2024;
 let brtYr = 2003;
 let ag1 = crntYr - brtYr;
 let ag2 = ag1 - 1;
 document.write("<h3> Age Calculator</h3>");
 document.write("current year:"+ "" + crntYr);
 document.write("birth year:"+ "" + brtYr);
 document.write("your age is"+ "" + ag1);
 
 
 // 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

 let rad = 20;
let pi = 3.142;
let cirfrnce = 2 * pi * rad;

document.write("<h3>The Geometrizer</h3>");
document.write("Radius of circld: " + rad + "<br>");
 document.write("The circumference is: " + cirfrnce + "<br>");
 let area = pi * rad * rad;
 document.write("The area is: " + area);

// Q:13 The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.

let favSnck = "chocolate chip";
let curntAge = 20;
let maxAge = 65;
let amntDay = 3;
document.write("<h3>The LifeTime Supply Calculator</h3>");
document.write("Favorite Snack: " + favSnck + "<br>");
 document.write("Current age: " + curntAge + "<br>");
 document.write("Estimated max age: " + maxAge + "<br>");
 document.write("Amount of snack per day: " + amntDay + "<br>");
 let totSnckNed = (maxAge - curntAge) * 365 * amntDay;
 document.write("You will need " + totSnckNed + " " + favSnck + " to last you until the ripe old age of " + maxAge + ".");