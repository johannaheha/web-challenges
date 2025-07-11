console.clear();

/*
1: The function calls below are not working properly yet. Modify the function
   `printSquare` to log the square of the parameter to the console.
   The formula is: square = number * number
*/

function printSquare(number) {
   const square = number * number;
   console.log(square);
}

printSquare(3);
printSquare(5);

/*
2: Write a function that accepts the radius of a circle as a parameter and logs
   the circumference to the console. The function does not exist yet.
   The formula is: circumference = 2 * Pi * radius
*/

// Uncomment the following function calls and implement the function `printCircumference`.

function printCircumference(radius){
   const circumference = 2 * Math.PI * radius;
   console.log(circumference)
}

printCircumference(4);
printCircumference(6);

/*
3: Write a function that accepts the width and length of a rectangle
   and logs the following text to the console: "The area of the rectangle is ?".
   The function should replace the question mark "?" with the correct area.
   The function does not exist yet.
   The formula is: area = width * length
*/

function printRectangleArea(width, length) {
   const area= width * length;
   console.log (`The area of the rectangle is ${area}`);
}

// Uncomment the following function calls and implement the function `printRectangleArea`.

printRectangleArea(5, 7);
printRectangleArea(3, 4);
