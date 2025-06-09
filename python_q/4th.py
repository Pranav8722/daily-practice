def check_data_type(data):
    if data == "insvdt":
        return "Data is insvdt"
    elif data == "mvdt":
        return "Data is mvdt"
    else:
        return "Unknown data type"

data = input("Enter the data: ").strip()
result = check_data_type(data)
print(result)