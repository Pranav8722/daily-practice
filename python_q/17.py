# 1. Write a program to take combo number and type (veg/non-veg) as input and display what combo the person actually gets.
# A restaurant offers different combos:
# Combo A: if person chooses 1 and is vegetarian.
# Combo B: if person chooses 2 and is non-vegetarian.
# Combo C: if person chooses 1 but mistakenly says non-veg.

combo_number = int(input("Enter combo number 1 or 2: "))
combo_type = input("Enter type veg/non-veg: ").lower()

if combo_number == 1 and combo_type == "veg":
    print("You get Combo A")
elif combo_number == 2 and combo_type == "non-veg":
    print("You get Combo B")
elif combo_number == 1 and combo_type == "non-veg":
    print("You get Combo C")
elif combo_number == 2 and combo_type == "veg":
    print("You get Combo D")
else:
    print("Invalid input")