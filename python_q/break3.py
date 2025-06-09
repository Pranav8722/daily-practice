lst = eval(input("Enter a list: "))
value =eval(input("Enter a value to search: "))
i=0
while i < len(lst):
    if value in lst:
        print("Value found ",value)
        break
    print(lst[i])
    i = i + 1