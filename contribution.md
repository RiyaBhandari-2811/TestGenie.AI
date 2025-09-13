# Contributing Guidelines

Welcome to the project! Please read these rules carefully before contributing.

---

## 1️⃣ Branch Naming

Branches must follow this exact regex:

```regex
^(feat|fix|chore|docs|style|refactor|test|build|ci)/[a-z0-9-]+$
```

> Meaning: `<type>/<name>` (lowercase, kebab-case).

Allowed **types**: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `build`, `ci`.

Examples:

```
feat/add-login-page
fix/user-auth-bug
chore/update-dependencies
```
---

## 2️⃣ Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard.

Format:

```
type(scope): subject
```

* **type**: feat | fix | docs | style | refactor | test | chore | build | ci
* **scope**: name of package or area (e.g., frontend, backend, ai)
* **subject**: short imperative description (lowercase, no period)

Examples:

```
feat(frontend): add login form
fix(ai): correct typo in prompt template
```

---

## 3️⃣ Pull Requests

* Open a PR from your branch to `main`.
* At least **2 approvals** are required before merging.
* Keep PRs focused and small where possible.
* Link related issues in the PR description.

---

## 4️⃣ Push Rules

* **Do not push directly to `main`**.
* No force pushes except by the designated maintainer.
* Use PRs for all code changes.

---

## 5️⃣ Code Quality

* Run `npm run lint` or `yarn lint` (for JS/TS) and `mvn verify` or `gradle check` (for Java) before pushing.
* Make sure Prettier and ESLint are configured in your IDE.
* For the AI folder (Python), run `black` and `flake8`.

---

## 6️⃣ Directory Layout

```
root/
├─ frontend/   # React + Vite + TypeScript
├─ backend/    # Java or Node.js
├─ ai/         # Python (Google AI Agent)
```

---

## 7️⃣ Git Hooks

* Husky hooks enforce linting and commit rules.
* Example local guard: pre-push hook prevents pushing to `main`.

---

## 8️⃣ Additional Notes

* Write clear comments for complex logic.
* Keep dependencies minimal.
* Update documentation if you add/remove major functionality.

---

> **Happy contributing! 🚀**
