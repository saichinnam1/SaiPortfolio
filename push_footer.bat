@echo off
chdir /d "c:\Users\LENOVO\OneDrive\Documents\Portfolio-main"
git add src/react-app/components/Footer.tsx
git add src/react-app/pages/Home.tsx
git add src/react-app/pages/About.tsx
git add src/react-app/pages/Experience.tsx
git add src/react-app/pages/Projects.tsx
git add src/react-app/pages/Contact.tsx
git commit -m "feat: add premium stylish footer component to all pages"
git push origin main
echo Done!
pause
