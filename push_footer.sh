#!/bin/bash
cd "/c/Users/LENOVO/OneDrive/Documents/Portfolio-main"
git add src/react-app/components/Footer.tsx
git add src/react-app/pages/Home.tsx
git add src/react-app/pages/About.tsx
git add src/react-app/pages/Experience.tsx
git add src/react-app/pages/Projects.tsx
git add src/react-app/pages/Contact.tsx
git commit -m "feat: add premium stylish footer component to all pages

- Create new Footer.tsx component with gradient effects and animations
- Responsive footer with brand section, navigation, tech stack
- Social media links with custom hover effects
- CV download CTA and opportunity status
- Integrate Footer component across all pages
- Replace hardcoded footers with reusable Footer component"
git push origin main
