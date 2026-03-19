# simple-date-formatter

A lightweight utility for formatting JavaScript dates into commonly used formats.

## Features

* ISO format (`YYYY-MM-DD`)
* Human-readable short date (`9 Mar 2026`)
* Full long date (`Monday, March 9, 2026`)

🚧 *In development:*

* Date and time formatter
* Time-only formatter

---

## 📦 Installation

```bash
npm install @oluwanifemi/date-formatt
```
 
## Usage

> ⚠️ This package currently expects a **string input in the format `YYYY-MM-DD`**

```js
const formatter = require("@oluwanifemi/date-formatt")

const date = "2026-03-09"

console.log(formatter.iso(date))    // 2026-03-09
console.log(formatter.short(date))  // 9 Mar 2026
console.log(formatter.long(date))   // Monday, March 9, 2026
```

 

## 🧠 API

### `iso(dateString)`

Returns date in ISO format.

### `short(dateString)`

Returns a short human-readable date.

### `long(dateString)`

Returns a full descriptive date.

---

## ⚠️ Input Requirements

* Input must be a **string**
* Format must be: `YYYY-MM-DD`
* Invalid inputs will throw an error

---

## 🛠 Example

```js
const { iso } = require("@oluwanifemi/date-formatt")

const result = iso("2026-03-09")

console.log(result) // 2026-03-09
```

---

## 📄 License

ISC

---

## 👨‍💻 Author

Kazeem Oluwanifemi

---

## 💡 Motivation

This package was built as a simple utility to make date formatting easier and more readable in Node.js applications.
