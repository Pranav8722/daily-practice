# find all the ASCII values of each character from given string using while loop

string = input("Enter a string: ")
i = 0
ascii_dict = {} 

while i < len(string):
    c = string[i]
    ascii_dict[c] = ord(c) 
    i = i + 1

print(ascii_dict) 