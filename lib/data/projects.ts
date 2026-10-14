export type ProjectType = "Research Notebook" | "Deployed" | "Applied AI";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  statusBadge: string;
  period?: string;
  summary: string;
  problem: string;
  motivation: string;
  architecture: string;
  features: string[];
  challenges: string;
  solutions: string;
  futureWork: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  notebookUrl?: string;
  ctaLabel: "View Notebook" | "Live Demo" | "Case Study";
};

export const projects: Project[] = [
  {
    slug: "voicepandita",
    title: "VoicePandita — Voice-First AI Tutor for Bangla Learners",
    type: "Applied AI",
    statusBadge: "Infinity AI BuildFest 2026 · EdTech",
    summary:
      "Bangla-first, curriculum-grounded AI tutor for text, voice, and photographed questions, with verified language support for Chakma, Marma, and Garo.",
    problem:
      "Bangla learners need accessible, curriculum-aligned help across text, spoken questions, and handwritten work, while low-resource language support must avoid presenting unverified translations as fact.",
    motivation:
      "Build an education tool grounded in the NCTB curriculum for SSC/HSC learners, with voice-first access and careful language support for communities underserved by mainstream AI systems.",
    architecture:
      "Built as a Next.js web application with Supabase pgvector retrieval, Gemini for tutoring, Groq Whisper for speech-to-text, text-to-speech responses, vision OCR for photographed and handwritten work, and Ollama-backed offline fallbacks. Added LoRA/QLoRA training pipelines using Qwen2.5 and a BdSL sign-avatar.",
    features: [
      "Curriculum-grounded explanations for NCTB SSC/HSC topics",
      "Question input by text, voice, or photographed pages",
      "RAG with deterministic and offline Ollama fallbacks",
      "Diagrams and short Manim/React animations for explanations",
      "Voice-practice grading, handwritten-answer checking via vision OCR, and student analytics",
      "Verified-data language bridge for Chakma, Marma, and Garo that does not fabricate translations",
      "LoRA/QLoRA pipelines and a BdSL sign-avatar",
    ],
    challenges:
      "Combining multimodal tutoring and curriculum-grounded retrieval while remaining useful when model services are unavailable, and supporting low-resource languages without inventing translations.",
    solutions:
      "Used retrieval-grounded responses with deterministic and Ollama offline fallbacks, and designed the Chakma, Marma, and Garo language bridge to rely on verified data rather than generated guesses.",
    futureWork:
      "Expand the verified language resources, evaluate tutoring and voice-practice quality with learners, and continue improving offline and accessibility support.",
    techStack: [
      "Next.js",
      "Supabase",
      "pgvector",
      "Gemini",
      "Groq Whisper",
      "Text-to-Speech",
      "Ollama",
      "Qwen2.5",
      "LoRA/QLoRA",
      "OCR",
      "Manim",
      "React",
      "BdSL",
    ],
    githubUrl: "https://github.com/HinataHamura/VoicePandita",
    liveUrl: "https://voice-pandita.vercel.app/",
    ctaLabel: "Case Study",
  },
  {
    slug: "bangla-dialect",
    title: "Bangla Dialect Standardization & Classification",
    type: "Research Notebook",
    statusBadge: "Published Research",
    summary:
      "BiLSTM-based dialect-to-standard normalization and classification across 11 regional Bangla dialects — the research underpinning an IEEE publication.",
    problem:
      "Bengali dialects are highly similar linguistically and suffer from class imbalance, making automatic dialect identification and standardization difficult for low-resource NLP pipelines.",
    motivation:
      "Standardizing regional Bangla dialect text into a canonical form and reliably classifying dialect origin has direct applications in speech technology, accessibility, and low-resource language research — an underserved area compared to high-resource languages.",
    architecture:
      "Implemented and compared BiLSTM, BiGRU, and Transformer-based Seq2Seq models for dialect-to-standard normalization, alongside classification models across 11 regional dialects.",
    features: [
      "Dialect-to-standard Bangla text normalization",
      "Multi-class dialect classification across 11 regions",
      "Seq2Seq architecture comparison (BiLSTM, BiGRU, Transformer)",
      "Evaluation via BLEU, chrF++, ROUGE, and exact-match accuracy",
    ],
    challenges:
      "High linguistic similarity between neighboring dialects and imbalanced class distribution across the 11 regions made both normalization and classification difficult to generalize.",
    solutions:
      "Systematically benchmarked BiLSTM, BiGRU, and Transformer-based Seq2Seq architectures; BiLSTM achieved the best performance across BLEU, chrF++, ROUGE, and exact-match accuracy metrics.",
    futureWork:
      "This research was extended into a published IEEE benchmark comparing classical ML and BanglaBERT — see the Research page for the full downstream classification results (82.03% SOTA accuracy).",
    techStack: ["Python", "PyTorch", "BiLSTM", "BiGRU", "Transformers", "NLP"],
    notebookUrl:
      "https://colab.research.google.com/gist/HinataHamura/3fa5c2441475567a43a8bf0a2c5b5050/dialect-standardization.ipynb",
    ctaLabel: "View Notebook",
  },
  {
    slug: "appendicitis-ml",
    title: "Regensburg Pediatric Appendicitis ML Model",
    type: "Research Notebook",
    statusBadge: "Research Notebook",
    summary:
      "Pediatric appendicitis prediction pipeline on the Regensburg dataset using AutoGluon stacked ensembles, reaching >99% on the target metric.",
    problem:
      "Predicting pediatric appendicitis diagnosis accurately from clinical data requires handling multiclass outcomes with high-stakes precision, where model reliability directly affects diagnostic support.",
    motivation:
      "Applying rigorous ML pipeline design — preprocessing, feature selection, ensemble stacking — to a real clinical multiclass classification problem, demonstrating that applied ML skills extend beyond NLP into healthcare data.",
    architecture:
      "Built with AutoGluon for multiclass classification: preprocessing, feature scaling, correlation-based feature selection, and stacked ensemble learning combining multiple base learners.",
    features: [
      "Preprocessing and feature scaling pipeline",
      "Correlation-based feature selection",
      "Stacked ensemble learning across multiple model families",
      "Trained and optimized LightGBM, CatBoost, XGBoost, and Neural Networks (NN_TORCH)",
    ],
    challenges:
      "Achieving diagnostic-grade accuracy (targeting >99%) on a multiclass clinical dataset required careful feature engineering and ensemble tuning to avoid overfitting on a relatively small clinical dataset.",
    solutions:
      "Used AutoGluon's stacked ensembling to combine LightGBM, CatBoost, XGBoost, and NN_TORCH, with correlation-based feature selection to reduce noise and improve generalization.",
    futureWork:
      "Potential extension to external validation datasets and deployment as a clinical decision-support prototype with proper clinical oversight.",
    techStack: [
      "Python",
      "AutoGluon",
      "LightGBM",
      "CatBoost",
      "XGBoost",
      "Neural Networks",
    ],
    notebookUrl:
      "https://colab.research.google.com/drive/1QYoMFxOi1bHYDfCmdAIVMacc3Xc0z6lZ#scrollTo=x4NSBwyzX10K",
    ctaLabel: "View Notebook",
  },
  {
    slug: "chat-app",
    title: "Real-Time Chat Application with Authentication",
    type: "Deployed",
    statusBadge: "Deployed",
    period: "Feb 2026 – Apr 2026",
    summary:
      "Full-stack real-time chat app with JWT auth, group messaging, and file sharing — deployed on Azure with Nginx and PM2.",
    problem:
      "Real-time communication apps need secure authentication, low-latency messaging, and reliable file handling — a well-rounded systems challenge beyond a typical CRUD app.",
    motivation:
      "Demonstrate production-grade full-stack engineering: real auth, real-time infrastructure, and real deployment practices (reverse proxy, process management) rather than a localhost demo.",
    architecture:
      "Node.js and Express.js backend with a WebSocket (ws) layer for real-time messaging, SQLite for persistence, and JWT-based authentication. Deployed on a Microsoft Azure VM behind an Nginx reverse proxy, managed with PM2 for process supervision.",
    features: [
      "JWT-based user registration and login",
      "Custom group-based chat rooms",
      "Real-time messaging via WebSockets",
      "File and image upload/sharing",
      "Persistent chat history",
    ],
    challenges:
      "Coordinating real-time WebSocket connections with authenticated sessions and persistent group state, while keeping the deployment resilient on a self-managed VM.",
    solutions:
      "Used JWT for stateless auth validation on WebSocket connections, SQLite for lightweight persistence, and Nginx + PM2 for a production-grade reverse proxy and process management setup on Azure.",
    futureWork:
      "Add read receipts, typing indicators, and horizontal scaling of the WebSocket layer for larger concurrent user loads.",
    techStack: [
      "Node.js",
      "Express.js",
      "WebSocket (ws)",
      "SQLite",
      "JWT",
      "HTML",
      "CSS",
      "JavaScript",
      "Microsoft Azure",
      "Nginx",
      "PM2",
    ],
    githubUrl: "https://github.com/HinataHamura/ChatApp",
    liveUrl: "https://chatapp-nix9.onrender.com/",
    ctaLabel: "Live Demo",
  },
  {
    slug: "cookio",
    title: "Cook.io — Secure Recipe Discovery & Analytics Platform",
    type: "Deployed",
    statusBadge: "Deployed",
    period: "Mar 2025 – Oct 2025",
    summary:
      "Full-stack recipe discovery app with Firebase auth, a secured Spoonacular API proxy, and an ML-based recipe category predictor (86% accuracy).",
    problem:
      "Recipe discovery apps that call third-party APIs directly from the browser risk exposing API keys, and typically lack any intelligent categorization of content.",
    motivation:
      "Build a recipe platform with genuine security discipline (no exposed keys) and add applied ML value through automatic recipe category prediction.",
    architecture:
      "Vanilla JavaScript frontend with Firebase Authentication and Firestore for user data, Netlify Functions acting as a secure proxy to the Spoonacular API (hiding API keys from the browser), and a Python Flask backend serving a Logistic Regression + Random Forest model for recipe category prediction.",
    features: [
      "Recipe discovery via secured Spoonacular API proxy",
      "Nutrition details and calorie tracking",
      "Saved recipe analytics",
      "Google Sign-In via Firebase Authentication",
      "ML-based recipe category prediction (86% accuracy)",
      "Responsive UI with dark/light mode",
    ],
    challenges:
      "Keeping third-party API keys out of client-side code while still delivering fast, dynamic recipe search and filtering.",
    solutions:
      "Routed all Spoonacular API calls through Netlify Functions so the API key never reaches the browser, and served the ML category classifier from a separate Flask backend (Logistic Regression + Random Forest, 86% accuracy).",
    futureWork:
      "Expand the category prediction model with a larger labeled dataset and add personalized recipe recommendations based on saved history.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Firestore",
      "Netlify Functions",
      "Python",
      "Flask",
      "Logistic Regression",
      "Random Forest",
    ],
    liveUrl: "https://cookio-esha.netlify.app/index.html",
    ctaLabel: "Live Demo",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
