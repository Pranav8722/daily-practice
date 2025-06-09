input=input("Enter a string: ").lower()
i=0
vowels = "aeiou"
ex_vowels = ""
while i < len(input):
    if input[i] in vowels:
        break
    print(input[i])
    i = i + 1
    