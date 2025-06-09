data=eval(input("Enter a list: "))
mutable=[list,dict,set]
immutable=[]
i=0
while i<len(data):
    if type(data[i]) not in mutable:
        immutable.append(data[i])
    i=i+1
print(immutable)
