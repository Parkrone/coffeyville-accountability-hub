# Coffeyville Data Center Watch — Research & Accountability Hub

An open-access investigative portal and companion research platform for the **No Data Centers in Coffeyville** campaign in Montgomery County, Kansas.

---

## 🎯 Platform Objectives

1. **Daily Video Archive (`/videos`):** Full-text teleprompter scripts, summaries, tags, filming locations, and exact deep-linked source citations for the daily video campaign.
2. **Investigative Findings Hub (`/records`):** Tracking public records requests under the Kansas Open Records Act (KORA) and Freedom of Information Act (FOIA), complete with key findings, agency targets, and downloadable PDF documents.
3. **Accountability Timeline (`/timeline`):** An interactive matrix comparing citizen campaign demands (ratepayer protection, water rights, Verdigris River endangered species assessments) against official municipal decisions and regional moratorium precedents.
4. **Zero-Config Full-Text Search:** Powered by **Pagefind**, enabling lightning-fast client-side search across transcripts, public records, and legal statutes.
5. **Git-Based Headless CMS (`/keystatic`):** Integrated with **Keystatic** for easy visual content management directly in the browser with automated commits to GitHub.

---

## 🚀 Quick Start & Deployment

### 1. Local Development
```bash
# Install dependencies
npm install

# Start development server (includes Keystatic CMS at /keystatic)
npm run dev
```
Open [http://localhost:4321/coffeyville-accountability-hub/](http://localhost:4321/coffeyville-accountability-hub/) to view the site, or [http://localhost:4321/keystatic](http://localhost:4321/keystatic) to access the visual CMS admin.

### 2. Production Build & Static Search Indexing
```bash
npm run build
```
This command compiles the Astro static pages and runs `npx pagefind --site dist` to build the client-side search index.

### 3. Automated Deployment to GitHub Pages
The included `.github/workflows/deploy.yml` workflow automatically builds and publishes the site on every push to the `main` branch.

1. Push this repository to GitHub.
2. Go to **Settings** → **Pages**.
3. Set **Source** to **GitHub Actions**.

---

## 📁 Content Collections Structure

* **`src/content/videos/`:** Markdown files with YAML frontmatter (`dayNumber`, `title`, `publishDate`, `summary`, `videoUrl`, `location`, `tags`, `sources`).
* **`src/content/records/`:** KORA/FOIA public record entries (`trackingId`, `title`, `agency`, `requestDate`, `receivedDate`, `status`, `documentPdfUrl`, `keyFindingsSummary`, `tags`).
* **`src/content/timeline/`:** Accountability milestones (`eventDate`, `milestoneTitle`, `category`, `topic`, `actor`, `demandMet`, `sourceLink`).

---

## ⚖️ Built for Montgomery County, Kansas
Developed by Parker Thompson and concerned citizens of Coffeyville, Kansas.
