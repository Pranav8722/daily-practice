num=10
l=[]
while num<100:
   
    if num<2:
     pass
    else:
        i=2
        while i<num:
            if num%i==0:
                
                break
            i+=1
        else:
            l.append(num)
    num+=1
print(l)
