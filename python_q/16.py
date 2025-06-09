# Function to process the character input
char = input("Enter a character: ")
if 'A' <= char <= 'Z':  
        print(chr(ord(char) + 32))  
elif 'a' <= char <= 'z':  
        print(chr(ord(char) - 32))  
elif '0' <= char <= '9': 
        print(int(char) % 3)  
else:  
        print(ord(char)) 

