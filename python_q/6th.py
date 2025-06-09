# check user is single or commited using dictionary data

user_status = {
    "vinayak": "Single",
    "raj": "Committed",
    "om": "Single",
    "pattya": "Committed"
}

username = input("Enter your username: ").lower()

if username in user_status:
    print(f"{username} is {user_status[username]}.")
else:
    print("User not found.")