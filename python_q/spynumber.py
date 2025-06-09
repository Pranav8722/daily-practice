# check given number is spy number or not without using function

num = int(input("Enter a number: "))
sum_digits = 0
prod_digits = 1
temp = num

while temp > 0:
    digit = temp % 10
    sum_digits += digit
    prod_digits *= digit
    temp //= 10

if sum_digits == prod_digits:
    print(f"{num} is a Spy Number")
else:
    print(f"{num} is not a Spy Number")
    