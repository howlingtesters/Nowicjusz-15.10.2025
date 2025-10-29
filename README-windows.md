# Przygotowanie do szkolenia - Windows

Aby zaoszczędzić wspólny czas, proszę przygotuj środowisko do pierwszych zajęć!  

---

## 🧰 1. Przygotowanie IDE

Podczas szkolenia będziemy korzystać z **Visual Studio Code (VSC)**, ale możesz używać dowolnego innego edytora.

➡️ [Pobierz i zainstaluj Visual Studio Code](https://code.visualstudio.com/)

---

## 🌿 2. Przełącz się na swoją własną gałąź w kodzie

---

### Otwieranie konsoli w Visual Studio Code

1. Otwórz **Visual Studio Code**  
2. Z menu wybierz: **Terminal → New Terminal**  
3. Na dole ekranu otworzy się konsola  
4. Kliknij **strzałkę obok znaku “+”**, aby wybrać rodzaj konsoli  
> 💡 Zalecane:  
> - **PowerShell**
> - **Commmand Prompt (Default)**
> - **Git Bash** - wymaga instalacji [git](https://git-scm.com/downloads/win)

Na komputerach firmowych niektóre konsole mogą mieć ograniczone uprawnienia.

---

### Pobierz repozytorium i przejdź na swoją własną gałąź

Jeśli nie masz zainstalowanego git for Windows: [git](https://git-scm.com/downloads/win)

1. Otwórz konsolę   
2. Sklonuj repozytorium:
```sh
cd wygodny/folder/dla/ciebie
git clone https://github.com/howlingtesters/Nowicjusz-15.10.2025.git
cd Nowicjusz-15.10.2025
```
3. Otwórz Visual Studio Code we wskazanym folderze 
4. W konsoli w folderze Nowicjusz-15.10.2025 wpisz komendę:
```sh
git checkout -b 'yourOwnBranchName'
```
5. Lub w lewym panelu wybierz zakładkę source control (`Ctrl + Shift + G`)
6. Kliknij na gałąź main w lewym dolnym rogu
7. Wpisz nazwę gałęzi w menu rozwijalnym na górze ekranu
8. Kliknij **+ Create new branch...**
9. Upewnij się, że nazwa gałęzi w lewym dolnym rogu odpowiada nowej nazwie

---

## 💻 3. Weryfikacja wersji Node.js

---

### Instalacja i weryfikacja Node.js

Do zarządzania wersjami Node.js polecam **Node Version Manager (nvm)**:

- [Windows – nvm-windows](https://github.com/coreybutler/nvm-windows) - po instalacji może być potrzebne ponownie uruchomienie konsoli!
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
Complete
Installation complete.
If you want to use this version, type:

nvm use 24.10.0
```

Przełącz wersję na nowo zainstalowaną:
```sh
nvm use 24.10.0
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

## 🔌 4. Instalacja wtyczek w Visual Studio Code

1. Otwórz **Visual Studio Code**  
2. Przejdź do zakładki **Extensions** (`Ctrl + Shift + X`)  
3. Wyszukaj i zainstaluj:
   - [**Playwright Test for VS Code (Microsoft)**](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
   - [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

## 🧪 5. Instalacja Playwright

---

### Instalacja Playwright

Podczas szkolenia będę Was często zachęcał do korzystania z dokumentacji **Playwright** (jest naprawdę dobrze napisana!):

👉 [https://playwrightnpm init playwright@latest

.dev/docs/intro](https://playwright.dev/docs/intro)

> ⚠️ Na tym etapie możesz wybrać **domyślne opcje instalacji** zgodnie z poleceniami na stronie.  
> ⚠️ Nie musisz przeprowadzać aktualizacji, jeśli instalujesz Playwright po raz pierwszy.  
> ⚙️ Warto jednak regularnie aktualizować istniejącą instalację - dzięki temu masz pewność, że testy uruchamiane są na aktualnych wersjach przeglądarki

---

## ✅ 6. Sprawdzenie poprawności działania

### 🔹 Z poziomu konsoli

Przetestuj działanie Playwrighta zgodnie z dokumentacją:  
👉 [https://playwright.dev/docs/intro#running-the-example-test](https://playwright.dev/docs/intro#running-the-example-test)

---

### 🔹 Z poziomu Visual Studio Code

1. Otwórz **Visual Studio Code**  
2. Otwórz plik: `tests/example.spec.ts`  
3. Obok nazwy testu powinna pojawić się **zielona strzałka ▶️** umożliwiająca jego uruchomienie  

Jeśli nie widzisz strzałki:
- Spróbuj otworzyć zakładkę Testing z lewego panelu
- Zainstaluj przeglądarki z konsoli: npx playwright install
- Otwórz paletę poleceń: `Ctrl + Shift + P`
- Wpisz: `install`
- Wybierz z listy: **Test: Install Playwright**
- Wybierz z listy: **Test: Install Playwright Browsers**

---

🎉 **Gotowe!**  
Twoje środowisko jest przygotowane do pierwszych zajęć.
W razie problemów, pytań lub wątpliwości zapraszam do kontaktu.

Powodzenia!
