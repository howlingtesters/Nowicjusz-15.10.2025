# 🧪 Playwright – najczęściej używane komendy testowe

---

## 🚀 Uruchamianie testów

```bash
# Uruchom wszystkie testy we wszystkich przeglądarkach określonych w pliku konfiguracyjnym
npx playwright test
```

```bash
# Uruchom testy z danego pliku bez ponownych prób (retries) na 3 wątkach (workers)
npx playwright test example.spec.ts --retries=0 --workers=3
```

```bash
# Uruchom test znajdujący się w określonej linii wewnątrz pliku example.spec.ts
npx playwright test example.spec.ts:10
```

---

## 📋 Przeglądanie testów

```bash
# Wylistuj testy bez ich uruchamiania
npx playwright test --list
```

---

## 🎯 Filtrowanie testów

```bash
# Uruchom testy, których nazwa zawiera dowolne znaki, a następnie „title”
npx playwright test --grep '.*title'
```

```bash
# Uruchom testy, których nazwa NIE zawiera „title”
npx playwright test --grep-invert 'title'
```

---

## 🧭 Tryby uruchamiania

```bash
# Uruchom testy z interfejsem graficznym (UI)
npx playwright test --ui
```

```bash
# Uruchom tylko w wybranych przeglądarkach
npx playwright test --project webkit --project firefox
```

```bash
# Uruchom testy, które nie powiodły się w poprzednim przebiegu
npx playwright test --last-failed
```

```bash
# Zatrzymaj przebieg testów po określonej liczbie błędów (np. po 1 błędzie)
npx playwright test --max-failures=1
```

```bash
# Uruchom testy w trybie debugowania
npx playwright test --debug
```

```bash
# Uruchom testy w trybie z widocznym oknem przeglądarki (domyślnie headless)
npx playwright test --headed
```

---

## 🧾 Raportowanie i konfiguracja

```bash
# Zmień rodzaj reportera (np. na „dot”)
npx playwright test --reporter=dot
```

```bash
# Użyj innego pliku konfiguracyjnego niż domyślny
npx playwright test --config=playwright.config.ts
```

```bash
# Oznacz test jako nieudany, jeśli jest niestabilny (flaky)
# Domyślnie test flaky jest traktowany jako zaliczony (passed)
npx playwright test --fail-on-flaky-tests
```

---

## 🧩 Adnotacje testów

```js
// test.skip() – ten test nie zostanie uruchomiony
// test.fail() – ten test zostanie uruchomiony, ale jest spodziewane, że zakończy się błędem
// test.fixme() – ten test nie zostanie uruchomiony i jest oznaczony jako problematyczny
// test.slow() – ten test ma trzykrotnie więcej czasu na wykonanie
```

---

📘 **Wskazówka:**  
Aby uzyskać pełną listę dostępnych opcji, możesz wpisać:
```bash
npx playwright test --help
```
