# Program to check which quadrant a given point lies in

x = float(input("Enter the x-coordinate: "))
y = float(input("Enter the y-coordinate: "))

if x > 0 and y > 0:
    print("The point lies in the First Quadrant.")
elif x < 0 and y > 0:
    print("The point lies in the Second Quadrant.")
elif x < 0 and y < 0:
    print("The point lies in the Third Quadrant.")
elif x > 0 and y < 0:
    print("The point lies in the Fourth Quadrant.")
elif x == 0 and y != 0:
    print("The point lies on the Y-axis.")
elif y == 0 and x != 0:
    print("The point lies on the X-axis.")
else:
    print("The point is at the Origin.")