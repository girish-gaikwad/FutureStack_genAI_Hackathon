<img src="/public/readme/banner.png" width="100%" />

<div align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px;">
    <a href="https://future-stack-gen-ai-hackathon.vercel.app/app">
        <img src="https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel" alt="Live Demo" />
    </a>
    <a href="LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
    </a>
</div>

StudySnap is a revolutionary AI-powered learning platform designed to support both students and educational institutions in their digital transformation journey. Built with accessibility and affordability in mind, StudySnap provides an intelligent, scalable alternative to expensive educational platforms.

---

## 🌟 Key Features

| Feature                               | Description                                                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 🤖 **Textbook-Grounded AI Chatbot**   | Answers questions directly from official textbooks; no external solution books needed; context-aware responses based on curriculum content |
| 📝 **Intelligent Quiz Generator**     | AI-powered quiz creation from study material; supports easy, medium, hard levels; personalized for exam prep                               |
| 🎙️ **Voice Learning Agent**           | Natural conversation with textbooks; voice-based learning for accessibility; interactive study sessions                                    |
| 📊 **Multi-Board Support**            | Covers CBSE, ICSE, TN Matric boards; custom textbook upload; curriculum-aligned content                                                    |
| 📈 **Advanced Analytics Dashboard**   | Tracks syllabus coverage, study streaks, class rank, weekly study hours, and progress trends                                               |
| 📚 **Comprehensive Resource Library** | Previous year papers, important questions, curated resources, board-specific materials                                                     |

---

## 🎯 Problems We Solve

<div align="center">

| Problem                                 | StudySnap Solution                                          |
| --------------------------------------- | ----------------------------------------------------------- |
| **Resource-Heavy Traditional Learning** | AI-powered interactive learning with instant feedback       |
| **Time-Consuming Textbook Navigation**  | Smart chatbot that answers directly from textbooks          |
| **Expensive Digital Platforms**         | Affordable, scalable solution for all institutions          |
| **Lack of Personalized Tracking**       | Comprehensive analytics and progress insights               |
| **Limited Infrastructure Access**       | Lightweight, cloud-based platform with offline capabilities |

</div>

---

## 🏗️ Project Architecture

```mermaid
graph TB
    A[Frontend - Next.js] --> B[API Layer]
    B --> C[Backend Services]
    C --> D[AI/ML Services - Cerebras]
    C --> E[Database - MongoDB]
    C --> F[Authentication - JWT]

    G[Voice Agent] --> A
    H[Quiz Generator] --> D
    I[Analytics Engine] --> E
    J[Resource Library] --> E

    K[Docker Container] --> C
    L[Vercel Deployment] --> A
```

### Tech Stack

|                                                             **Programming Languages**                                                              |                                                                                           **Web Development**                                                                                            |                                                             **Databases & Tools**                                                              |                               **AI/ML & Data Science**                               |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
| ![Python](https://skillicons.dev/icons?i=python) ![JavaScript](https://skillicons.dev/icons?i=js) ![TypeScript](https://skillicons.dev/icons?i=ts) | ![React](https://skillicons.dev/icons?i=react) ![Next.js](https://skillicons.dev/icons?i=nextjs) ![Express](https://skillicons.dev/icons?i=express) ![Tailwind](https://skillicons.dev/icons?i=tailwind) | ![MongoDB](https://skillicons.dev/icons?i=mongodb) ![Git](https://skillicons.dev/icons?i=git) ![Vercel](https://skillicons.dev/icons?i=vercel) | ![Python](https://skillicons.dev/icons?i=python) **Cerebras** 🔎 Custom RAG Pipeline |

|                                   **DevOps & Infrastructure**                                   |                                  **Design & Development Tools**                                  |                                       **Operating Systems**                                       |
| :---------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| ![Docker](https://skillicons.dev/icons?i=docker) ![Linux](https://skillicons.dev/icons?i=linux) | ![VS Code](https://skillicons.dev/icons?i=vscode) ![Figma](https://skillicons.dev/icons?i=figma) | ![Linux](https://skillicons.dev/icons?i=linux) ![Windows](https://skillicons.dev/icons?i=windows) |

---

## 📁 Folder Structure

```
studysnap/
├── 📁 backend/                 # Backend services
│   ├── agent.py               # AI agent implementation
│   ├── app.py                 # Main Flask/FastAPI application
│   ├── config.py              # Configuration settings
│   ├── document_pinecone.py   # Document indexing with Pinecone
│   ├── query_pinecone.py      # Query processing
│   ├── requirements_rag.txt   # Python dependencies
│   └── DockerFile             # Backend containerization
│
├── 📁 src/                    # Frontend source code
│   ├── 📁 app/                # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── 📁 (app)/          # App routes
│   │   ├── 📁 (landingpage)/  # Landing page routes
│   │   └── 📁 api/            # API routes
│   │
│   ├── 📁 components/         # Reusable UI components
│   │   ├── 📁 app/            # App-specific components
│   │   ├── 📁 landingPage/    # Landing page components
│   │   ├── 📁 ui/             # Base UI components
│   │   └── 📁 quizz/          # Quiz components
│   │
│   ├── 📁 hooks/              # Custom React hooks
│   ├── 📁 lib/                # Utility libraries
│   └── 📁 stores/             # State management (Zustand)
│
├── 📁 public/                 # Static assets
│   ├── 📁 boards/             # Board-specific images
│   ├── 📁 sponsors/           # Sponsor logos
│   └── ...                    # Other static files
│
├── 📄 package.json            # Dependencies and scripts
├── 📄 next.config.ts          # Next.js configuration
├── 📄 tailwind.config.js      # Tailwind CSS configuration
├── 📄 tsconfig.json           # TypeScript configuration
└── 📄 components.json         # shadcn/ui configuration
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** or **pnpm**
- **Python** (v3.8 or higher) for backend services
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/girish-gaikwad/FutureStack_genAI_Hackathon.git
   cd FutureStack_genAI_Hackathon
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Install backend dependencies**

   ```bash
   cd backend
   pip install -r requirements_rag.txt
   cd ..
   ```

4. **Environment Configuration**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Authentication
   JWT_SECRET=your_jwt_secret_key

   # AI Services
   CEREBRAS_API_KEY=your_cerebras_api_key
   PINECONE_API_KEY=your_pinecone_api_key
   PINECONE_INDEX_NAME=your_pinecone_index

   # Other APIs
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

5. **Start the development servers**

   **Frontend:**

   ```bash
   npm run dev
   ```

   **Backend (in a separate terminal):**

   ```bash
   cd backend
   python app.py
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker Deployment

### Build and run with Docker

```bash
# Build the backend image
cd backend
docker build -t studysnap-backend .

# Run the backend container
docker run -p 8000:8000 --env-file .env studysnap-backend

# Build and run frontend (from root directory)
docker build -t studysnap-frontend .
docker run -p 3000:3000 studysnap-frontend
```

### Using Docker Compose

```bash
docker-compose up --build
```

---

## 📊 Usage Examples

### 1. **Chatbot Interaction**

```javascript
// Example API call to chatbot
const response = await fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    message: "Explain photosynthesis from Chapter 6",
    board: "CBSE",
    subject: "Biology",
    class: "10",
  }),
});
```

### 2. **Quiz Generation**

```javascript
// Generate quiz from study material
const quiz = await fetch("/api/quiz/generate", {
  method: "POST",
  body: JSON.stringify({
    topic: "Chemical Reactions",
    difficulty: "medium",
    questionCount: 10,
  }),
});
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Write or update tests**
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style Guidelines

- Follow TypeScript/ESLint configurations
- Use Prettier for code formatting
- Write meaningful commit messages
- Add JSDoc comments for functions
- Ensure responsive design principles

### Issues and Bug Reports

- Use GitHub Issues for bug reports
- Provide detailed reproduction steps
- Include browser/environment information
- Add screenshots when applicable

---

## 🌟 Roadmap
| Phase                | Timeline         | Features                                                                                                                                           | Status      |
|----------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| **Phase 1 (Current)**| Q1 2025          | - AI-powered chatbot with textbook grounding<br>- Quiz generation system<br>- Multi-board support (CBSE, ICSE, TN Matric)<br>- Analytics dashboard<br>- Voice learning agent | ✅ Completed |
| **Phase 2**          | Q2 2025          | - Mobile app with React Native<br>- Offline mode for low-infrastructure areas<br>- Advanced gamification features<br>- Teacher dashboard and classroom management | ⏳ Upcoming  |
| **Phase 3**          | Q3–Q4 2025       | - Multi-language support<br>- Regional board expansion<br>- AI-powered study plan generation<br>- Integration with LMS platforms<br>- Advanced analytics and insights | ⏳ Upcoming  |
| **Phase 4**          | 2026             | - AR/VR learning experiences<br>- Peer-to-peer learning features<br>- Marketplace for educational content<br>- White-label solutions for institutions | ⏳ Upcoming  |

---
## 📞 Support & Community

### Get Help

- 💼 [LinkedIn](https://www.linkedin.com/in/girish-gaikwad2055)
- 💬 [Discord Community](https://discord.gg/studysnap)
- 📧 [Email Support](mailto:girishgaikwad2055@gmail.com)
- 🐛 [Report Issues](https://github.com/girish-gaikwad/FutureStack_genAI_Hackathon/issues)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 StudySnap Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

### Special Thanks

- **FutureStack AI Hackathon** organizering the this Event
- **Cerebras** for AI model optimization support
- **Docker** for containerization and easy deployment
- **Meta** for open-source contributions and developer resources
- **Open Source Community** for incredible tools and libraries

### Built With Love By

- **[Girish Gaikwad](https://github.com/girish-gaikwad)** - Full Stack Developer & AI Engineer
- **[Navani](https://github.com/Navani001)** - Full Stack Developer & AI Engineer

### Inspiration

> "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela

We believe technology should make quality education accessible to everyone, regardless of economic background or infrastructure limitations.

---

<div align="center">
  <h3>🌟 Star this repo if you find it helpful! 🌟</h3>
  
  [![GitHub stars](https://img.shields.io/github/stars/girish-gaikwad/FutureStack_genAI_Hackathon?style=social)](https://github.com/girish-gaikwad/FutureStack_genAI_Hackathon/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/girish-gaikwad/FutureStack_genAI_Hackathon?style=social)](https://github.com/girish-gaikwad/FutureStack_genAI_Hackathon/network/members)
  
  **Made with ❤️ for the future of education**
</div>

---

_Last updated: October 5, 2025_
