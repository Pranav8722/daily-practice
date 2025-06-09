import random 
s=""
i=1
while i<5:
    a=random.randint(0,9)
    s=s+str(a)+' '
    i+=1
print(s)
number=input("enter the number=")
if len(number)==10 and number=="8722407643":
    pin=input("enter the pin")
    if len(pin)==4 and pin =="8722":
        print("pin is correct")
        otp=input("enter the otp")
        if otp==s:
            print("login succesfull....!!")
        else:
            print("otp is incorrect")
    else:
        print("pin is incorrect")
else:
    print("number is incorrect")    