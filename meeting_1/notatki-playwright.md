
## 🧠 1. Playwright – framework do automatyzacji przeglądarek

**Playwright** to framework do automatyzacji testów w przeglądarkach (Chromium, Firefox, WebKit, Edge).

---

### 🌐 Struktura hierarchii obiektów

1. **Browser** → cała instancja przeglądarki  
2. **Context** → niezależne okno / profil użytkownika  
3. **Page** → konkretna karta (tab) w przeglądarce  

Hierarchia:  
**Browser → Context → Page**

---

### 🔹 Browser
To cała instancja przeglądarki.  
W testach rzadko tworzysz ją ręcznie – Playwright robi to przez fixture `browser`.

```js
const browser = await chromium.launch();
```

➡️ Zazwyczaj tworzysz jedną instancję przeglądarki dla całego zestawu testów, aby oszczędzać czas.

---

### 🔹 Browser Context
To **izolowane środowisko użytkownika** w ramach jednej przeglądarki.  
Każdy context ma:
- własne cookies 🍪  
- własny localStorage  
- własne sesje logowania  

```js
const context = await browser.newContext();
```

➡️ Każdy test w Playwright ma **swój własny context**, dzięki czemu testy są od siebie niezależne.

---

### 🔹 Page
To **jedna karta (tab)** w przeglądarce.  
Każdy context może mieć wiele stron.

```js
const page = await context.newPage();
await page.goto('https://example.com');
```

➡️ W testach to najczęściej używany obiekt – tutaj wykonujesz akcje (`click()`, `fill()`, `expect()` itp.).

---

## 🧰 2. Fixtures w Playwright

**Fixtures** to mechanizm Playwrighta, który:
- automatycznie **tworzy, udostępnia i czyści** obiekty (`browser`, `context`, `page`),
- pozwala je **rozszerzać lub nadpisywać**,
- umożliwia **wstrzykiwanie zależności** do testów (jak *dependency injection*).

Dzięki fixtures nie musisz ręcznie tworzyć nowych instancji w każdym teście.

---

## ⚙️ 3. Lifecycle obiektów (przepływ życia)

1. **Start testu**
   - Playwright otwiera `browser` (jeśli jeszcze nie istnieje).

2. **Dla każdego testu**
   - Tworzy nowy `context` (czysta sesja).  
   - Tworzy nowy obiekt `page`.

3. **Po teście**
   - Zamyka `page` i `context`.

4. **Po wszystkich testach**
   - Zamyka `browser`.

---
