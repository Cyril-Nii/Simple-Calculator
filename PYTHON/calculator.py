
print("Heyy,\nThis is a simple program to perform arithmetic operations on two numbers")

choice = input("Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n")


def add_numbers(a,b):
    return(a+b)

def sub_numbers(a,b):
    return(a-b)

def mul_numbers(a,b):
    return(a*b)

def div_numbers(a,b):
    return(a/b)



try:
    #Convert inputs to floats
    a = float(input("Enter the first number: "))
    b = float(input("Enter the second number: "))
    
    if choice == "1":
        print(f"The result of addition is: {add_numbers(a, b)}")
        
    elif choice == "2":
        print(f"The result of subtraction is: {sub_numbers(a, b)}")
        
    elif choice == "3":
        print(f"The result of multiplication is: {mul_numbers(a, b)}")
        
    elif choice == "4":
        if b != 0:  # Avoid division by zero
            print(f"The result of division is: {div_numbers(a, b)}")
        else:
            print("Division by zero is not allowed.")
            
    else:
        print("Invalid choice. Please select a valid operation (1-4).")
        
        
except ValueError:
    # Handle non-numeric input
    print("Invalid input! Please enter numeric values for the numbers.")







