# print sum of all integers from given list using while loop
n=eval(input("Enter a list of integers: "))
# n = [1, 2, 3, 4, 5]  
total = 0
index = 0

while index < len(n):
    if type(n[index]) == int:
        
     total =total + n[index]
     index = index+1

print("Sum of all integers:", total)