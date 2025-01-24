/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/


function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject("Negative values are not allowed.");
      } else {
        resolve(a + b);
      }
    }, 500); 
  });
}

sum(5, 3)
  .then(result => {
    console.log("Result:", result); 
  })
  .catch(error => {
    console.error("Error:", error);
  });

sum(-2, 3)
  .then(result => {
    console.log("Result:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });