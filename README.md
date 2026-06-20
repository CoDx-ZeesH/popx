# PopX – React JS Internship Assignment

A pixel-faithful React recreation of the PopX mobile app screens (Welcome,
Login, Register, Account Settings), built with Vite + React Router DOM and
plain CSS (no Bootstrap / Tailwind / Material UI).

## Tech stack

- React 18 (functional components + hooks only)
- Vite (build tool/dev server)
- React Router DOM v6 (client-side routing)
- Plain CSS files, one per component/page
- `localStorage` for persisting the registered user's name & email

## Folder structure

```
popx-react-app/
├── public/
├── src/
│   ├── assets/                 # reserved for images/icons (all visuals are inline SVG/CSS today)
│   ├── components/
│   │   ├── Button.jsx / Button.css
│   │   ├── InputField.jsx / InputField.css
│   │   └── MobileContainer.jsx / MobileContainer.css
│   ├── pages/
│   │   ├── Welcome.jsx  / Welcome.css   (Page 1)
│   │   ├── Login.jsx    / Login.css     (Page 2)
│   │   ├── Register.jsx / Register.css  (Page 3)
│   │   └── Profile.jsx  / Profile.css   (Page 4 – Account Settings)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## App flow

```
Welcome ──Create Account──▶ Register ──Create Account──▶ Profile (Account Settings)
   └────────Login─────────▶ Login    ──────Login───────▶ Profile (Account Settings)
```

- On **Register**, the form requires Full Name, Phone number, Email address
  and Password. On submit, `{ name, email }` is saved to
  `localStorage` under the key `popx_user`, then the user is routed to
  `/profile`.
- On **Profile**, the component reads `popx_user` from `localStorage` on
  mount and renders the name/email dynamically (falls back to a sample
  user if someone reaches the page via Login without registering first).
- The **Login** button stays disabled (grey) until both fields are filled,
  matching the provided design.

## 1. Installation & running locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build a production bundle (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

## 2. Uploading to GitHub

```bash
# Initialize git (skip if already a repo)
git init

# Stage and commit all files
git add .
git commit -m "PopX React assignment - initial submission"

# Create a new EMPTY repository on GitHub first (no README/license),
# then link it as the remote:
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git

# Push
git push -u origin main
```

Make sure the repository's visibility is set to **Public** so the reviewer
can open it, then copy the repo URL for your submission.

## 3. Deploying to Vercel

**Option A – Vercel dashboard (no CLI needed)**
1. Go to https://vercel.com and sign in (GitHub login is easiest).
2. Click **Add New… → Project** and import the GitHub repository you just
   pushed.
3. Framework preset: Vercel auto-detects **Vite** — leave the defaults
   (Build command: `npm run build`, Output directory: `dist`).
4. Click **Deploy**. Once finished, Vercel gives you a live URL
   (e.g. `https://popx-react-app.vercel.app`).

**Option B – Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to a production URL
```

Submit both the GitHub repository link and the live Vercel URL.
