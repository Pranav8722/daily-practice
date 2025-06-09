num=1
set1=set()

while num<1200:
    a=num
    s=0
    while a>0:
        id=a%10
        fact=1
        while id>0:
            fact=fact*id
            id=id-1
        s=s+fact
        a=a//10
    if num==s:
        set1.add(num)
    num+=1
print(set1)
