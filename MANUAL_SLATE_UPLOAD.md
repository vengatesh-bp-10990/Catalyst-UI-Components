# Manual Slate Deployment Guide

Since your Slate app is already created in the Catalyst Console at **zcatcomponents.onslate.in**, you can manually upload the updated production files.

## 📋 Quick Summary
- **Current URL**: https://zcatcomponents.onslate.in
- **Installation Path**: https://zcatcomponents.onslate.in/#installation
- **Latest Build**: `/zcat-app/dist/` (freshly built with all CSS styling fixes)

## 🚀 Manual Upload via Catalyst Console

### Step 1: Access Slate App in Catalyst Console
1. Open: https://console.catalyst.zoho.in
2. Select Project: **DoNotDel-EC**
3. Go to: **Web Hosting → Slate**
4. Click on the "**zcatcomponents**" (listed as "default" deployment)

### Step 2: Upload New Build
1. In the Slate app overview, look for **Deployment** section
2. Click **Edit** or **Redeploy**
3. Choose **Upload Source Files**
4. Select all files from: `zcat-app/dist/`
   - Include all JavaScript bundles
   - Include `index.html`
   - Include all other bundled assets

### Step 3: Deploy
1. Click **Deploy** button
2. Wait for deployment to complete (usually 1-2 minutes)
3. Your app will be updated at https://zcatcomponents.onslate.in

## 📂 What's Being Deployed
The `dist/` folder contains:
- ✅ All Tier 1-3 components (Button, Input, Dropdown, etc.)
- ✅ All Tier 3 extension components (Autocomplete, Datepicker, Fileupload, Cards, Key-Value Pair, Double-Field)
- ✅ **NEW**: All CSS styling aligned with design system
- ✅ All routing and demo pages
- ✅ Production-optimized bundles

## 🔍 Verification Steps
After deployment:
1. Visit: https://zcatcomponents.onslate.in
2. Check each component for correct styling
3. Verify all variants display correctly
4. Check browser console for any errors

## 📝 Files to Upload (simplified)
Just upload everything from the `dist/` folder - it's already production-ready!

```
dist/
├── app-init.js (and other JS files)
├── index.html
├── lyte.js (bundled framework with CSS)
├── mapping.json
└── [all other files]
```

All CSS is bundled into `lyte.js`, so you don't need separate CSS files.

## 🔧 If Upload Via Console Doesn't Work
Alternative options:
1. Contact Catalyst support with your project details  
2. Ask them to manually push the dist folder for zcatcomponents Slate service
3. Or provide them with the dist folder zip file

---

**Updated**: March 4, 2026  
**Build Time**: 5.863 seconds  
**Status**: Ready for deployment ✅
