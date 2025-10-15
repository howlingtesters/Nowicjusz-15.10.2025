# Przygotowanie do szkolenia - MacOS/Linux

Aby zaoszczędzić wspólny czas, proszę przygotuj środowisko do pierwszych zajęć!  

---

## 🧰 1. Przygotowanie IDE

Podczas szkolenia będziemy korzystać z **Visual Studio Code (VSC)**, ale możesz używać dowolnego innego edytora.

➡️ [Pobierz i zainstaluj Visual Studio Code](https://code.visualstudio.com/)

---

## 💻 2. Weryfikacja wersji Node.js

### Otwieranie terminala w Visual Studio Code

1. Otwórz **Visual Studio Code**  
2. Z menu wybierz: **Terminal → New Terminal**  
3. Na dole ekranu otworzy się terminal  
4. Możesz także wykorzystać zewnętrzny terminal systemu

---

### Instalacja i weryfikacja Node.js

Do zarządzania wersjami Node.js polecam **Node Version Manager (nvm)**:

- [Linux, macOS – nvm-sh](https://github.com/nvm-sh/nvm)

---

### Sprawdzenie wersji nvm:
```sh
nvm -v
```

### Sprawdzenie wersji Node.js:
```sh
node -v
```
lub
```sh
nvm list
```

Przykładowy wynik:
```
24.10.0
24.8.0
```

---

### Jeśli Node.js nie jest zainstalowany:

1. Zainstaluj Node.js bezpośrednio z [nodejs.org](https://nodejs.org/en)  
   **lub**
2. Użyj nvm:
   ```sh
   nvm install node
   ```

Po instalacji zobaczysz komunikat:
```
Computing checksum with sha256sumno
Checksums matched!
Now using node v24.10.0 (npm v11.6.1)
```

Ponownie potwierdź poprawność instalacji:
```sh
node -v
```

Przykładowy wynik:
```
24.10.0
```

---

## 🔌 3. Instalacja wtyczek w Visual Studio Code

1. Otwórz **Visual Studio Code**  
2. Przejdź do zakładki **Extensions** (`command + Shift + X`)  
3. Wyszukaj i zainstaluj:
   - [**Playwright Test for VS Code (Microsoft)**](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
   - [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

## 🌿 4. Przełącz się na swoją własną gałąź w kodzie

---

### Wybierz miejsce pracy

Utwórz lub wybierz katalog, w którym będziesz pracować:

```sh
mkdir /dowolne/miejsce/wygodne/dla/ciebie
cd /dowolne/miejsce/wygodne/dla/ciebie
```

---

### Pobierz repozytorium i przejdź na swoją własną gałąź

1. Otwórz terminal   
2. Sklonuj repozytorium:
```sh
git clone -b https://github.com/howlingtesters/Nowicjusz-15.10.2025.git
```
3. Wpisz komendę:
```sh
git checkout -b 'yourOwnBranchName'
```
4. Lub w lewym panelu wybierz zakładkę source control (`command + Shift + G`)
5. Kliknij na gałąź main w lewym dolnym rogu
6. Wpisz nazwę gałęzi w menu rozwijalnym na górze ekranu
7. Kliknij **+ Create new branch...**
8. Upewnij się, że nazwa gałęzi w lewym dolnym rogu odpowiada nowej nazwie

---

## 🧪 5. Instalacja Playwright

---

### Instalacja Playwright

Podczas szkolenia będę Was często zachęcał do korzystania z dokumentacji **Playwright** (jest naprawdę dobrze napisana!):

👉 [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)

> ⚠️ Na tym etapie możesz wybrać **domyślne opcje instalacji** zgodnie z poleceniami na stronie.  
> ⚠️ Nie musisz przeprowadzać aktualizacji, jeśli instalujesz Playwright po raz pierwszy.  
> ⚙️ Warto jednak regularnie aktualizować istniejącą instalację - dzięki temu masz pewność, że testy uruchamiane są na aktualnych wersjach przeglądarki

---

## ✅ 6. Sprawdzenie poprawności działania

### 🔹 Z poziomu terminala

Przetestuj działanie Playwrighta zgodnie z dokumentacją:  
👉 [https://playwright.dev/docs/intro#running-the-example-test](https://playwright.dev/docs/intro#running-the-example-test)

---

### 🔹 Z poziomu Visual Studio Code

1. Otwórz **Visual Studio Code**  
2. Otwórz plik: `tests/example.spec.ts`  
3. Obok nazwy testu powinna pojawić się **zielona strzałka ▶️** umożliwiająca jego uruchomienie  

Jeśli nie widzisz strzałki:
- Otwórz paletę poleceń: `command + Shift + P`
- Wpisz: `install`
- Wybierz z listy: **Test: Install Playwright**
- Wybierz z listy: **Test: Install Playwright Browsers**

---

🎉 **Gotowe!**  
Twoje środowisko jest przygotowane do pierwszych zajęć.
W razie problemów, pytań lub wątpliwości zapraszam do kontaktu.

Powodzenia!