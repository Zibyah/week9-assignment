// Array methods
This article contain 1 property an 11 arrary methods as follows:

Array Property:
-The "length" property returns the length (size) of an array.

1. The toString() method: returns an array as a comma separated string.

2. The join() method: joins all array elements into a string. similar to toString(), but in addition you can specify the separator.

3. The pop() method: removes the last element from an array:

4. The push() method: adds a new element to an array (at the end):

5. The shift() method: removes the first array element and "shifts" all other elements to a lower index. It returns the value that was "shifted out":

6. The unshift() method: adds a new element to an array (at the beginning), and "unshifts" older elements.

7. The delete() method: Array elements can be deleted using the JavaScript operator delete.
Using delete leaves undefined holes in the array. Use pop() or shift() instead.

8. The concat() method creates a new array by merging (concatenating) existing arrays. The concat() method does not change the existing arrays. It always returns a new array.
The method can take any number of array arguments, can also take strings as arguments:

9. The flat() method creates a new array with sub-array elements concatenated to a specified depth.

10. The splice() method adds new items to an array.

11. The slice() method slices out a piece of an array.

Array elements are accessed using their index number. Array are zer0-indexed:
[0] is the first array element
[1] is the second
[2] is the third











//FUNCTIONS

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}
Example: function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

-When an event occurs (when a user clicks a button)
-When it is invoked (called) from JavaScript code
-Automatically (self invoked)

Function Return
When JavaScript reaches a return statement, the function will stop executing. If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller":

The () Operator
The () operator invokes (calls) the function

Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
Variables declared within a JavaScript function, become LOCAL to the function











// CONTROL FLOW STATEMENT

In JavaScript, there are three main types of control flow statements:

if/else statements
switch statements
loops.
Let’s explore each of these in detail.

If/Else Statements
If/else statements are used to execute a block of code if a certain condition is true, and a different block of code if the condition is false.

The if…else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
Switch Statements
Switch statements are used to execute a block of code based on the value of a variable or expression.

Loops
Loops are used to execute a block of code multiple times, based on a certain condition. There are two main types of loops in JavaScript: for loops and while loops.

While Loops
A while loop simply repeats itself while something is true. Theoretically a while loop can loop forever. It continues until the condition is false.

While and Do…While Loops
The while loop executes a specified statement as long as the test condition evaluates to true. The do…while loop will first execute the code, then continue while the condition remains true.