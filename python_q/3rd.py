# without using id(), check if two values point to the same reference address

a = int(input("Enter first value: "))

b = int(input("Enter second value: "))


if a is b:
    print("Both values point to the same reference address.")
else:
    print("The values do not point to the same reference address.")