# Deploy Lahore under sereneheightsgroup.com/lahore

Do these in order. One clean cutover.

## 1. Push this repo

```bash
cd ~/Downloads/Serene-Heights-Lahore
git push origin main
```

## 2. Set Vercel env on the **Lahore** project (then Redeploy)

```
NEXT_PUBLIC_SITE_URL=https://www.sereneheightsgroup.com/lahore
NEXT_PUBLIC_BASE_PATH=/lahore
NEXT_PUBLIC_ALLOWED_HOSTS=www.sereneheightsgroup.com,sereneheightsgroup.com,www.sereneheightslahore.com,sereneheightslahore.com
```

Leave `NEXT_PUBLIC_LEGACY_REDIRECT_HOSTS` empty until you want old lahore.com to 301 to group.

**Important:** env + this code (with `vercel.json`) must ship together.  
Without `BASE_PATH=/lahore`, root redirects to `/lahore` will 404.

## 3. Push + redeploy **Group gateway**

Folder: `~/Downloads/serene-gateway-portal` (repo `svypetech/serene-global`)

This project owns `sereneheightsgroup.com`. It must include:

- Server proxy for `/lahore/*` → `https://www.sereneheightslahore.com/lahore/*`
- Server proxy for `/fonts/*` → Lahore fonts (CSS absolute font URLs)
- Explore card link `/lahore`
- `vercel.json` rewrites for `/lahore`

```bash
cd ~/Downloads/serene-gateway-portal
git add src/server.ts src/routes/index.tsx vercel.json
git commit -m "feat(routing): proxy /lahore and Lahore fonts on group domain"
git push origin main
```

## 4. Smoke test

- https://www.sereneheightsgroup.com/lahore
- https://www.sereneheightsgroup.com/lahore/home → `/lahore`
- https://www.sereneheightsgroup.com/lahore/about (images)
- https://www.sereneheightsgroup.com/lahore/the-project
- https://www.sereneheightsgroup.com/lahore/contact
- Hero video + fonts load (Network tab: `/lahore/...` or proxied `/fonts/...`)

## 5. Optional later — 301 old domain

On Lahore Vercel env:

```
NEXT_PUBLIC_LEGACY_REDIRECT_HOSTS=www.sereneheightslahore.com,sereneheightslahore.com
```

Redeploy Lahore.
