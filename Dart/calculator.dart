import 'dart:io';

void main() {
  print(
    "Choose your operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division",
  );

  int? operation = int.tryParse(stdin.readLineSync() ?? '');
  if (operation == null || operation < 1 || operation > 4) {
    print("Invalid choice. Please enter a number between 1 and 4.");
    return;
  }

  print("First Number: ");
  num? a = num.tryParse(stdin.readLineSync() ?? '');
  if (a == null) {
    print("Invalid input. Please enter a valid number.");
    return;
  }

  print("Second Number: ");
  num? b = num.tryParse(stdin.readLineSync() ?? '');
  if (b == null) {
    print("Invalid input. Please enter a valid number.");
    return;
  }

  num result;
  switch (operation) {
    case 1:
      result = add(a, b);
      break;
    case 2:
      result = subtract(a, b);
      break;
    case 3:
      result = multiply(a, b);
      break;
    case 4:
      if (b == 0) {
        print("Error: Division by zero is not allowed.");
        return;
      }
      result = divide(a, b);
      break;
    default:
      print("Invalid operation.");
      return;
  }

  print("Result: $result");
}

num add(num a, num b) => a + b;
num subtract(num a, num b) => a - b;
num multiply(num a, num b) => a * b;
num divide(num a, num b) => a / b;
