# Vercel'e Deploy Talimatları

GitHub Pages'te yaşanan sorun nedeniyle Vercel'e deploy etmek daha güvenli olacaktır.

## Vercel Deploy Adımları:

1. [Vercel.com](https://vercel.com) adresine git
2. GitHub hesabınla giriş yap
3. "New Project" butonuna tıkla
4. GitHub repository'ni seç (garbaun/saastra)
5. Deploy ayarları:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. "Deploy" butonuna tıkla

Vercel otomatik olarak deploy edecek ve sana bir URL verecek.

## Alternatif: Netlify

1. [Netlify.com](https://netlify.com) adresine git
2. GitHub hesabınla giriş yap
3. "Add new site" → "Import an existing project"
4. GitHub repository'ni bağla
5. Build ayarları:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. "Deploy site" butonuna tıkla