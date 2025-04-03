// Function to perform the selected operation
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Invalid operator.";
    }
}

// Main function to run the calculator
function calculator() {
    console.log("Welcome to the Calculator!");
    console.log("Available operations: +, -, *, /");

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the first number: ", (firstInput) => {
        const num1 = parseFloat(firstInput);
        if (isNaN(num1)) {
            console.log("Invalid input. Please enter a valid number.");
            rl.close();
            return;
        }

        rl.question("Enter the second number: ", (secondInput) => {
            const num2 = parseFloat(secondInput);
            if (isNaN(num2)) {
                console.log("Invalid input. Please enter a valid number.");
                rl.close();
                return;
            }

            rl.question("Enter an operator (+, -, *, /): ", (operator) => {
                const result = calculate(num1, num2, operator);
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

// Run the calculator
calculator();