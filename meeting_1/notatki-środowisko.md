# 📘 Podstawy JavaScript, TypeScript, Node.js, npm i Playwright

---

## 🧩 1. JavaScript (JS)

**JavaScript (JS)** to język programowania stworzony do obsługi interakcji na stronach internetowych — po stronie przeglądarki (frontend).

### 🔹 Cechy JavaScript:
- **Dynamicznie typowany** – nie musisz określać typu zmiennej.  
  ```js
  let name = "Jan"; // JS sam wie, że to string
  ```
- **Interpretowany** – nie wymaga kompilacji przed uruchomieniem.
- **Elastyczny** – pozwala pisać szybko, ale może prowadzić do trudnych do wykrycia błędów.
- **Skryptowy** – można go uruchomić bezpośrednio w przeglądarce lub w Node.js.

---

## 🧩 2. TypeScript (TS)

**TypeScript (TS)** to nadrzędny język nad JavaScriptem, stworzony przez Microsoft.

Zawiera wszystko, co ma JavaScript, **+ dodatkowo typowanie oraz narzędzia dla dużych projektów**.

### 🔹 Cechy TypeScript:
- **Statycznie typowany** – możesz (a nawet powinieneś) określać typy zmiennych, funkcji itp.  
  ```ts
  let name: string = "Jan";
  let age: number = 25;
  ```
- **Kompilowany** – przeglądarka nie rozumie TS bezpośrednio, więc trzeba go skompilować do JS.
- **Wykrywa błędy przed uruchomieniem kodu** – co zwiększa bezpieczeństwo i stabilność aplikacji.

---

## ⚙️ 3. Node.js – silnik uruchamiający JavaScript poza przeglądarką

**Node.js** to środowisko, które pozwala uruchamiać JavaScript na komputerze lub serwerze.

### 🔹 Co daje Node.js:
- Możesz pisać **skrypty, serwery i API**, nie tylko frontend.
- Działa na silniku **V8** (tym samym, który napędza Google Chrome).
- Umożliwia instalowanie bibliotek przez **npm**.
- Pozwala tworzyć **aplikacje backendowe** (np. w frameworku Express.js).

---

## 📦 4. npm – menedżer paczek dla JavaScript i TypeScript

**npm (Node Package Manager)** to narzędzie do instalacji i zarządzania bibliotekami (pakietami) używanymi w projekcie.

### 🔧 Przykłady użycia:
```bash
npm init -y               # tworzy projekt z plikiem package.json
npm install express       # instaluje bibliotekę express
npm install typescript    # instaluje kompilator TypeScript
```

Wszystkie biblioteki trafiają do folderu **`node_modules/`**,  
a ich wersje zapisują się w pliku **`package.json`**.

📘 Dzięki temu można łatwo współdzielić projekt — inni uruchomią go wpisując tylko:
```bash
npm install
```

---

## 🔹 5. npm install vs npm ci (clean install)

### **`npm install`**
Standardowa komenda instalacji pakietów.

**Co robi:**
- Sprawdza plik `package.json`.
- Jeśli istnieje `package-lock.json`, npm próbuje go uwzględnić, ale:
  - Może **zaktualizować** `package-lock.json`, jeśli wersje w `package.json` się zmieniły.
  - Może **pobrać najnowsze zgodne wersje** zależności.
- Jeśli folder `node_modules/` nie istnieje – tworzy go i instaluje wszystkie zależności.
- Jeśli folder istnieje – **dodaje tylko brakujące pakiety**.

👉 Używane **na co dzień podczas developmentu**, gdy potrzebna jest elastyczność.

---

### **`npm ci` (clean install)**
Czysta instalacja — szybsza i bardziej przewidywalna.

**Co robi:**
- **Wymaga** pliku `package-lock.json`.
- **Ignoruje** wersje z `package.json` — instaluje dokładnie te z `package-lock.json`.
- **Usuwa folder `node_modules/`**, a następnie instaluje wszystko od nowa.
- **Nie modyfikuje** pliku `package-lock.json`.
- Działa szybciej, bo pomija część kontroli wersji.

👉 Używane głównie w **CI/CD (Continuous Integration)**, gdzie ważna jest powtarzalność środowiska.

---