balance = float(input("Enter your account balance: ₹"))
requested_amount = float(input("Enter the amount you want to withdraw: ₹"))

if balance < 500:
    print("Low balance, withdraw not allowed")
elif 500 <= balance <= 1000 and requested_amount == 100:
        print("Withdrawal successful: ₹100")
elif 500 <= balance <= 1000 and requested_amount != 100:
        print("Only ₹100 withdrawal is allowed")
elif 1001 <= balance <= 5000 and requested_amount <= 1000:
        print(f"Withdrawal successful: ₹{requested_amount}")
elif balance > 5000:
    print(f"Withdrawal successful: ₹{requested_amount}")
else:
    print("Invalid input")