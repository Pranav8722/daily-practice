a=int(input("enter the number="))
sum=0
while a>0:
    id=a%10
    sum+=id
    a=a//10  
print(f'sum of digits = ',sum)
