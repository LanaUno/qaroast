# Playwright Test Automation Project

## 📌 Project Description
This project contains automated UI tests built with **Playwright**.  
The goal is to verify the functionality of a web application such as:

- Track search
- Adding tracks to playlist
- Playlist duration validation

Tests follow the **Page Object Model (POM)** pattern to keep the code maintainable and scalable.

---

## 🛠 Tech Stack
- Node.js
- Playwright
- JavaScript
- Dotenv (for environment variables)

---

## ⚙️ Installation

Clone repository:

```bash
git clone <repository-url>
cd project-name

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install
▶️ Running Tests

Run all tests:

npx playwright test

Run a specific test file:

npx playwright test tests/search.spec.js

Run tests in headed mode:

npx playwright test --headed

Run tests in UI mode:

npx playwright test --ui
📊 Test Report

After test execution Playwright generates a report.

Open report:

npx playwright show-report
🌍 Environment Variables

This project uses dotenv for environment variables.

Create a .env file in the root folder:

BASE_URL=https://example.com

---
