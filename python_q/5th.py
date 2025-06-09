# check username is valid or not with respect to username rules using list data
valid_usernames = ["user1", "admin", "guest"]
username = input("Enter your username: ") 

if username in valid_usernames:
    print("The username is valid.")
else:
    print("The username is invalid.")