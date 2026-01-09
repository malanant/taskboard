@echo off
REM Script pour exécuter les tests de TaskBoard Pro avec les bonnes options

echo 🧪 Exécution des tests TaskBoard Pro...
echo ========================================

REM Exécuter les tests une seule fois (pas de watch)
REM --watch=false: n'attend pas les changements
REM --code-coverage: génère le rapport de couverture
REM --browsers=ChromeHeadless: utilise Chrome en mode headless (plus stable)

npm test -- ^
  --watch=false ^
  --code-coverage ^
  --browsers=ChromeHeadless ^
  --single-run ^
  --timeout=60000

echo.
echo ✅ Tests terminés!
echo 📊 Rapport de couverture: coverage/index.html
pause
