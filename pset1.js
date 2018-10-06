/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17
-> 1 + 2 * 3 + 4
-> 800 / 80 / 8
-> 400 > 200
-> 1 !== 1
-> true || false
-> true && false
-> 20 % 6
-> 'a' + 'b'

******************/
/*
Solutions to problem 1:
Number evaluates to 17
Number evalutes to 11 (multiply 2*3, then add 1 and 4)
Number evalutes to 1.2 (800/80=10; 10/8=1.2)
Boolean evalutes to True (since 400 is greater than 200)
Boolean evalutes to False (since 1 equls 1)
Boolean evaluates to True (true or false = true)
Boolean evaluates to False (true and false = false)
Number (module) evalutes to 2 (20/6 = 4 with remainder of 2) 
String evaluates to ab (will type both strings together)
*/



/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/
/*
Solutions to Problem 2:

Number because JS recognizes it as a number
String because JS uses quotation marks for strings
Boolean because Boolean statements are true or false
False becasue both sides of the "or" statement are false
*/

/******************
PROBLEM 3:

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B| 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 


******************/
/*
Solution Table for: A || B

|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false | 
*/


/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A &&!B| 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

******************/

/*
Truth Table for !A && !B

|   A   |   B   |   !A   |   !B   |!A && !B| 
| true  | true  | false  | false  | false  |
| false | true  | true   | false  | false  |
| true  | false | false  | true   | false  |
| false | false | true   | true   | true   | 
*/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/
/*
Operation for: 2 + 3 * 2 + 1

2 + 3 * 2 + 1
2 +     6 + 1
        8 + 1
            9
*/


/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/
/*
Operation for: 4 / 2 + 8 / 4

4 / 2 + 8 / 4
    2 + 8 / 4
    2 +     2
            4
*/


/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.

/*
Operation for: 'ca' + 'ter' + 'pi' + 'llar'

'ca' + 'ter' + 'pi' + 'llar'
     cater   + 'pi' + 'llar'
            caterpi + 'llar'
                caterpillar

*/



/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/

/*
Operation for: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
      True  && 'car' + 'pool' === 'carpool'
      True  &&     carpool    === 'carpool'
      True  &&  True
      True

*/