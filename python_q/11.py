# according to traffic signals print different messages for different colors using elif

color = input("Enter the traffic signal color (red, yellow, green): ").lower()

if color == "red":
    print("Stop! The signal is red")
elif color == "yellow":
    print("Caution! The signal is yellow Prepare to stop")
elif color == "green":
    print("Go! The signal is green")
else:
    print("Invalid color entered Please enter red, yellow, or green")