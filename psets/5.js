/*
DrEvil!

Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

//prompt("enter an amount");

//hard-coded amount to test function output in console
var amount = 1000000;
drEvil(amount);


function drEvil(amount) {
  // write your solution here...
  if(amount === 1000000)
  {
    console.log(amount + " dollars (pinky)")
  }
  else
  console.log(amount + "dollars")

}
