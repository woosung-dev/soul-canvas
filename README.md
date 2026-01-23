# 🎨 VibeCheck - Viral Quiz Platform

**VibeCheck** (Soul Canvas) is a high-performance, viral personality test platform built for maximum engagement and shareability. Create beautiful, Instagram-worthy quizzes with dynamic OG images, multi-language support, and seamless social sharing.

## ✨ Features

- 🌍 **Multi-language Support** - Path-based i18n routing (`/ko/`, `/en/`)
- 🎭 **Beautiful UI** - Minimalist design with smooth animations (framer-motion)
- 📊 **Dynamic OG Images** - Auto-generated result cards for social sharing
- 📱 **Mobile-First** - Responsive design optimized for mobile devices
- 🔗 **Social Sharing** - Native Share API + KakaoTalk integration
- 📈 **Analytics** - Google Analytics 4 event tracking
- 💰 **Monetization** - Google AdSense integration
- 🐳 **Production Ready** - Docker + Nginx + CI/CD pipeline

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4
- **Animation:** framer-motion
- **State:** zustand

### Backend & Infrastructure

- **API:** Next.js Server Actions
- **OG Images:** @vercel/og (Satori)
- **Analytics:** Google Analytics 4
- **Ads:** Google AdSense
- **Container:** Docker (Multi-stage build)
- **Web Server:** Nginx
- **CI/CD:** GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 24.0.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd soul-canvas
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

4. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 🔧 Configuration

### Required Environment Variables

| Variable                 | Description                       | Where to Get                                      |
| ------------------------ | --------------------------------- | ------------------------------------------------- |
| `NEXT_PUBLIC_GA_ID`      | Google Analytics 4 Measurement ID | [Google Analytics](https://analytics.google.com/) |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense Publisher ID       | [Google AdSense](https://www.google.com/adsense/) |

### Optional Environment Variables

| Variable                    | Description              | Where to Get                                      |
| --------------------------- | ------------------------ | ------------------------------------------------- |
| `NEXT_PUBLIC_KAKAO_APP_KEY` | Kakao SDK JavaScript Key | [Kakao Developers](https://developers.kakao.com/) |

## 🐳 Docker Deployment

### Development with Docker Compose

```bash
# Build and run all services (App + Nginx + PostgreSQL)
docker-compose up --build
```

Access the app at [http://localhost](http://localhost)

### Production Build

```bash
# Build production image
docker build -t vibecheck:latest .

# Run production container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_GA_ID=your-ga-id \
  -e NEXT_PUBLIC_ADSENSE_ID=your-adsense-id \
  vibecheck:latest
```

## 📁 Project Structure

```
soul-canvas/
├── src/
│   ├── app/
│   │   ├── [lang]/              # i18n routing
│   │   │   ├── page.tsx         # Quiz screen
│   │   │   ├── layout.tsx       # Root layout with GA4/AdSense
│   │   │   └── result/[quizId]/[resultId]/
│   │   │       └── page.tsx     # Result page with OG images
│   │   └── api/og/
│   │       └── route.tsx        # Dynamic OG image generation
│   ├── components/
│   │   ├── layout/              # Layout components
│   │   ├── quiz/                # Quiz UI components
│   │   ├── share/               # Social sharing buttons
│   │   └── ads/                 # AdSense components
│   ├── data/quizzes/            # Quiz content (static data)
│   ├── dictionaries/            # i18n translations
│   ├── lib/                     # Utilities (analytics, quiz logic)
│   ├── store/                   # Zustand state management
│   └── types/                   # TypeScript types
├── docs/                        # Project documentation
├── Dockerfile                   # Production Docker image
├── docker-compose.yml           # Local development stack
└── nginx.conf                   # Nginx configuration
```

## 🎯 Creating New Quizzes

Quizzes are defined as TypeScript files in `src/data/quizzes/`. Example:

```typescript
import { QuizConfig } from "@/types/quiz";

export const myQuiz: QuizConfig = {
  id: "my-quiz",
  title: { ko: "나의 퀴즈", en: "My Quiz" },
  description: { ko: "설명", en: "Description" },
  questions: [
    {
      id: "q1",
      text: { ko: "질문?", en: "Question?" },
      options: [
        { id: "a", text: { ko: "답변 A", en: "Answer A" }, value: "A" },
        { id: "b", text: { ko: "답변 B", en: "Answer B" }, value: "B" },
      ],
    },
  ],
  results: [
    {
      id: "result-a",
      title: { ko: "결과 A", en: "Result A" },
      description: { ko: "설명", en: "Description" },
      matchCondition: (answers) => answers.filter((a) => a === "A").length > 5,
    },
  ],
};
```

## 📊 Analytics Events

The platform tracks the following GA4 events:

- `quiz_start` - User starts a quiz
- `quiz_answer` - User answers a question (params: `question_id`, `answer_value`)
- `quiz_complete` - User completes a quiz (params: `result_id`)
- `share` - User shares result (params: `method`)

## 🚢 CI/CD Pipeline

GitHub Actions automatically builds and pushes Docker images on every push to `main`.

**Setup:**

1. Add repository secrets:
   - `DOCKER_USERNAME` - Your Docker Hub username
   - `DOCKER_PASSWORD` - Your Docker Hub password/token

2. Push to main branch:

```bash
git push origin main
```

The workflow will build and push `username/vibe-check:latest` and `username/vibe-check:<sha>`.

## 📝 Development Workflow

```bash
# Development
npm run dev          # Start dev server

# Production build
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📚 Documentation

For detailed documentation, see:

- [Project Requirements](docs/project_requirements.md)
- [Verification Checklist](docs/verification_checklist.md)

---

**Built with ❤️ using Next.js**
