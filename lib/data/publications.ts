export type Publication = {
  slug: string;
  title: string;
  venue: string;
  year: string;
  abstract: string;
  keyContribution: string;
  stats: { label: string; value: string }[];
  regions: number;
  models: {
    classical: string[];
    transformer: string[];
  };
  paperUrl: string;
};

export const publication: Publication = {
  slug: "bangla-dialect-classification",
  title:
    "Bangla Dialect Classification Across 11 Regions Using Machine Learning and Transformer-Based Models",
  venue: "IEEE Conference",
  year: "2026",
  abstract:
    "Dialect identification for low-resource languages like Bengali is challenging due to high linguistic similarity between dialects and class imbalance. This paper establishes the first comprehensive performance benchmark for the BanglaDial corpus, comparing classical ML (LinearSVC, Random Forest, Decision Tree) against Transformer-based BanglaBERT.",
  keyContribution:
    "A classical pipeline combining LinearSVC with a FeatureUnion of hybrid word and character TF-IDF n-grams achieves a new SOTA accuracy of 82.03%, significantly outperforming the baseline-fine-tuned BanglaBERT model — demonstrating that a robustly-engineered high-dimensional feature set can beat contextual embeddings for this task, across 11 regional Bangla dialects.",
  stats: [
    { label: "SOTA Accuracy", value: "82.03%" },
    { label: "Outperforms", value: "Fine-tuned BanglaBERT" },
    { label: "Regional Dialects", value: "11" },
  ],
  regions: 11,
  models: {
    classical: ["LinearSVC", "Random Forest", "Decision Tree"],
    transformer: ["BanglaBERT"],
  },
  paperUrl: "https://ieeexplore.ieee.org/document/11429342",
};

export const otherPublications = [
  {
    title:
      "Modality-Conditioned Ensembles and Zero-Shot Cross-Encoder Reranking for Relation Classification Between Astronomy-Paper Objects",
    venue: "AACL-IJCNLP 2026 Workshop WASP · AstroCLIMB shared task",
    status: "Accepted · Co-author",
    description:
      "Combined per-modality classifiers using Qwen3-VL-Embedding, zero-shot Qwen3 rerankers, and LightGBM. Improved leaderboard macro-F1 from 0.4808 to 0.66299 under leak-free 5-fold cross-validation, with negative results documented.",
  },
  {
    title:
      "Satellite-Integrated Machine Learning for Groundwater Depletion Prediction in Rajshahi, Bangladesh",
    venue: "ICCE 2026",
    status: "Accepted",
    description:
      "Applied XGBoost to 14 meteorological, hydrological, and satellite predictors—including GRACE TWS and Landsat NDVI—against 2001–2023 BWDB well data using a chronological 80/20 split. Achieved R²/NSE of 0.93 for urban and 0.86 for rural predictions; in Boalia, satellite indicators were about 15× more influential than rainfall.",
  },
  {
    title:
      "Fairness-Aware Evaluation and Dialect-Adaptive Fine-Tuning of Bangla ASR Foundation Models (BanglaASR-DialEval)",
    venue: "ICCIT 2026",
    status: "Submitted",
    description:
      "Benchmarked Wav2Vec2-XLS-R and Whisper large-v3 by dialect on Ben-10, RegSpeech12, and BRADS, comparing four fine-tuning strategies including LoRA with 0.25% trainable parameters. Unseen-dialect transfer to Sylhet changed relative WER by 3.90%; lexicon-constrained correction reduced WER from 0.8915 to 0.8682.",
  },
] as const;

export const researchPublications = [
  {
    title: publication.title,
    venue: `${publication.venue} · ${publication.year}`,
    status: "Published",
    description: publication.keyContribution,
    url: publication.paperUrl,
  },
  ...otherPublications,
];
