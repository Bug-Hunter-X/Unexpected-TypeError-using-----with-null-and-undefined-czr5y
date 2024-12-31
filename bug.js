function foo(a, b) {
  if (a === null || b === null) {
    return null; // This will cause a TypeError if a or b is undefined
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, null)); // Output: null
console.log(foo(1, undefined)); // Output: TypeError: Cannot read properties of undefined (reading '+')