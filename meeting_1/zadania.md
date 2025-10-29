# 🧠 Zadania – Playwright

---
## 1. Operacje na gałęziach i testach

### 1.1
Przełącz się na gałąź `meeting_1`.

### 1.2
Z tego miejsca przejdź na **własną gałąź**.

### 1.3
Dodaj do testu **otwarcie nowego okna**.

### 1.4
Dodaj do testu **otwarcie nowej zakładki**.

### 1.5
Otwórz **dowolną stronę w nowym oknie**.

### 1.6
Otwórz **dowolną stronę w nowej zakładce**.

---
## 2. Debugowanie i uruchamianie testów

### 2.1
Dodaj debug przy pomocy:
```ts
page.pause()
```

### 2.2
Uruchom testy:
- w trybie **headless**
- w trybie **headed**

---
## 3. Konfiguracja i eksperymenty z testami

### 3.1
Dodaj **drugi plik konfiguracyjny Playwright** tak, aby uruchamiał testy z folderu `meeting_1`.

### 3.2
Uruchom **tylko test flaky** lub **tylko test promise**, używając:
- powtarzania nieudanych testów (`retries`)
- filtrowania nazw (`grep`)

### 3.3
Spraw, aby **dowolny test się nie udał**  
(np. użyj `expect(false).toEqual(true)`).

### 3.4
Sprawdź zachowanie testu z różnymi flagami:
- `.fail`
- `.skip`
- `.only`

### 3.5
Usuń fałszywy warunek i uruchom test z komendą:
```bash
--last-failed
```
### 3.6
Spróbuj ponownie użyć tej komendy.

---
## 4. Uruchamianie testów równolegle

### 4.1
Spróbuj uruchomić testy z folderu `meeting_1` w **wielu wątkach** na jednej przeglądarce.

### 4.2
Uruchom testy z pliku:
```
tests/example.spec.ts
```
w wielu wątkach na jednej przeglądarce.

### 4.3
Powtórz uruchomienie testów z pliku:
```
tests/example.spec.ts
```
w wielu wątkach na jednej przeglądarce (dla porównania wyników).

---