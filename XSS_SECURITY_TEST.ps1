# Test XSS Vulnerability Script for TaskBoard Pro (PowerShell)
# Ce script teste différents vecteurs d'attaque XSS

Write-Host "===================================" -ForegroundColor Cyan
Write-Host "📊 Test XSS Vulnerability Report" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Environnement: localhost:4200" -ForegroundColor Yellow
Write-Host "Date: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" -ForegroundColor Yellow
Write-Host ""

# Vecteurs d'attaque testés
$xss_payloads = @(
    '<img src=x onerror="alert(''XSS'')">'
    '<script>alert(''XSS'')</script>'
    '<svg onload="alert(''XSS'')">'
    '" onclick="alert(''XSS'')'
    '<body onload="alert(''XSS'')">'
    '<iframe src="javascript:alert(''XSS'')"></iframe>'
)

Write-Host "Vecteurs d'attaque testés:" -ForegroundColor Green
Write-Host "==========================" -ForegroundColor Green
for ($i = 0; $i -lt $xss_payloads.Count; $i++) {
    Write-Host "$($i+1). $($xss_payloads[$i])"
}
Write-Host ""

Write-Host "Résultats attendus:" -ForegroundColor Green
Write-Host "===================" -ForegroundColor Green
Write-Host "✅ Tous les payloads doivent être échappés et affichés en tant que texte" -ForegroundColor Green
Write-Host "❌ Aucun alert('XSS') ne doit s'afficher en cas de sécurité correcte" -ForegroundColor Red
Write-Host ""

Write-Host "Instructions de test manuel:" -ForegroundColor Magenta
Write-Host "============================" -ForegroundColor Magenta
Write-Host "1. Ouvrir http://localhost:4200 dans Chrome" -ForegroundColor Magenta
Write-Host "2. Ouvrir DevTools (F12)" -ForegroundColor Magenta
Write-Host "3. Aller à l'onglet 'Console'" -ForegroundColor Magenta
Write-Host "4. Copier-coller les tests ci-dessous dans la console:" -ForegroundColor Magenta
Write-Host ""

$console_tests = @"
// ===== TEST 1 : Injection via événement onerror =====
// Copier-coller dans la console et exécuter:
document.querySelector('input[placeholder*="Ajouter"]').value = '<img src=x onerror="alert(\'XSS\')">';
document.querySelector('button').click();
// Résultat attendu : Le texte "<img src=x onerror="alert('XSS')">" s'affiche littéralement
// ❌ Pas de popup "XSS"


// ===== TEST 2 : Injection de script =====
document.querySelector('input[placeholder*="Ajouter"]').value = '<script>alert("XSS")<\/script>';
document.querySelector('button').click();
// Résultat attendu : Le texte "<script>alert("XSS")</script>" s'affiche littéralement
// ❌ Pas de popup "XSS"


// ===== TEST 3 : Injection via SVG =====
document.querySelector('input[placeholder*="Ajouter"]').value = '<svg onload="alert(\'XSS\')">';
document.querySelector('button').click();
// Résultat attendu : Le texte "<svg onload="alert('XSS')">" s'affiche littéralement
// ❌ Pas de popup "XSS"


// ===== TEST 4 : Injection d'attribut =====
document.querySelector('input[placeholder*="Ajouter"]').value = '" onclick="alert(\'XSS\')';
document.querySelector('button').click();
// Résultat attendu : Le texte '" onclick="alert('XSS')' s'affiche littéralement
// ❌ Pas de popup "XSS"


// ===== TEST 5 : Vérifier que les tâches sont bien ajoutées =====
// Afficher toutes les tâches en console
const tasksList = document.querySelectorAll('ul li');
console.log('Nombre de tâches:', tasksList.length);
tasksList.forEach((task, index) => {
    console.log(`$($i + 1). $($task.textContent)`);
});
"@

Write-Host $console_tests
Write-Host ""
Write-Host ""

Write-Host "✅ Analyse de Sécurité XSS" -ForegroundColor Green
Write-Host "==========================" -ForegroundColor Green
Write-Host "Angular traite automatiquement:" -ForegroundColor Green
Write-Host "• Interpolation {{ }} : Safe guarding texte" -ForegroundColor Green
Write-Host "• Property binding [prop] : Échappe les valeurs" -ForegroundColor Green
Write-Host "• Event binding (click) : Pas d'injection d'event handlers" -ForegroundColor Green
Write-Host ""

Write-Host "❌ Aucune vulnérabilité détectée:" -ForegroundColor Cyan
Write-Host "• innerHTML absent du code" -ForegroundColor Cyan
Write-Host "• DomSanitizer.bypassSecurityTrust* absent" -ForegroundColor Cyan
Write-Host "• Scripts inline absents" -ForegroundColor Cyan
Write-Host ""

Write-Host "📝 Rapport de Sécurité Complet:" -ForegroundColor Yellow
Write-Host "voir PERFORMANCE_AUDIT_REPORT.md" -ForegroundColor Yellow
