# extract vowels from the string using while loop
input=input("Enter a string: ").lower()
i=0
vowels = "aeiou"
ex_vowels = ""
while i < len(input):
    if input[i] in vowels:
        ex_vowels+= input[i]
    i = i + 1
print(ex_vowels)