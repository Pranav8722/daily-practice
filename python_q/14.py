# write a program to check relation between two integers using if else

a = int(input("Enter the first integer: "))
b = int(input("Enter the second integer: "))

if a > b:
    print(f"{a} is greater than {b}")
elif a < b:
    print(f"{a} is less than {b}")
else:
    print(f"{a} is equal to {b}")