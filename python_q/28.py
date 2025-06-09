n=int(input("enter the number="))
a=n
s=0
while n>0:
    id=n%10
    fact=1
    while id>0:
        fact=fact*id
        id=id-1
    s=s+fact
    n=n//10
if s==a:
    print("strong number")  
else:
    print("not a strong number")