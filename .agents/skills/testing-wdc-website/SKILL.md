---
name: testing-wdc-website
description: Test the WDC multi-language website end-to-end. Use when verifying i18n, AI Chat Widget, RTL layout, or navigation changes.
---

# Testing WDC Website

## Prerequisites
- Dev server running on **port 3001**: `npm run dev`
- Verify with `curl -s -o /dev/null -w '%{http_code}' http://localhost:3001/` (expect 200)

## Key Test Scenarios

### 1. Language Switching (i18n)
- Default language is English (may vary if localStorage has saved preference)
- Language switcher is a Globe button in the Header (right side in LTR, left side in RTL)
- Shows "عربي" when in English mode, "EN" when in Arabic mode
- Clicking toggles between `en` and `ar` via `i18n.changeLanguage()`
- Verify: Nav items change, hero text changes, `<html dir>` and `<html lang>` update client-side
- Note: `dir`/`lang` attributes are set client-side by React, so `curl` will always show defaults

**Expected EN nav**: Home, About Us, Services, Portfolio, Blog, Contact  
**Expected AR nav**: الرئيسية, من نحن, خدماتنا, أعمالنا, المدونة, تواصل معنا

### 2. AI Chat Widget
- Toggle button: bottom-right corner, MessageSquare icon (devinid typically 28)
- Opens a glassmorphism panel with dark translucent background
- EN title: "WDC AI Assistant" | AR title: "مساعد WDC الذكي"
- Welcome message appears automatically on open
- Input field placeholder: "Type your message..." (EN) or "اكتب رسالتك..." (AR)
- Send button is disabled when input is empty
- Mock responses come from `MOCK_RESPONSES` array (5 predefined strings about WDC services)
- Streaming simulation: words appear 30-80ms apart with a blinking cursor
- Close via X button in the chat header

### 3. RTL Layout Verification
- When Arabic is active, entire page layout flips to right-to-left
- Logo moves to right side of header, nav flows right-to-left
- WhatsApp button moves to left side (uses logical `end-6` property)
- Chat widget position also respects RTL
- Font switches to Cairo for Arabic (CSS rule on `html[dir="rtl"]`)

### 4. Page Navigation
- All pages: Home (`/`), About (`/about`), Services (`/services`), Portfolio (`/portfolio`), Blog (`/blog`), Contact (`/contact`)
- Each page has full Arabic translations (600+ i18n keys total)
- Navigation preserves language selection across page changes

## Translation Files
- English: `src/i18n/locales/en.json`
- Arabic: `src/i18n/locales/ar.json`
- i18n config: `src/i18n/index.ts` (uses localStorage for persistence)

## Common Issues
- If language doesn't switch, check browser localStorage for `i18nextLng` key
- If fonts look wrong in Arabic, verify Google Fonts Cairo is loading (check index.html)
- Chat widget state resets on page navigation (messages are component-local state)
- The `dir` attribute change is client-side only — server/curl responses always show `dir="ltr"`

## Tech Stack
- React 18 + Vite (port 3001)
- TypeScript with strict mode
- i18next + react-i18next + i18next-browser-languagedetector
- Framer Motion for animations
- Tailwind CSS with glassmorphism classes
