# Silverton Eco Adventures — Website

A static site (5 pages: Home, Mountains, Lake, Snow, Contact) built from the content on the current silvertonecoadventures.com, ready to publish on GitHub Pages with Matomo analytics.

No build step, no framework — plain HTML/CSS/JS. Anyone can edit a page in a text editor and refresh the browser.

## Files

```
index.html        Home
mountains.html     Mountains page
lake.html          Lake page
snow.html          Snow page
contact.html       Contact page
style.css          Shared styling
main.js            Mobile nav toggle + form handlers
CNAME              Tells GitHub Pages to serve this repo at silvertonecoadventures.com
.nojekyll          Tells GitHub Pages to skip Jekyll processing
```

---

## 1. Create the GitHub repo

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `silverton-eco-adventures` (or anything you like).
3. Set it to **Public** (required for free GitHub Pages).
4. Don't initialize with a README (you already have these files) — just click **Create repository**.

## 2. Upload the files

Easiest path if you don't use git day-to-day:

1. On the new repo's page, click **uploading an existing file**.
2. Drag in every file from this `site` folder (including `CNAME` and `.nojekyll` — these start with a dot, so make sure your file browser shows hidden files, or use the git command-line method below instead).
3. Commit directly to `main`.

Command-line alternative:

```bash
cd site
git init
git add -A
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/silverton-eco-adventures.git
git push -u origin main
```

## 3. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. GitHub will build the site at `https://YOUR_USERNAME.github.io/silverton-eco-adventures/` within a minute or two.

## 4. Point silvertonecoadventures.com at it

The repo already includes a `CNAME` file with `silvertonecoadventures.com`, so GitHub knows which domain to serve. You still need to update DNS at your domain registrar (wherever you manage the domain today):

**Apex domain (`silvertonecoadventures.com`)** — add four A records, all pointing at:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**www subdomain (optional but recommended)** — add a CNAME record:
```
www  →  YOUR_USERNAME.github.io
```

Then back in **Settings → Pages**:
1. Under **Custom domain**, enter `silvertonecoadventures.com` and save (this re-confirms the CNAME file).
2. Wait for the DNS check to go green (can take up to 24 hours, often much faster).
3. Once verified, check **Enforce HTTPS** so the site loads securely.

## 5. Wire in Matomo

Each of the 5 HTML pages has this block right before `</body>`:

```html
<!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//YOUR_MATOMO_URL/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', 'YOUR_SITE_ID']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->
```

Replace `YOUR_MATOMO_URL` and `YOUR_SITE_ID` in all 5 files with the same values you used for gulo.ai (find them in your Matomo dashboard under **Administration → Websites → Manage**, or in gulo.ai's existing tracking snippet). Then add a new site in Matomo for `silvertonecoadventures.com` if you haven't already, so its traffic doesn't mix with gulo.ai's.

## 6. The contact form and newsletter box

GitHub Pages only serves static files — there's no server to receive form submissions. Right now both forms fall back to opening the visitor's email client (via `mailto:`) with the message pre-filled. That works with zero setup, but if you'd rather collect submissions directly:

- [Formspree](https://formspree.io) — free tier, drop-in `action="https://formspree.io/f/YOUR_ID"` on the `<form>` tag, remove the JS `preventDefault` handler in `main.js`.
- [Netlify Forms](https://www.netlify.com/) — if you ever move hosting to Netlify instead of GitHub Pages.

## 7. Adding your real logo and photos

The site currently uses color gradients instead of photos so it works immediately with no missing images. To swap in your real logo and photos:

1. Add your image files to the `site` folder (e.g. `logo.png`, `hero-lake.jpg`).
2. In each HTML file, replace the `<svg>` logo block in the header with `<img src="logo.png" alt="Silverton Eco Adventures" height="36">`.
3. Replace a `.hero-*` or `.spotlight-media` CSS class background with `background-image: url('hero-lake.jpg'); background-size: cover;` in `style.css`.

Send me the logo/photo files any time and I can drop them in for you.

## 8. Using GitHub Copilot on this repo

Copilot is handy here since it's a small, template-y codebase — most future edits are "change this paragraph" or "add a new activity card."

**Turn it on:**
1. If you don't already have Copilot, go to **github.com/github-copilot/signup** and pick Copilot Free (includes limited monthly use) or Copilot Pro.
2. Copilot works per-account, not per-repo — once enabled on your account, it's available in any repo you open, including this one.

**Use it to edit the site:**
- **In the browser:** open any file in the repo, click the pencil (edit) icon, then use **Copilot Chat** (top right of github.com, or the Copilot icon in the file editor) and ask things like "add a new activity card to mountains.html for guided fishing trips" — review the diff, then commit.
- **In VS Code:** install the GitHub Copilot and Copilot Chat extensions, clone the repo locally, open the `site` folder, and use Copilot Chat (`Ctrl/Cmd+I` for inline edits) the same way — e.g. "make the hero text on snow.html shorter" or "add a FAQ section to index.html matching the existing card style."
- Because every page shares `style.css`, ask Copilot to reuse existing classes (`.card`, `.tile`, `.hero-*`) rather than inventing new styles, to keep the site consistent.

**Optional: Copilot coding agent** — for hands-off changes, you can open a GitHub Issue describing what you want (e.g. "Add a new 'Trips & Pricing' page linked from the nav") and assign it to Copilot from the Issues tab; it opens a pull request with the change for you to review and merge. Available on Copilot Pro/Pro+/Business/Enterprise.

---

## Quick checklist

- [ ] Repo created and files pushed
- [ ] Pages enabled, deploying from `main` / root
- [ ] DNS A records (and optional www CNAME) added at registrar
- [ ] Custom domain set in Pages settings, HTTPS enforced
- [ ] Matomo URL + Site ID filled in on all 5 pages
- [ ] Logo/photos swapped in (optional)
- [ ] Copilot enabled on your GitHub account
