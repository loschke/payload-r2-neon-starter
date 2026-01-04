# Boilerplate-Repo Erstellung: payload-r2-neon-starter

> Plan zur Erstellung eines wiederverwendbaren Payload CMS Templates

---

## 🎯 Ziel

Ein **production-ready Boilerplate** für neue Payload CMS Projekte mit:
- ✅ Cloudflare R2 Storage (CDN-ready)
- ✅ Neon PostgreSQL (Serverless)
- ✅ Resend Email (Transactional)
- ✅ Custom Design System (Fonts, Branding)
- ✅ Best Practices & Dokumentation

---

## 📦 Workflow

### 1. GitHub Repo erstellen

**Name:** `payload-r2-neon-starter`
**Visibility:** Public
**Initialize:** Empty (kein README/License)

### 2. Code vorbereiten (Cleanup)

**Von 7x-content-hub kopieren & bereinigen:**

```bash
# Neues lokales Verzeichnis
cd ..
mkdir payload-r2-neon-starter
cd payload-r2-neon-starter

# Git initialisieren
git init
git remote add origin https://github.com/loschke/payload-r2-neon-starter.git
```

---

## 🧹 Cleanup-Liste

### **Dateien ENTFERNEN:**

```
❌ docs/migration/                    # Projekt-spezifisch
❌ .clinerules/                        # Projekt-Kontext
❌ .env                                # Niemals committen!
❌ tsconfig.tsbuildinfo                # Build-Artefakt
❌ .next/                              # Build-Artefakt
❌ node_modules/                       # Dependencies
❌ public/branding/signet-loschke-*   # Dein spezifisches Logo
```

### **Dateien ANPASSEN:**

**1. Collections:**
```typescript
// ❌ ENTFERNEN:
src/collections/Brands.ts              # sevenX-spezifisch
src/collections/Frameworks.ts          # sevenX-spezifisch

// ✅ ANPASSEN:
src/collections/Categories.ts          # "Disziplinen" → "Categories" (generic)
```

**2. Payload Config:**
```typescript
// src/payload.config.ts
collections: [
  Pages, 
  Posts, 
  Media, 
  Categories,  // Generic statt Brands/Frameworks
  Users
],
```

**3. Seed Data:**
```typescript
// src/endpoints/seed/
- post-1.ts  → Generic example post
- post-2.ts  → Generic example post  
- post-3.ts  → Generic example post
- home.ts    → Generic homepage
```

**4. Public Assets:**
```
public/branding/
  ├── logo.svg              # Placeholder Logo
  └── README.md             # "Replace with your logo"

public/fonts/
  └── README.md             # "How to add custom fonts"
```

---

## 📝 Dokumentation erstellen

### **README.md** (Haupt-Doku)

```markdown
# Payload R2 Neon Starter

Production-ready Payload CMS 3.x starter template.

## Features
- 🚀 Payload CMS 3.69.0
- 📦 Cloudflare R2 Storage
- 🐘 Neon PostgreSQL
- 📧 Resend Email
- 🎨 Custom Design System
- 🔍 SEO, Search, Redirects

## Quick Start
1. Clone repo
2. Copy .env.example → .env
3. Set credentials
4. pnpm install && pnpm dev

## Documentation
- [Setup Guide](./docs/SETUP.md)
- [R2 Storage](./docs/r2-storage.md)
- [Custom Fonts](./docs/custom-fonts.md)
- [Customization](./docs/customization.md)
```

### **docs/SETUP.md** (Schritt-für-Schritt)

**Sections:**
1. Prerequisites
2. Neon Database Setup
3. Cloudflare R2 Setup
4. Resend Email Setup (optional)
5. Local Development
6. Deployment (Vercel)

### **docs/r2-storage.md**

**Sections:**
1. Why R2?
2. Bucket erstellen
3. API Credentials
4. Custom Domain
5. Testing

### **docs/custom-fonts.md**

**Sections:**
1. Google Fonts Integration
2. Custom Font Files
3. Font Loading Optimization
4. Preload Strategy

### **docs/customization.md**

**Sections:**
1. Branding (Logo, Farben)
2. TailwindCSS anpassen
3. Collections hinzufügen
4. Custom Components

---

## 🔗 .env.example (bereits gut!)

Haben wir bereits aktualisiert mit:
- ✅ Neon PostgreSQL Template
- ✅ R2 Credentials mit Links
- ✅ Resend Credentials mit Links
- ✅ Hilfreiche Kommentare

---

## 🎨 Design System Doku

### **Was dokumentieren:**

**1. Font-System:**
```
Fonts in public/fonts/:
- GoogleSansCode (Code/Mono)
- InstrumentSerif (Headlines)
- NotoSans (Body)

Integration via globals.css + font-face
Preload in layout.tsx
```

**2. Color System:**
```
Definiert in:
- src/cssVariables.js (Payload Admin)
- tailwind.config.mjs (Frontend)

Anpassung:
→ docs/customization.md erklärt Schritt-für-Schritt
```

**3. Component System:**
```
shadcn/ui in src/components/ui/
TailwindCSS Utilities
Custom Components
```

---

## 📊 Dateien-Übersicht

| Zu behandeln | Aktion |
|--------------|--------|
| **src/collections/** | Brands/Frameworks entfernen, Categories generalisieren |
| **src/endpoints/seed/** | Generic Seed-Data |
| **public/branding/** | Placeholder Logo |
| **public/fonts/** | README für Custom Fonts |
| **docs/** | migration/ löschen, neue Docs erstellen |
| **.env.example** | ✅ Bereits gut |
| **README.md** | Komplett neu (Template-Fokus) |
| **package.json** | Name leeren, Generic Description |

---

## 🚀 Next Steps

**Toggle zu Act Mode** wenn bereit, dann:

1. **Lokales Verzeichnis vorbereiten** (außerhalb von 7x-content-hub)
2. **Cleanup durchführen**
3. **Dokumentation schreiben**
4. **GitHub Repo pushen**

**Geschätzter Aufwand:** ~2-3 Stunden für sauberes Boilerplate

Soll ich loslegen? 🎯
