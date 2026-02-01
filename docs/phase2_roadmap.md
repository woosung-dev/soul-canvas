# Phase 2 Roadmap: Global Expansion & Content Scalability

This document outlines the plan to fully realize the "Internationalization" and "Scalability" requirements defined in `project_requirements.md`.

## 1. Complete Internationalization (i18n)

**Objective**: Ensure the platform provides a truly native experience in both English and Korean.

- [ ] **Data Structure Migration** (Priority: High)
  - Refactor `QuizConfig` interface to support multi-language strings.
  - `string` -> `{ ko: string; en: string }`
  - Update `love-style.ts` with English translations.
- [ ] **Component Localization** (Priority: High)
  - Update `QuizCard`, `QuizList`, and `ResultPage` to render text based on the active URL locale (`/en` vs `/ko`).
  - Ensure dynamic OG image generation supports English text.
- [ ] **UI Refinement**
  - Verify layout stability with English text (typically longer than Korean).

## 2. Content Scalability Verification

**Objective**: Prove the architecture supports multiple quiz types as required.

- [ ] **New Quiz Category: "Workplace Persona Types"** (Priority: Medium)
  - create `work-persona.ts`
  - Purpose: Verify the system handles multiple quiz data files correctly.
  - Features: Different question count, different result logic (if needed).

## 3. SEO & Viral Enhancements

- [ ] **Sitemap Generation**
  - Auto-generate `sitemap.xml` including all i18n paths (`/ko/...`, `/en/...`).
- [ ] **JSON-LD Structured Data**
  - Add Schema.org markup for better search visibility.

---

_Based on `project_requirements.md` Section 3 (i18n) and Section 1 (Scalability)._
