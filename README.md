# Unexpected TypeError using === with null and undefined

This repository demonstrates a common JavaScript error that arises from the language's loose typing system. When using the strict equality operator (===) to check for null values, it's crucial to consider the possibility of undefined values as well.  Simply checking for null will not catch undefined, leading to a TypeError.

The `bug.js` file contains a function that incorrectly handles undefined values, resulting in a `TypeError: Cannot read properties of undefined (reading '+')`. The `bugSolution.js` file provides the corrected version.

**To reproduce the bug:**
1. Clone the repository.
2. Open `bug.js`.
3. Run the code using a JavaScript interpreter.
4. Observe the `TypeError` when calling `foo()` with an `undefined` argument.

**To see the solution:**
1. Open `bugSolution.js`
2. Observe how the solution handles both null and undefined values appropriately