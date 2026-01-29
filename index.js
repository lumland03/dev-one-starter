// index.js
console.log('Landon is cool');

// Simple function example
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet('World');
console.log(message);

// Export for use in other files
module.exports = { greet };