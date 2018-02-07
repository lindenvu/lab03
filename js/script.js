/*eslint-env browser */
var score1, score2, score3, average;
var total = 0;
score1 = window.prompt("What is the first score?");
score2 = window.prompt("What is the second score?");
score3 = window.prompt("What is the third score?");
total += score1;
total += score2;
total += score3;
average = total / 3;
document.write("The average of the 3 scores is" + parseInt(average, 10));