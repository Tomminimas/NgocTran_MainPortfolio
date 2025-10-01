# 🚀 GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your machine
- Node.js and npm installed

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `ngoc-portfolio` (or your preferred name)
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README (we already have files)
7. Click "Create repository"

## Step 2: Initialize Git and Push to GitHub

```bash
cd ngoc-portfolio

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio setup"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ngoc-portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 3: Install Dependencies and Deploy

```bash
# Install dependencies (fix npm cache if needed)
sudo chown -R 501:20 /Users/tranvietmyngoc/.npm
npm install --legacy-peer-deps

# Install gh-pages for deployment
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

## Step 5: Access Your Portfolio

Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/ngoc-portfolio`

## 🔄 Future Updates

To update your portfolio:

```bash
# Make your changes to the code
# Then commit and push
git add .
git commit -m "Update portfolio content"
git push origin main

# Deploy the changes
npm run deploy
```

## 🛠️ Troubleshooting

### If npm install fails:
```bash
# Fix npm cache permissions
sudo chown -R 501:20 /Users/tranvietmyngoc/.npm

# Try again
npm install --legacy-peer-deps
```

### If deployment fails:
```bash
# Make sure gh-pages is installed
npm install --save-dev gh-pages

# Try deployment again
npm run deploy
```

### If GitHub Pages doesn't show your site:
1. Check that the repository is **public**
2. Verify GitHub Pages is enabled in Settings > Pages
3. Wait 5-10 minutes for GitHub to build the site
4. Check the Actions tab for any build errors

## 📝 Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Update DNS settings to point to `YOUR_USERNAME.github.io`
3. In GitHub Pages settings, add your custom domain

## 🎉 You're Done!

Your portfolio is now live on GitHub Pages! Share the link with potential employers and add it to your resume.

---

**Need help?** Check the GitHub Pages documentation or create an issue in your repository.







