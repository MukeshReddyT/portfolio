# T. Mukesh Reddy - Personal Portfolio Source Code & Distribution

This directory contains the complete source code and export files for **T. Mukesh Reddy's** personal portfolio.

---

## Folder Structure

```
portfolio-export/
├── standalone/
│   └── index.html          # Ready-to-use, 100% self-contained file (open in any browser directly)
├── source/
│   ├── src/
│   │   ├── components/     # React modular components (Navbar, Hero, About, Skills, Projects, Achievements, Contact, Footer, ResumeModal)
│   │   │   └── ProjectModals/ # Interactive simulation modals (Voter, ATM, Grade Calculator)
│   │   ├── data/           # Portfolio content and data repository
│   │   ├── App.tsx         # Main application layout
│   │   ├── main.tsx        # React root entry point
│   │   ├── types.ts        # TypeScript data schemas
│   │   └── index.css       # Global styles and typography
│   ├── index.html          # HTML entry point for Vite
│   ├── package.json        # Dependencies & scripts
│   ├── vite.config.ts      # Vite configuration
│   └── tsconfig.json       # TypeScript configuration
└── README.md               # Guide and deployment instructions
```

---

## 1. Quick View (Zero Setup Required)
You can directly open `portfolio-export/standalone/index.html` in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox, Brave) simply by double-clicking it. No Node.js or build tools are required!

All interactive features work offline and in the browser:
- Smooth scrolling navigation (`Home`, `About`, `Skills`, `Projects`, `Achievements`, `Contact`)
- Interactive Skills filter
- Live interactive simulators for all 3 projects:
  - **Voter Eligibility Calculator** (interactive age slider, citizenship, jurisdiction)
  - **ATM Management System** (working PIN `1234`, balance, deposits, withdrawals, ledger)
  - **Student Grade Calculator** (add/edit courses, credits, 10.0 scale GPA calculation)
- Academic Resume view and print modal
- Contact form with feedback
- One-click copy for email

---

## 2. Running the Full React + Vite Source Code

If you want to run or modify the full TypeScript / React project on your local computer:

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Steps to Run:
```bash
# 1. Install dependencies
npm install

# 2. Run the local development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

### Steps to Build for Production Deployment:
```bash
npm run build
```
This produces a production-optimized `dist/` folder that can be dragged and dropped directly onto:
- **GitHub Pages**
- **Vercel** (`npx vercel`)
- **Netlify**
- **Render / Cloudflare Pages**
