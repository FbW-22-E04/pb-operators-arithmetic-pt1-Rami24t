// write your code in this file
// Programming Basics: Arithmetic Operators
// These tasks are aimed at making you more comfortable with solving math problems using JS.
// Instructions
//    Work in solution.js
//    Print each of your results to the console
//    For the output use the pattern Q1: xx tickets are sold (Question number has to be included in the string)
// Basic Arithmetic Problems
//Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?
// 6450/15 dollars
console.log(`Q1: ${6450/15} tickets were sold`);
//Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
console.log(`Q2: Sylvia makes ${500*52.17857} dollars per year.`);
//Percentage

//Q3. Calculate the percentage of 17/30. Expected output: "Q3: [number]%" (No need to round the result)
console.log(`Q3: ${17*100/30}%`);
//Geometry Formulas

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
console.log(`Q4: ${4.75*4}cm`);
//Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
console.log(`Q5: ${5+6+7}cm`);
//Q6. Calculate the area of a square. Each side is 5cm.
console.log(`Q6: ${5*5}cm^2`);
//Q7. Calculate the area of an right-angled triangle. Assume the length of the sides are 3cm, 4cm, 5cm.
console.log(`Q7: ${3*4/2}cm^2`)
// Q8. Calculate the volume of a cube. Length of each side is 9cm.
console.log(`Q8: ${9*9*9}cm^3`)
//Consumer Formula

//Q9. Calculate the three bills including tips:

//    €22.35 + 10% tip
//    €26.67 + 15% tip
//    €35.92 + 20% tip
console.log(`Q9: €${22.35+22.35/10} €${26.67+26.67/15} €${35.92+35.92/20}`)
//Print all three results in one string to the console

//Average

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 What is Noemy's average hours worked per day?
console.log(`Q10: ${(8+6+5+9+8+2+1+8.5+7+4)/10}hours`)
// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test? Expected output: "Q11: Score in the sixth test: --".

// [(75+70+85+90+100) + x] / 6 = 85
// [(75+70+85+90+100) + x] = 85*6
// x = 85*6 -(75+70+85+90+100)

console.log("Q11: Score in the sixth test: ", 85*6 - (75+70+85+90+100));
// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 
// 78%. What is the minimum percentage he 
//must get in his last assessment to ensure he gets a first class? Expected output: "Q12: James needs a minimum of --% to get an 80% average".
//80%
//9 x
//8 x
// 78%
// let y be the minimum needed
// x/8=0.78
// x=(0.8*0.78)
// (0.8*0.78)+y/9=0.8
// y=(0.8-0.8*0.78)*9

console.log(`Q12: James needs a minimum of ${(9*(0.8-0.8*0.78))*100}% to get an 80% average`)
