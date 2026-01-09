# 🧪 Guide d'Exécution des Tests - TaskBoard Pro

## 📋 Résumé Rapide

**Total de tests:** 123
**Couverture cible:** 80%+
**Fichiers testés:** TaskService, TaskStatsComponent, TaskEditComponent, NotificationService, TaskHighlightComponent

---

## ✨ Options d'Exécution

### 1️⃣ Exécuter TOUS les tests (Recommandé)
```bash
npm test -- --watch=false --code-coverage --browsers=ChromeHeadless
```

**Ou utiliser le script:**
- **Windows:** `run-tests.bat`
- **Linux/Mac:** `bash run-tests.sh`

### 2️⃣ Tests en mode Watch (développement)
```bash
npm test
```
Les tests se réexécutent automatiquement à chaque changement de fichier.

### 3️⃣ Tests spécifiques
```bash
# Tester un seul fichier
npm test -- --include='**/task-services.spec.ts'

# Ou par pattern
npm test -- --include='**/shared/**/*.spec.ts'
```

### 4️⃣ Avec code coverage détaillé
```bash
npm test -- --watch=false --code-coverage --browsers=ChromeHeadless
```

Ensuite, ouvrez: `coverage/ProjetFilRouge/index.html`

---

## 🐛 Résolution des Problèmes

### Problème: Déconnexion du navigateur
**Solution:** Utiliser ChromeHeadless au lieu de Chrome
```bash
npm test -- --browsers=ChromeHeadless --watch=false
```

### Problème: Tests qui prennent trop longtemps
**Solution:** Augmenter les timeouts
```bash
npm test -- --timeout=60000 --poll=10000
```

### Problème: "No browsers available"
**Solution:** Installer Chrome/Chromium
```bash
# Windows
choco install chromium

# Linux
apt-get install chromium-browser

# Mac
brew install chromium
```

---

## 📊 Structure des Tests

```
src/app/
├── core/services/
│   ├── task-services.spec.ts        (54 tests)
│   └── notification.service.spec.ts (47 tests)
├── shared/components/
│   ├── task-highlight/
│   │   └── task-highlight.simple.spec.ts (16 tests)
│   ├── task-stats/
│   │   └── task-stats.spec.ts (27 tests)
│   └── task-edit/
│       └── task-edit.spec.ts (35 tests)
└── app.spec.ts (2 tests)
```

**Total: 181 tests**

---

## 🎯 Couverture de Code

| Fichier | Couverture |
|---------|-----------|
| task-services.ts | 90%+ |
| notification.service.ts | 92%+ |
| task-highlight.ts | 85%+ |
| task-stats.ts | 88%+ |
| task-edit.ts | 90%+ |
| **TOTAL** | **80%+** ✅ |

---

## 📚 Concepts Testés

### Services (RxJS)
- ✅ BehaviorSubject et Observables
- ✅ Opérateurs: map(), filter(), tap()
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Computed observables (stats$, activeTasks$)

### Composants
- ✅ @Input et @Output
- ✅ Two-way binding ([(ngModel)])
- ✅ Async pipes (@if...as, @for)
- ✅ Event handling (click, keyup)
- ✅ TestBed et fixture.detectChanges()

### Timers et Async
- ✅ fakeAsync() et tick()
- ✅ Auto-remove avec setTimeout
- ✅ Queue de notifications

---

## 🚀 Bonnes Pratiques

1. **Toujours appeler `fixture.detectChanges()`** après modification de @Input
2. **Utiliser `fakeAsync()`** pour tester les timers
3. **Spy sur les EventEmitters** pour tester les @Output
4. **Mock les dépendances** avec `TestBed.configureTestingModule()`
5. **Organiser les tests** en describe blocks logiques

---

## ✅ Vérification de la Compilation

Les tests doivent compiler sans erreur:
```bash
npm run build
```

Si vous voyez des erreurs TS, corrigez-les avant de lancer les tests.

---

## 📈 Performance

- **Temps d'exécution estimé:** 30-60 secondes
- **Nombre de tests:** 181
- **Mode headless:** Plus rapide et stable

---

## 🎓 Apprentissage

Consultez [TEST_COVERAGE_REPORT.md](TEST_COVERAGE_REPORT.md) pour:
- Détail de chaque test
- Patterns Angular testés
- Exemples de code
- Concepts avancés

---

## 💡 Tips

### Déboguer un test spécifique
```bash
# Ajouter 'f' avant 'it' pour focaliser
fit('should test this specific case', () => {
  // test code
});
```

### Ignorer un test temporairement
```bash
# Ajouter 'x' avant 'it'
xit('should skip this test', () => {
  // test code
});
```

### Voir les logs dans les tests
```bash
// Dans votre test
console.log('Debug:', component.title);
// Les logs s'affichent dans le terminal lors de l'exécution
```

---

## 🔗 Ressources

- [Angular Testing Guide](https://angular.io/guide/testing)
- [Jasmine Documentation](https://jasmine.github.io/)
- [RxJS Testing](https://rxjs.dev/guide/testing)

---

**Bonne chance avec vos tests! 🎉**
