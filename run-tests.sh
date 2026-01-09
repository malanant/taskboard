#!/bin/bash
# Script pour exécuter les tests de TaskBoard Pro avec les bonnes options

echo "🧪 Exécution des tests TaskBoard Pro..."
echo "========================================"

# Exécuter les tests une seule fois (pas de watch)
# --watch=false: n'attend pas les changements
# --code-coverage: génère le rapport de couverture
# --browsers=ChromeHeadless: utilise Chrome en mode headless (plus stable)
npm test -- \
  --watch=false \
  --code-coverage \
  --browsers=ChromeHeadless \
  --single-run \
  --timeout=60000 \
  --poll=10000

echo ""
echo "✅ Tests terminés!"
echo "📊 Rapport de couverture: coverage/index.html"
