# find all the ASCII values of each character from given string using while loop

string =input("Enter a string: ")
i = 0
s=0
while i < len(string):
    c=string[i]
    
    # print(f"Character: {c}, ASCII: {ord(string[i])}")
    s= s+ord(string[i])
    i = i +1
print(s)