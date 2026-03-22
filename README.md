# 💰 FinanceOS — Personal Finance Manager

A mobile-first Progressive Web App (PWA) for tracking income, expenses, savings, and budget. Features **Chinky Yamanin** gamified savings, receipt scanner (AI), one-record expenses, custom categories, and smart budget alerts.

---

## 📲 Install as an App (after deploying)

### Android
1. Open your GitHub Pages URL in **Chrome**
2. Tap the **"Install"** banner that appears, OR tap Chrome menu (⋮) → **"Add to Home Screen"**
3. FinanceOS appears on your home screen like a native app ✅

### iPhone / iPad
1. Open your GitHub Pages URL in **Safari**
2. Tap the **Share button** (□↑) at the bottom
3. Tap **"Add to Home Screen"**
4. Tap **"Add"** ✅

---

## 🚀 Deploy to GitHub Pages — Step by Step

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a New Repository
1. Click the **+** button (top right) → **"New repository"**
2. Name it: `financeos` (or anything you like)
3. Set to **Public**
4. Do NOT check "Add README" (we already have one)
5. Click **"Create repository"**

### Step 3 — Upload the Files
**Option A — Upload via GitHub website (easiest):**
1. On your new empty repo page, click **"uploading an existing file"**
2. Drag and drop ALL files from this folder:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `.nojekyll`
   - The entire `icons/` folder
   - The `.github/` folder
3. Scroll down, click **"Commit changes"**

**Option B — Use Git (if you have it installed):**
```bash
cd financeos-pwa
git init
git add .
git commit -m "Initial FinanceOS deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/financeos.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Click **"Pages"** in the left sidebar
3. Under **"Source"**, select **"GitHub Actions"**
4. Click **Save**

### Step 5 — Wait ~2 Minutes
GitHub will automatically build and deploy your app.
Check the **Actions** tab to see the deploy progress.

### Step 6 — Get Your URL!
Your app will be live at:
```
https://YOUR_USERNAME.github.io/financeos/
```

Share this URL with anyone — they can install it as an app too!

---

## ✨ Features

| Feature | Description |
|---|---|
| 💵 Income | Track salary, freelance, side hustle |
| 🛒 Expenses | 6 categories + custom categories |
| 🎁 Allowance | Track money from parents |
| 💰 Savings | With Chinky Yamanin gamification |
| 🎯 Budget | Monthly auto-reset, ₱6,480 defaults |
| 📋 One Record | Log multiple expenses in one go |
| 📷 Receipt Scanner | AI-powered (Claude AI) |
| 🔢 Calculator | Standard + loan calculator |
| 💡 Tips & Alerts | Smart budget notifications |
| ✏️ Edit Records | Edit or delete any transaction |
| 📴 Works Offline | Service worker caches everything |

---

## 🔒 Privacy

All your financial data is stored **100% locally** on your device using `localStorage`. Nothing is ever sent to any server (except when using the AI receipt scanner, which sends the image to Claude API).

---

## 🐷 Chinky Yamanin

A gamified savings companion! Save money to earn XP, level up (7 levels), collect badges, and set savings goals. The more you save, the more Chinky evolves!

---

*Built with ❤️ — No frameworks, pure HTML/CSS/JS*
