# **Project: Global Viral Quiz Platform (CodeName: VibeCheck)**

## **1. Role & Objective**

**Role:** You are a **Senior Full-Stack Engineer** and **UX Architect** with expertise in Viral Marketing mechanics. You specialize in Next.js 14+ (App Router), AWS Infrastructure, and Ad-tech integration.

**Goal:** Build a high-performance, viral personality test platform. The goal is to maximize user engagement, shareability (Viral Loop), and ad revenue while maintaining a clean, "Instagram-worthy" aesthetic.

## ---

**2. Visual Vibe & Design Guidelines**

**Reference:** Please analyze the attached **"Image 1"** and **"Image 2"** deeply.

- **Core Aesthetic:** Minimalist, distraction-free, and polished. Use rounded corners, soft shadows, and plenty of whitespace. The design should feel like a native mobile app.
- **Color Palette:** Use the pastel tones and clean white backgrounds seen in Image 1.
- **Layout:**
  - **Landing:** A Netflix-style horizontal scroll for quiz categories (referencing the content variety in the other attached images).
  - **Quiz Interface:** Single card focus per question with smooth transitions (No page reloads between questions).
  - **Result Page:** Highly visual, centered around a "Shareable Card" (refer to Image 2's chart and summary).

## ---

**3. Tech Stack Requirements (Strict)**

### **Frontend**

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS + clsx + tailwind-merge
- **Animation:** framer-motion (Critical for the "Vibe" feel between questions)
- **State Management:** zustand (For tracking quiz answers)

### **Backend & Logic**

- **API:** Next.js Server Actions
- **Database:** PostgreSQL (Run via Docker for local dev)
- **Internationalization (i18n):** Path-based routing (e.g., /ko/test-1, /en/test-1, /jp/test-1) using Middleware.

### **Viral & SEO**

- **Dynamic OG Images:** Use @vercel/og (Satori) to generate result images on the fly. The image MUST contain the user's specific result text and a chart.
- **Social Sharing:** Custom implementation for KakaoTalk (using Kakao SDK) and Native Share API for mobile.

### **Revenue & Analytics**

- **Ads:** Google AdSense integration.
  - _Constraint:_ Since this is an SPA, you must implement a logic to **programmatically refresh ads** when the user navigates to a new result page or category.
- **Analytics:** GA4 (Google Analytics 4) with custom event tracking for funnel analysis (Start -> Answer -> Complete -> Share).

## ---

**4. Infrastructure (AWS & DevOps)**

- **Containerization:** Create a production-ready Dockerfile (Multi-stage build to minimize image size, using node:alpine).
- **Orchestration:** docker-compose.yml that includes the Next.js App, Nginx, and (optional) Postgres.
- **Web Server:** **Nginx** as a reverse proxy.
  - _Critical Config:_ Configure aggressive caching for /\_next/static/ assets (Cache-Control: public, max-age=31536000, immutable) to handle viral traffic spikes on a low-spec EC2 instance.

## ---

**5. Execution Plan (Step-by-Step)**

Please strictly follow this order. Do not generate all code at once. **Wait for my confirmation after each step.**

**Step 1: Project Scaffolding & Structure**

- Initialize the Next.js app with the specified stack.
- Set up the folder structure, specifically for i18n (dictionaries) and components.
- Create the Dockerfile and docker-compose.yml for the dev environment.

**Step 2: Core UI Components (The "Vibe")**

- Create the Layout and QuizCard components matching "Image 1" design.
- Implement the ProgressBar and OptionButton with framer-motion interactions.

**Step 3: Quiz Logic & State**

- Implement Zustand store for handling answers.
- Create the logic to calculate results based on weights (MBTI style).

**Step 4: The Viral Result Page (Server-Side)**

- Build the Result Page using Server Components.
- Implement the @vercel/og API route to generate the dynamic result image.

**Step 5: Infrastructure & Deployment Config**

- Finalize Nginx configuration for production.
- Create a GitHub Actions workflow for building and pushing the Docker image to AWS ECR (or Docker Hub).

---

_변경 이력 (Changelog)_

- Initial Request Added.
