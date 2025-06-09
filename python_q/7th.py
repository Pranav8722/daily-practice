# Check the user's result in class of passing using elif statement
marks = float(input("Enter your marks: "))
if 100<marks >= 85:
    print("You passed with Distinction")
elif marks >= 60:
    print("You passed with First Class")
elif marks >= 50:
    print("You passed with Second Class")
elif marks >= 35:
    print("You passed with Third Class")
else:
    print("You failed")