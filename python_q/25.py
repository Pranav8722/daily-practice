a=int(input("enter the number="))
sum=1

while a>0:
    id=a%10
    
    sum=sum*id
    a=a//10
print("sum of digits=",sum)
