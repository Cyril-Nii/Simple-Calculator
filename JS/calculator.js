const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arithmetic functions
const addNumbers = (a, b) => a + b;
const subNumbers = (a, b) => a - b;
const mulNumbers = (a, b) => a * b;
const divNumbers = (a, b) => a / b;

console.log("Heyy,\nThis is a simple program to perform arithmetic operations on two numbers");

const promptOperation = () => {
  readline.question(
    `Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n`,
    (choice) => {
      if (!["1", "2", "3", "4"].includes(choice)) {
        console.log("Invalid choice. Please select a valid operation (1-4).");
        promptOperation(); // Re-prompt for operation
        return;
      }

      readline.question("Enter the first number: ", (a) => {
        readline.question("Enter the second number: ", (b) => {
          a = parseFloat(a);
          b = parseFloat(b);

          if (isNaN(a) || isNaN(b)) {
            console.log("Invalid input! Please enter numeric values for the numbers.");
            readline.close();
            return;
          }

          let result;
          switch (choice) {
            case "1":
              result = addNumbers(a, b);
              console.log(`The result of addition is: ${result}`);
              break;
            case "2":
              result = subNumbers(a, b);
              console.log(`The result of subtraction is: ${result}`);
              break;
            case "3":
              result = mulNumbers(a, b);
              console.log(`The result of multiplication is: ${result}`);
              break;
            case "4":
              if (b !== 0) {
                result = divNumbers(a, b);
                console.log(`The result of division is: ${result}`);
              } else {
                console.log("Division by zero is not allowed.");
              }
              break;
          }

          readline.close();
        });
      });
    }
  );
};

// Start the program
promptOperation();