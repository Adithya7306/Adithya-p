# Adithya P — Aspiring Data Analyst Portfolio Website

A modern, responsive, and performance-optimized personal portfolio website built specifically for **Adithya P**, an aspiring Data Analyst based in Malappuram, Kerala, India.

This project showcases Adithya's educational background (BBA from University of Calicut), technical data analysis skills (Python, SQL, Excel, Pandas, Power BI, EDA), and the featured **Sales Data Exploratory Data Analysis (EDA)** project.

---

## 🌟 Features & Highlights

- **Aesthetic Dark Theme:** Sleek deep-navy/black palette (`#090D16`), glassmorphism card surfaces, ambient glow orbs, and vibrant electric-blue & purple accents.
- **Modern Typography:** High-contrast Google Fonts pairing — *Space Grotesk* for technical headings and *DM Sans* for readable narrative body text.
- **Interactive Visual Graphics:** Inline SVG charts, animated trend lines, code snippet previews (`analysis_pipeline.py`), and KPI summary cards without dependencies on missing image files.
- **Detailed Project Showcase:** Dedicated presentation of the *Sales Data Exploratory Data Analysis (EDA)* project with objectives, methodology, and direct links to GitHub and Google Colab.
- **12 Key Analytical Skills:** Structured cards representing core competencies in programming, libraries, business intelligence, and statistics.
- **Clean Education Timeline:** Academic timeline detailing the Bachelor of Business Administration (BBA) and ongoing Data Analytics coursework.
- **Two-Column Contact Section:** Direct contact info, social links, mailto alternative, and an interactive contact form with client-side validation.
- **Accessibility & Responsiveness:** Built on Bootstrap 5 grid utilities, keyboard navigability, semantic tags, and full `prefers-reduced-motion` compliance.

---

## 🛠️ Technologies Used

| Technology | Purpose | Source / CDN |
| :--- | :--- | :--- |
| **HTML5** | Semantic structure & accessible DOM | Native |
| **CSS3** | Custom design system, gradients, animations | `style.css` |
| **Bootstrap 5.3.3** | Responsive grid, utilities, modal & collapse logic | Official CDN |
| **Vanilla JavaScript** | Scroll reveal, form validation, dynamic year, scroll spy | `script.js` |
| **Font Awesome 6.5.1**| Modern vector icons for tech and social items | CDN |
| **Google Fonts** | Space Grotesk, DM Sans, JetBrains Mono | Google Fonts CDN |

> **Zero Build Steps:** No `npm install`, Node.js, Webpack, or Vite required. Runs natively in any modern web browser.

---

## 📂 Project File Structure

```text
portfolio/
├── index.html       # Semantic HTML5 document containing all 8 sections
├── style.css        # Custom CSS variables, responsive design, animations
├── script.js        # Vanilla JavaScript for interactions, validation & animations
└── README.md        # Documentation, customization guide & setup instructions
```

---

## 🚀 How to Preview & Run the Website

### Method 1: Direct File Open
1. Navigate to the project folder:
   `c:\Users\hp\OneDrive\Documents\portfolio`
2. Double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Brave, Safari).

### Method 2: Local Python Server (Recommended for testing)
If you have Python installed, open your terminal / PowerShell in this directory and run:
```bash
python -m http.server 8000
```
Then visit [`http://localhost:8000`](http://localhost:8000) in your browser.

### Method 3: VS Code Live Server
1. Open the folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab (`Ctrl+Shift+X`).
3. Right-click `index.html` and select **"Open with Live Server"** (or click "Go Live" in the bottom status bar).
4. Any edits made to `index.html`, `style.css`, or `script.js` will automatically reload in your browser.

---

## ✏️ Customization & Personalization Guide

All personal placeholders in [index.html](file:///c:/Users/hp/OneDrive/Documents/portfolio/index.html) are clearly labeled with comments so you can easily update them.

### 1. Replacing Social Profile Links
Search for `https://github.com`, `https://linkedin.com`, and `https://instagram.com` in [index.html](file:///c:/Users/hp/OneDrive/Documents/portfolio/index.html) and replace them with your actual profiles:
- **Hero Section:** Lines ~115–125
- **Contact Section:** Lines ~395–410
- **Footer Section:** Lines ~470–485

```html
<!-- Example: Update your LinkedIn link -->
<a href="https://linkedin.com/in/your-actual-profile" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="LinkedIn Profile">
  <i class="fa-brands fa-linkedin-in"></i>
</a>
```

### 2. Linking Your Sales EDA Project & Notebook
In the **Projects Section** ([index.html](file:///c:/Users/hp/OneDrive/Documents/portfolio/index.html#L310-L330)):
```html
<!-- Replace with your actual GitHub repository URL -->
<a href="https://github.com/your-username/sales-data-eda" target="_blank" rel="noopener noreferrer" class="btn btn-gradient">
  <i class="fa-brands fa-github me-2"></i> View on GitHub
</a>

<!-- Replace with your Google Colab or Kaggle Notebook URL -->
<a href="https://colab.research.google.com/drive/your-notebook-id" target="_blank" rel="noopener noreferrer" class="btn btn-secondary-glass">
  <i class="fa-solid fa-book-bookmark me-2"></i> View Notebook
</a>
```

### 3. Adding a Real Profile Photo (Optional)
If you would like to include your actual photo in place of or next to the analytics preview card in the Hero section:
1. Save your photo (e.g. `adithya.jpg` or `profile.png`) into the project folder.
2. In [index.html](file:///c:/Users/hp/OneDrive/Documents/portfolio/index.html), add an image tag such as:
```html
<img src="profile.png" alt="Adithya P - Aspiring Data Analyst" class="img-fluid rounded-4 shadow-glow mb-4" width="280">
```

### 4. Updating Skills or Adding New Projects
- **Skills:** You can duplicate any `.skill-card` block in the `#skills` section and modify the icon, title, and description.
- **Projects:** The `.project-showcase-card` in the `#projects` section is designed as a modular component. To add a second project (e.g., *Customer Churn Prediction* or *SQL Business Metrics*), duplicate that card block and update the details.

---

## 📬 Contact Form & Backend Integration

The contact form currently features **full client-side browser validation** (validating name length, valid email syntax, and message length) using vanilla JavaScript.

### Why doesn't the form send emails yet?
Static websites (HTML/CSS/JS files running without a backend server like Node.js, Python Flask, or PHP) cannot send emails directly from the browser without a mail relay service.

### Recommended Free Backend Options:
If you want to receive emails directly in your inbox when someone submits the form:
1. **Formspree (Recommended, Free tier available):**
   - Sign up at [formspree.io](https://formspree.io).
   - Create a new form and copy your endpoint URL (e.g., `https://formspree.io/f/xv...`).
   - Change `<form id="contactForm">` in `index.html` to:
     ```html
     <form id="contactForm" action="https://formspree.io/f/your-form-id" method="POST">
     ```
2. **EmailJS:**
   - Sign up at [emailjs.com](https://emailjs.com).
   - Follow their 5-minute vanilla JS quickstart to send messages directly to your Gmail using their SDK.
3. **Web3Forms:**
   - Free, no signup required; simply grab an Access Key from [web3forms.com](https://web3forms.com).

*As an immediate alternative, the website already includes direct `mailto:adithya123anitha@gmail.com` buttons that open the visitor's email client automatically with pre-filled subject and body.*

---

## 📄 License & Attribution

Designed and developed for **Adithya P**. Free to adapt, modify, and expand as your data analytics portfolio grows.
