# Payload R2 Neon Starter

**ℹ️ Note:** This is a customized variant of the official [Payload Website Template](https://github.com/payloadcms/payload/tree/main/templates/website), tailored for my specific use cases and workflows. It is not actively maintained or updated regularly. For a regularly maintained template, please use the [official Payload templates](https://github.com/payloadcms/payload/tree/main/templates).

## ✨ Features

> Production-ready **Payload CMS 3.x** starter template with Cloudflare R2 Storage, Neon PostgreSQL, and Resend Email integration.

### **Core Stack**
- 🚀 **Payload CMS 3.69.0** - Modern headless CMS
- ⚡ **Next.js 15** - App Router with React 19
- 🐘 **Neon PostgreSQL** - Serverless database
- 📦 **Cloudflare R2** - S3-compatible object storage with global CDN
- 📧 **Resend Email** - Transactional emails (optional)

### **Included Plugins**
- 🔍 **SEO Plugin** - Meta tags, Open Graph, sitemaps
- ↩️ **Redirects Plugin** - 301/302 redirects management
- 🔎 **Search Plugin** - Full-text search
- 📝 **Form Builder** - Dynamic contact forms
- 📂 **Nested Docs** - Hierarchical categories

### **Design System**
- 🎨 **TailwindCSS 3.4** - Utility-first CSS
- 🧩 **shadcn/ui** - Beautiful React components
- 🔤 **Custom Fonts** - Google Fonts + custom font support
- 🌓 **Dark Mode** - Built-in theme switching

### **Developer Experience**
- 📘 **TypeScript** - Full type safety
- 🧪 **Testing** - Playwright E2E + Vitest integration
- 🐳 **Docker** - Containerization support
- 📦 **pnpm** - Fast, efficient package manager

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/loschke/payload-r2-neon-starter.git
cd payload-r2-neon-starter

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev
```

Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin panel.

---

## 📋 Prerequisites

- **Node.js** 18.20.2+ or 20.9.0+
- **pnpm** 9+ or 10+
- **Neon PostgreSQL** account (free tier available)
- **Cloudflare** account with R2 enabled (optional)
- **Resend** account for emails (optional)

---

## ⚙️ Setup Guide

### 1. **Database Setup (Neon PostgreSQL)**

1. Create account at [Neon](https://neon.tech)
2. Create new project
3. Copy connection string
4. Add to `.env`:
   ```env
   DATABASE_URL=postgresql://user:pass@host.neon.tech/db?sslmode=require
   ```

### 2. **Cloudflare R2 Storage** (Optional)

Without R2, files are stored locally in `public/media`.

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → R2
2. Create bucket (e.g., `my-cms-media`)
3. Create API token (Read & Write permissions)
4. Add to `.env`:
   ```env
   R2_ACCOUNT_ID=your-account-id
   R2_ACCESS_KEY_ID=your-access-key
   R2_SECRET_ACCESS_KEY=your-secret-key
   R2_BUCKET_NAME=my-cms-media
   R2_PUBLIC_DOMAIN=https://pub-xxx.r2.dev
   R2_S3_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
   ```

**Optional:** Add custom domain (e.g., `cdn.yourdomain.com`)

### 3. **Resend Email** (Optional)

Without Resend, emails are logged to console (development only).

1. Create account at [Resend](https://resend.com)
2. Generate API key
3. Add to `.env`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxx
   RESEND_DEFAULT_FROM_EMAIL=hello@yourdomain.com
   RESEND_DEFAULT_FROM_NAME=Your Name
   ```

4. Verify domain in Resend dashboard

### 4. **Generate Payload Secret**

```bash
# Generate secure random secret
openssl rand -base64 32
```

Add to `.env`:
```env
PAYLOAD_SECRET=your-generated-secret
```

---

## 🎨 Customization

### **Custom Fonts**

This starter includes:
- **Google Sans Code** (Monospace)
- **Instrument Serif** (Headlines)
- **Noto Sans** (Body text)

**To add your own fonts:**
1. Place font files in `public/fonts/`
2. Update `src/app/(frontend)/globals.css` with `@font-face`
3. Update `tailwind.config.mjs` with font family

See [Custom Fonts Guide](./docs/custom-fonts.md) for details.

### **Branding**

1. Replace logo in `public/branding/`
2. Update colors in `tailwind.config.mjs`
3. Update Payload Admin colors in `src/cssVariables.js`

### **Collections**

The starter includes:
- **Posts** - Blog articles with rich text editor
- **Pages** - Static pages with layout builder
- **Media** - Images, videos, audio with R2 storage
- **Categories** - Taxonomies for organizing content
- **Users** - Authentication and access control

**To add custom collections:** See Payload [Collections Docs](https://payloadcms.com/docs/configuration/collections)

---

## 📦 Included Collections

### **Posts** (`/posts`)
- Lexical rich text editor
- Hero images
- Categories & related posts
- SEO fields
- Draft preview & live preview
- Audio file support (for podcasts)
- Legacy slug field (for migrations)

### **Pages** (`/pages`)
- Layout builder with blocks
- SEO optimization
- Draft & versioning
- Access control

### **Media** (`/media`)
- R2 Storage or local fallback
- Auto-generated responsive sizes:
  - thumbnail (300px)
  - square (500×500px)
  - small (600px)
  - medium (900px)
  - large (1400px)
  - xlarge (1920px)
  - og (1200×630px for Open Graph)
- Focal point selection
- Audio file support (mp3, m4a, wav, ogg)

---

## 🚀 Deployment

### **Vercel** (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/loschke/payload-r2-neon-starter)

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### **Environment Variables**

Make sure to set all required variables in Vercel:
- `DATABASE_URL`
- `PAYLOAD_SECRET`
- `NEXT_PUBLIC_SERVER_URL`
- R2 variables (if using R2)
- Resend variables (if using Resend)

---

## 📚 Documentation

- [Setup Guide](./docs/boilerplate-creation-plan.md) - Detailed setup instructions
- [Payload CMS Docs](https://payloadcms.com/docs) - Official documentation
- [Payload AGENTS.md](./AGENTS.md) - AI-assisted development guide

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Payload CMS 3.69.0 | Headless CMS |
| Next.js 15 | React framework |
| PostgreSQL (Neon) | Database |
| Cloudflare R2 | Object storage & CDN |
| Resend | Transactional emails |
| TailwindCSS | Styling |
| shadcn/ui | UI components |
| TypeScript | Type safety |
| Lexical | Rich text editor |

---

## 📖 Scripts

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm generate:types   # Generate TypeScript types
pnpm generate:importmap # Generate import map
pnpm lint             # Run ESLint
pnpm test             # Run all tests
```

---

## 🔒 Security

- **Access Control:** Role-based access out of the box
- **Authentication:** Secure JWT-based auth
- **CORS:** Configured for your domain
- **Environment Variables:** Sensitive data in `.env` (never committed)

---

## 📝 License

MIT License - feel free to use for personal or commercial projects.

---

## 🤝 Contributing

Found a bug or want to improve the starter?
- Open an issue
- Submit a pull request
- Share your feedback

---

## 💬 Support

- [Payload Discord](https://discord.com/invite/payload)
- [Payload Discussions](https://github.com/payloadcms/payload/discussions)
- [Documentation](https://payloadcms.com/docs)

---

**Made with ❤️ using Payload CMS**
