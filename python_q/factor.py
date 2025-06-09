a = 36
b = 60

print("Factors of", a, "are:")
for i in range(1, a + 1):
    if a % i == 0:
        print(i, end=' ')
print()

print("Factors of", b, "are:")
for i in range(1, b + 1):
    if b % i == 0:
        print(i, end=' ')
print()

# Finding HCF without arrays
hcf = 1
for i in range(1, min(a, b) + 1):
    if a % i == 0 and b % i == 0:
        hcf = i

print("HCF of", a, "and", b, "is:", hcf)