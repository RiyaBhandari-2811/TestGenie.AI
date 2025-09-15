# NiyamAI

Your AI-Powered Healthcare Test Case Generator.

## Setup

After cloning the repository or pulling the latest changes, follow these steps to set up your local environment:

### 1. Install Node.js, npm, and npx (if not installed)

1. Download Node.js (includes npm & npx) from [https://nodejs.org/](https://nodejs.org/)  
   **Recommended:** LTS version.

2. Run the installer and keep default settings.  
   Make sure **“Add to PATH”** is checked.

3. Verify installation:

```bash
node -v   # should show Node.js version
npm -v    # should show npm version
npx -v    # should show npx version
````

### 2. Install project dependencies

```bash
npm install
```

> This will also setup Husky hooks automatically if the `prepare` script is in `package.json`.

### 3. Verify Husky hooks

```bash
git add .
git commit -m "test Husky setup"
```

* Husky hooks (like pre-commit or commit-msg) should run automatically.
