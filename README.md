# A.V. Sai Charan - Developer Portfolio

A modern, professional, fully responsive personal developer portfolio website designed for **A.V. Sai Charan**, Computer Science student at VVITU. Built with **React.js**, **Vite**, **HTML5**, **CSS3**, and **JavaScript (ES6+)**.

---

## 🌟 Highlights & Features

- **Personal Information**: Complete profile for A.V. Sai Charan, 3rd Year B.Tech CSE (CIC) undergraduate at VVITU with a 7.5 CGPA (Target Graduation: 2028).
- **Aesthetic UI/UX**:
  - Deep black/navy dark theme (`#070b14`, `#0b1120`, `#0f172a`).
  - Electric blue and purple gradient effects & glowing button borders.
  - Interactive typewriter animation highlighting roles & specializations.
  - Ambient radiant gradient orbs and cybernetic background grid.
  - Glassmorphic card design with backdrop-filter blur.
- **Dedicated Website Sections**:
  1. **Home (Hero)**: High-impact introduction, live status indicator, typewriter headline, academic pills, social shortcuts, and resume download.
  2. **About Me**: Professional narrative detailing computational background, engineering philosophy, quick-info matrix, and verified academic details.
  3. **Skills**: Interactive skill cards for the 8 core technologies (**C**, **Java**, **Python**, **HTML**, **CSS**, **JavaScript**, **React.js**, and **Express.js**) with category filters and custom SVG tech icons.
  4. **Education**: Formal degree breakdown (B.Tech CSE - CIC at VVITU), coursework tags, timeline, and prominent 7.5 / 10 CGPA score gauge.
  5. **Learning**: Detailed showcase of core learning modules (**Data Structures and Algorithms with Java** & **Programming fundamentals with C**) with syllabus breakdowns and outcomes.
  6. **Projects**: GitHub showcase hub featuring prominent **View on GitHub** action links directly to Sai Charan's profile and repositories.
  7. **Contact**: Functional email client launcher (`ankati.saicharan007@gmail.com`), one-click clipboard copy for phone and email, location details, and direct social profile buttons.
  8. **Footer**: Navigation links, direct contacts, copyright information, and a smooth scroll-to-top button.
- **Fully Responsive**: Mobile-first architecture with smooth mobile drawer navigation, flexible grids, and optimized layouts for mobile, tablet, and desktop screens.

---

## 📂 Project Architecture

```
d:\4703\
├── public/
│   ├── favicon.svg               # Custom SC monogram SVG icon
│   └── resume.pdf                # Downloadable profile resume document
├── src/
│   ├── main.jsx                  # React application entry point
│   ├── App.jsx                   # Master component organizing all 7 sections
│   ├── index.css                 # Global CSS design system, typography & variables
│   ├── data/
│   │   └── portfolioData.js      # Centralized profile data, skills, education & contacts
│   ├── components/
│   │   ├── Navbar.jsx            # Responsive header with scroll detection & mobile drawer
│   │   ├── Hero.jsx              # Hero section with typewriter effect & quick meta pills
│   │   ├── About.jsx             # Professional narrative, matrix card & academic snapshot
│   │   ├── Skills.jsx            # Filterable 8-skill cards with SVGs and proficiency tags
│   │   ├── Education.jsx         # VVITU details, coursework, and 7.5 CGPA badge
│   │   ├── Learning.jsx          # DSA with Java & Programming with C course cards
│   │   ├── Projects.jsx          # GitHub showcase hub with direct View on GitHub links
│   │   ├── Contact.jsx           # Email mailto trigger, copy-to-clipboard & social cards
│   │   ├── Footer.jsx            # Copyright, navigation links, and back-to-top
│   │   └── BackgroundEffects.jsx # Ambient animated gradient orbs & cybernetic grid
│   └── styles/
│       ├── Navbar.css
│       ├── Hero.css
│       ├── About.css
│       ├── Skills.css
│       ├── Education.css
│       ├── Learning.css
│       ├── Projects.css
│       ├── Contact.css
│       ├── Footer.css
│       └── BackgroundEffects.css
├── index.html                    # HTML document with Google Fonts & SEO meta tags
├── package.json                  # Dependencies & npm scripts
├── vite.config.js                # Vite configuration
└── README.md                     # Documentation & setup guide
```

---

## 🚀 How to Run in Visual Studio Code

### Prerequisites
Make sure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.
Verify by opening a terminal in VS Code:
```bash
node -v
npm -v
```

### Step 1: Open the Project in VS Code
1. Open **Visual Studio Code**.
2. Click **File > Open Folder...** and select `d:\4703` (or the folder where this project is located).

### Step 2: Open the Integrated Terminal
Press ``Ctrl + ` `` (backtick) or go to **Terminal > New Terminal** at the top menu.

### Step 3: Install Dependencies
Run:
```bash
npm install
```
*(All dependencies including `react`, `react-dom`, `lucide-react`, and `@vitejs/plugin-react` will be verified and installed).*

### Step 4: Start the Development Server
Run:
```bash
npm run dev
```

You will see output similar to:
```
  VITE v6.1.0  ready in 240 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 5: View the Website
Hold `Ctrl` and click the link `http://localhost:5173/` in your terminal, or open your web browser and navigate to `http://localhost:5173/`.

---

## 🛠️ How to Customize & Update Your Portfolio

### 1. Adding New Projects
When you complete a new project or build a repository:
1. Open [src/data/portfolioData.js](file:///d:/4703/src/data/portfolioData.js).
2. Locate the `upcomingProjects` array or add your project object:
```javascript
{
  id: 4,
  title: "My Full-Stack Application",
  category: "Full Stack (React + Express)",
  badge: "Completed",
  description: "A responsive full-stack platform with user authentication and database persistence.",
  tags: ["React.js", "Express.js", "Node.js", "CSS3"],
  isUnderDevelopment: false,
  githubUrl: "https://github.com/Saicharan0127/your-repository-name",
  demoUrl: "https://your-demo-url.vercel.app"
}
```

### 2. Updating Resume File
Replace [public/resume.pdf](file:///d:/4703/public/resume.pdf) with your latest PDF resume. The download button on the website will automatically serve your updated file.

### 3. Modifying Personal Details / CGPA
All personal information is isolated in [src/data/portfolioData.js](file:///d:/4703/src/data/portfolioData.js). Update CGPA, phone, or bio in one location and changes reflect globally across all components.

---

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Saicharan0127/saicharan-github)

1. Click the **Deploy with Vercel** button above or navigate to [https://vercel.com/new](https://vercel.com/new).
2. Select your repository: **`Saicharan0127/saicharan-github`**.
3. Vercel automatically detects the Vite configuration using `vercel.json`.
4. Click **Deploy** to launch your live personal developer portfolio!

---

## 📦 Building for Production

To create an optimized production build:
```bash
npm run build
```
The compiled, minified bundle will be generated in the `dist/` folder, ready to deploy to free hosting platforms such as **Vercel**, **Netlify**, or **GitHub Pages**.

To preview the production build locally:
```bash
npm run preview
```
