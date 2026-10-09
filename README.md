# KLYNN Cleaning Products Website

Mobile-first, lightweight, high-performance static website for **KLYNN Cleaning Products**, Karachi, Pakistan.

## Features & Highlights
- **One-Window Operation Positioning**: Highlights KLYNN's unique selling proposition as Karachi's complete 8-product cleaning range manufacturer.
- **WhatsApp Integration**: Instant pre-filled WhatsApp ordering for every product and size choice.
- **Bulk & Wholesale Inquiry Form**: Formatted WhatsApp message generator for commercial buyers (offices, schools, hospitals, restaurants, shopkeepers, distributors).
- **Affordable Luxury Design System**: Deep Teal & Amber Gold theme with responsive cards, micro-animations, and mobile-friendly touch targets.
- **Local SEO & Open Graph**: Optimized metadata, schema JSON-LD, and WhatsApp link previews.

---

## Directory Structure
```
g:/KLYNN Website/
├── index.html          # Main homepage structure & content
├── css/
│   └── styles.css      # Design system & responsive layout styles
├── js/
│   └── app.js          # WhatsApp logic, size selectors, & form handler
├── images/             # Product photography & social preview assets
│   ├── hero-banner.jpg
│   ├── toilet-cleaner.jpg
│   ├── bleach.jpg
│   ├── handwash.jpg
│   ├── dishwash.jpg
│   ├── phenyl.jpg
│   ├── glass-cleaner.jpg
│   ├── floor-cleaner.jpg
│   ├── room-spray.jpg
│   └── og-banner.jpg
├── favicon.svg         # SVG Favicon icon
└── README.md           # Documentation & GitHub deployment guide
```

---

## Local Development & Testing

You can serve the website locally using any standard static file server:

### Option 1: Python Built-in HTTP Server (Recommended)
Open PowerShell / Terminal in `g:\KLYNN Website` and run:
```bash
python -m http.server 8080
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Option 2: Node.js `npx serve`
```bash
npx serve .
```

---

## How to Push to GitHub & Deploy

Follow these step-by-step commands to push this project to a new GitHub repository:

### Step 1: Initialize Git Repository
In your terminal inside `g:\KLYNN Website`:
```bash
git init
git add .
git commit -m "Initial commit: KLYNN mobile-first cleaning products website"
```

### Step 2: Create a New GitHub Repository
1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `klynn-website` (or any name you prefer)
3. Keep it **Public** (or Private)
4. Do **not** initialize with README or license (since we already created them)
5. Click **Create repository**

### Step 3: Link & Push to GitHub
Run the following commands replacing `YOUR-USERNAME` with your GitHub username:
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/klynn-website.git
git push -u origin main
```

---

## Free Hosting Recommendations
- **Cloudflare Pages**: Connect your GitHub repo `klynn-website`, set build command to empty and build directory to `./`.
- **GitHub Pages**: Go to Repo Settings -> Pages -> Source -> select `main` branch `/ (root)`.
- **Vercel / Netlify**: Drag & drop or link GitHub repository for instant global CDN deployment.
