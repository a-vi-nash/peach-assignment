# peach-assignment
Problem solving assignment solved in javascript

# Questions

 - **Count of Mobile Number:**
 - Ideally, Mobile numbers are of digits (0-9) and all have the same
   length. However, some prefixes may be reserved (like 0 and number
   starting with 1 are toll numbers, and 100 is for Police). This limits
   the total number of possible full-length telephone numbers that are available for general use in the system.
 - You are given two inputs: 
	 - 1) int: digits the length of the mobile numbers in the system. 
	 - 2) String[]: Set of prefixes which are reserved.
 - Compute and return the number of different mobile numbers possible in the system.
 - Definition
	 - Method signature: `int possibleMobileNumbers(int digits, String[] reserved)`
- Constraints
  - digits will be between 1 and 10, inclusive.
  - reserved will contain between 0 and 50 elements, inclusive.
- Examples
	- 7 , ["0","2","100"]
		- Returns: 7990000
	- 6, ["1","2","3"]
		- Returns: 700000
	- 3, ["411"]
		- Returns: 999

 2. Maths Expression
- Given an array of 5 integers how will you make mathematical expression to
achieve the required number using operators(+,- *).
- You are given two inputs: 
	- Integer[]: Array of 5 integers.
	- Number: Number to achieve.
- For Example:
	- If array is [1, 2 ,3, 4, 5] and number to compute is 35 here it can be created by: `((((2*3)*5)+4)+1) =35`
- Compute and return true if mathematical expression can be created or false if we
can't create a mathematical expression return empty array.
- Method signature: `boolean createMathExpression(int[] integers, int number)`
- Examples
	- [ 1 ,1, 1, 1 ,1 ],35
		- Returns: false
	- [1,2 ,3 ,4 ,5],35
		- Returns: true
