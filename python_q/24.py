string =input("Enter a string: ")
i = 0

while i < len(string):
    if ord(string[i])%2==0:
        c=string[i]
        print(f"Character: {c}, ASCII: {ord(string[i])}")      
    i = i +1
    
   
