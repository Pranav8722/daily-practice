# check given number is divisible by 3 or 5 or both using elif

number = int(input("Enter a number: "))

if number % 3 == 0 and number % 5 == 0:
    print(f"{number} is divisible by both 3 and 5")
elif number % 3 == 0:
    print(f"{number} is divisible by 3 ")
elif number % 5 == 0:
    print(f"{number} is divisible by 5")
else:
    print(f"{number} is not divisible by 3 or 5")
