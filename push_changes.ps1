cd "c:\Users\LENOVO\OneDrive\Documents\Portfolio-main"
git status
echo "---"
git add src/react-app/components/ScrollToTop.tsx src/App.tsx
echo "Files added"
git diff --cached --stat
echo "---"
git commit -m "fix: add ScrollToTop component and improve routing

- Create ScrollToTop.tsx component for automatic page scroll reset
- Update App.tsx with AppContent wrapper for proper Router context
- Ensure all navbar transitions scroll to top immediately
- Add requestAnimationFrame for cross-browser scroll reliability"
echo "---"
git log --oneline -3
echo "---"
git push origin main
