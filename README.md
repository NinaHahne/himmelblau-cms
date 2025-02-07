# 🌿 Himmelblau CMS - Sanity Setup & Usage Guide

This document provides an overview of how to **update, manage, and deploy** Sanity CMS for the Himmelblau website.

## 📌 Overview

- The **Sanity Studio** is used to manage opening hours, events, and the image gallery.
- Content is **fetched dynamically** in SvelteKit from the Sanity API.
- The **Studio is deployed online**, allowing content updates without redeploying the site.

---

## 🛠️ **Updating Content**

You can update content **without redeploying** by logging into the **Sanity Studio**.

1. **Go to the Online Studio**  
   🔗 [https://himmelblau-studio.sanity.studio](https://himmelblau-studio.sanity.studio)
2. **Log in with your Sanity account.**
3. Edit **Öffnungszeiten**, **Events**, or **Gallery**.
4. Click **"Publish"** – changes will be visible on the website automatically!

---

## 🔄 **Updating the Studio (Schema Changes)**

If you modify **schemas** (e.g., add new fields to opening hours), you need to **redeploy the Studio**.

### **1️⃣ Test Locally First (Recommended)**

```bash
cd ~/code/himmelblau-cms
npm run dev
```

- Open **http://localhost:3333** to test schema updates.

### **2️⃣ Deploy Updated Studio**

Once tested, deploy the new Studio version:

```bash
cd ~/code/himmelblau-cms
npm run deploy
```

- This updates the online Studio at **https://himmelblau-studio.sanity.studio**.

---

## 🌍 **Fixing CORS Issues (If the Live Site Can't Fetch Data)**

If GitHub Pages **can't fetch Sanity content**, update CORS settings:

1. **Go to** [Sanity.io Dashboard](https://www.sanity.io/manage).
2. **Select your project** → Go to **Settings → API**.
3. **Under CORS Origins**, ensure this is added:
   ```
   https://your-github-username.github.io
   ```
4. **Enable "Allow credentials"** if an API token is used.
5. Click **Save**, then refresh the site.

---

## ⚡ **Common Commands**

| Command                                              | Description                             |
| ---------------------------------------------------- | --------------------------------------- |
| `npm run dev`                                        | Run Studio locally at `localhost:3333`. |
| `npm run deploy`                                     | Deploy Studio to `sanity.studio`.       |
| `npm run build`                                      | Build the Studio locally.               |
| `npx sanity dataset export production backup.tar.gz` | Backup Sanity data.                     |

---

## ❓ **Need Help?**

If anything goes wrong:

- Check **browser console (`F12 → Console`)** for errors.
- Ensure **CORS settings allow your GitHub Pages domain**.
- Try **restarting the Studio** (`npm run dev`).
- Reach out for help!

🚀 **Happy editing!**
