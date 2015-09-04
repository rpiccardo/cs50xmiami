/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
var radius = 5;
var PI = 3.141592;

circumference = (2 * PI) * radius;

console.log("The circumference is " + circumference);

area = PI * Math.pow(radius, 2);

console.log("The area is " + area);
