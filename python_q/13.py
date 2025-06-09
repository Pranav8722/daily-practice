# check given character is uppercase, lowercase, number or special character using if else

char = input("Enter a character: ")

if char.isupper():
    print("The character is an uppercase letter.")
elif char.islower():
    print("The character is a lowercase letter.")
elif char.isdigit():
    print("The character is a number.")
else:
    print("The character is a special character.")