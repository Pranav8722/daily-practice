# create a simple alarm system for user to have dinner if it is weekend eat biryani or weekdays eact

weekday=['monday','tuesday','wednesday','thursday','friday']
weekend=['saturday','sunday']

day = input("enter the day : ").lower()

if day in weekend:
    print("eat biryani")
elif day in weekday:
    print("eat pg food")
else:
    print("enter valid day")