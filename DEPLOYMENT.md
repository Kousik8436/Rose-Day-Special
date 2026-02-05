# Deploy to Netlify (Free & Easy)

## Step 1: Build your app
```bash
npm run build
```

## Step 2: Deploy to Netlify
1. Go to https://netlify.com
2. Sign up/Login with GitHub
3. Drag and drop your `build` folder to Netlify
4. Get your live URL (e.g., https://amazing-rose-garden-123.netlify.app)

## Step 3: Update your link generation
Your app will automatically work with the new domain!

---

# Alternative: Use ngrok for instant sharing (Temporary)

## Step 1: Install ngrok
```bash
npm install -g ngrok
```

## Step 2: Start your React app
```bash
npm start
```

## Step 3: In another terminal, expose your localhost
```bash
ngrok http 3000
```

## Step 4: Share the ngrok URL
Copy the https URL (e.g., https://abc123.ngrok.io) and share it!

---

# Alternative: Deploy to Vercel (Free)

## Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

## Step 2: Deploy
```bash
vercel --prod
```

## Step 3: Get your live URL
Vercel will give you a URL like https://rose-day-special.vercel.app

---

The generated links will automatically work with your deployed domain!
No code changes needed - the app uses `window.location.origin` which adapts to any domain.