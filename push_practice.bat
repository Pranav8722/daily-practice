@echo off
:: Set working directory
cd /d "C:\Users\prana\OneDrive\Documents\Desktop\Qspiders"

:: Ask for a commit message
set /p commitMsg="Enter commit message: "

:: Git commands
git add .
git commit -m "%commitMsg%"
git push

echo ---------------------------------
echo Code pushed to GitHub successfully!
pause
