/**
 * Editorial Portfolio & Clippings Data
 * 
 * Styled in the Musée d'Orsay / Caillebotte editorial gallery aesthetic.
 * Update this file with your own works, articles, and biographical details.
 */

const personalInfo = {
  name: "Aadith Krishna E P",
  monogram: { top: "A", bottom: "K" },
  exhibitionTitle: "Aadith's",
  exhibitionSubtitle: "Works & Clippings",
  dateRange: "From November 2026 to Present",
  role: "Software Developer & Digital Essayist",
  location: "kerela, India — Available Globally",
  email: "aadithaffiliate@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  biographyParagraph1: "As a computer science engineering student and digital content creator, I combine technical expertise with a refined approach to visual storytelling. Proficient in DaVinci Resolve, CapCut, and Adobe After Effects, I create polished video content with a focus on precise editing, compelling motion graphics, and meticulous attention to detail.",
  biographyParagraph2: "My work also includes 3D design and visual development using Blender. With a strong problem-solving mindset and a commitment to quality, I bring creative concepts to life through professional, engaging, and visually cohesive content..",
  statementQuote: "Beyond the frame, beyond the ordinary—every cut carries a presence of its own.",
  statementAuthor: "Aadith Krishna, Notes on Craftsmanship",
  stats: [
    { label: "Active Years", value: "03+" },
    { label: "Published Works", value: "24+" },
    { label: "Global Readership", value: "45K+" },
    { label: "Open Source Stars", value: "2.1K" }
  ],
  disciplines: [
    "Video Editing",
    "Motion graphics",
    "VFX Editing",
    "UI/UX Design Systems",
    "API Engineering",
    "Creator"
  ]
};

// Hero staggered artwork & clippings (matches Image 1 & 2 layout)
const heroExhibits = {
  topLeft: {
    id: "hero-1",
    title: "Varkala",
    subtitle: "2026 Prethyasha",
    category: "Travelling",
    tag: "beach",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Gustave_Caillebotte_-_Le_Pont_de_l%27Europe_-_Google_Art_Project.jpg/800px-Gustave_Caillebotte_-_Le_Pont_de_l%27Europe_-_Google_Art_Project.jpg",
    details: "Exploring scalable event stream architectures with sub-millisecond latencies and resilient message broker backpressure patterns.",
    link: "https://medium.com"
  },
  bottomLeft: {
    id: "hero-2",
    title: "Portrait de Jean Daurelle, en pied",
    subtitle: "1887 Gustave Caillebotte",
    category: "Identity & Interface",
    tag: "Design System",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gustave_Caillebotte_-_Portrait_de_Jean_Daurelle_en_pied_-_Mus%C3%A9e_d%27Orsay.jpg/800px-Gustave_Caillebotte_-_Portrait_de_Jean_Daurelle_en_pied_-_Mus%C3%A9e_d%27Orsay.jpg",
    details: "A comprehensive WCAG AAA accessible design token system crafted for high-contrast, typographic-first applications.",
    link: "https://behance.net"
  },
  topRight: {
    id: "hero-3",
    title: "Portrait de Richard Gallo",
    subtitle: "1884 Gustave Caillebotte",
    category: "Open Source Engineering",
    tag: "Developer Tool",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gustave_Caillebotte_-_Portrait_de_Richard_Gallo_-_Mus%C3%A9e_des_Beaux-Arts_de_Rennes.jpg/800px-Gustave_Caillebotte_-_Portrait_de_Richard_Gallo_-_Mus%C3%A9e_des_Beaux-Arts_de_Rennes.jpg",
    details: "OmniDash: An open-source interactive telemetry dashboard aggregating real-time server metrics into a clean glassmorphic view.",
    link: "https://github.com"
  },
  bottomRight: {
    id: "hero-4",
    title: "Rue de Paris, temps de pluie",
    subtitle: "1877 Gustave Caillebotte",
    category: "Critical Essays",
    tag: "Editorial Essay",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg/800px-Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg",
    details: "A cautionary critique of excessive micro-frontend adoption and practical guidelines on preserving the modular monolith.",
    link: "https://dev.to"
  }
};

// Full catalogue of curated work clippings (matches Image 3 & 4 layout)
const workClippings = [
  {
    id: "clip-1",
    title: "Designing Scalable Architecture for Real-Time Event Streams",
    category: "writing",
    type: "Technical Essay",
    publisher: "Medium / Better Programming",
    date: "From October 08th, 2024 to January 19th, 2025",
    dateShort: "Oct 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Gustave_Caillebotte_-_Le_Pont_de_l%27Europe_-_Google_Art_Project.jpg/800px-Gustave_Caillebotte_-_Le_Pont_de_l%27Europe_-_Google_Art_Project.jpg",
    caption: "Le pont de l'Europe, 1876-1877 Gustave Caillebotte",
    excerpt: "An in-depth exploration of asynchronous event processing, backpressure management, and achieving sub-millisecond latencies across distributed consumer clusters.",
    details: "This article deconstructs distributed streaming pipelines, comparing Kafka and RabbitMQ with practical benchmarks. It details fault tolerance patterns, idempotent consumers, and handling traffic spikes under strict latency SLAs.",
    tags: ["Distributed Systems", "Kafka", "Node.js", "Architecture"],
    metrics: "14.2K reads • 850 claps",
    link: "https://medium.com"
  },
  {
    id: "clip-2",
    title: "OmniDash: Unified Cloud Metric & Telemetry Visualizer",
    category: "projects",
    type: "Open Source Tool",
    publisher: "GitHub Spotlight & Product Hunt #3",
    date: "From August 15th, 2024 to November 30th, 2024",
    dateShort: "Aug 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gustave_Caillebotte_-_Portrait_de_Richard_Gallo_-_Mus%C3%A9e_des_Beaux-Arts_de_Rennes.jpg/800px-Gustave_Caillebotte_-_Portrait_de_Richard_Gallo_-_Mus%C3%A9e_des_Beaux-Arts_de_Rennes.jpg",
    caption: "Portrait de Richard Gallo, 1884 Gustave Caillebotte",
    excerpt: "An open-source interactive telemetry dashboard aggregating logs, server health, and API latency into a clean editorial interface.",
    details: "Built with Next.js, WebSockets, and modern CSS. OmniDash connects with standard Prometheus and custom health endpoints, rendering live time-series visualizations with customizable thresholds and Slack notification webhooks.",
    tags: ["React", "TypeScript", "Data Viz", "WebSockets"],
    metrics: "⭐ 1.4k GitHub Stars",
    link: "https://github.com"
  },
  {
    id: "clip-3",
    title: "Minimalist Brand Identity & Design System for Bloom Health",
    category: "design",
    type: "Design System & Case Study",
    publisher: "Behance / Dribbble Featured",
    date: "From June 01st, 2024 to September 15th, 2024",
    dateShort: "Jun 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gustave_Caillebotte_-_Portrait_de_Jean_Daurelle_en_pied_-_Mus%C3%A9e_d%27Orsay.jpg/800px-Gustave_Caillebotte_-_Portrait_de_Jean_Daurelle_en_pied_-_Mus%C3%A9e_d%27Orsay.jpg",
    caption: "Portrait de Jean Daurelle, en pied, 1887 Gustave Caillebotte",
    excerpt: "Complete brand design overhaul, typography hierarchy, and a Figma design token library for a modern healthcare application.",
    details: "Crafted accessible high-contrast color palettes (WCAG AAA compliant), custom iconography, and reusable Figma components with auto-layout and interactive variants. Led to a 32% increase in mobile app onboarding completion.",
    tags: ["Figma", "UI/UX", "Design Systems", "Typography"],
    metrics: "Featured in UI Trends 2024",
    link: "https://behance.net"
  },
  {
    id: "clip-4",
    title: "Why Modern Micro-Frontends Fail (And How to Fix Them)",
    category: "writing",
    type: "Editorial Essay",
    publisher: "Hacker News Top Story #1",
    date: "From April 12th, 2024 to July 20th, 2024",
    dateShort: "Apr 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg/800px-Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg",
    caption: "Rue de Paris, temps de pluie, 1877 Gustave Caillebotte",
    excerpt: "A cautionary critique of excessive micro-frontend adoption and practical guidelines on preserving the modular monolith.",
    details: "Analyzed organizational cognitive load, version drift, and asset delivery overhead across 5 engineering teams. Ranked #1 on Hacker News front page for 16 hours with lively community discussions.",
    tags: ["Frontend", "Engineering Culture", "Web Performance"],
    metrics: "28K views • 240+ comments",
    link: "https://dev.to"
  },
  {
    id: "clip-5",
    title: "FastPrompt: Agentic Prompt Workbench CLI",
    category: "projects",
    type: "Developer Utility",
    publisher: "GitHub & Terminal Tools",
    date: "From February 10th, 2024 to May 30th, 2024",
    dateShort: "Feb 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Gustave_Caillebotte_-_Partie_de_bateau_-_Mus%C3%A9e_d%27Orsay.jpg/800px-Gustave_Caillebotte_-_Partie_de_bateau_-_Mus%C3%A9e_d%27Orsay.jpg",
    caption: "Partie de bateau, 1877-1878 Gustave Caillebotte",
    excerpt: "Lightweight command-line utility for developers to version-control, test, and benchmark AI system prompts across different LLM providers.",
    details: "Implemented in Python with rich terminal UI (Textual). Allows prompt engineering teams to run automated evaluations, track hallucination rates, and compare token latency across Gemini, Claude, and GPT models directly in CI/CD pipelines.",
    tags: ["Python", "CLI", "LLM", "Developer Tools"],
    metrics: "2.1k downloads/month",
    link: "https://github.com"
  },
  {
    id: "clip-6",
    title: "Building Offline-First Encrypted Journals with WebCrypto",
    category: "writing",
    type: "Technical Guide",
    publisher: "Personal Journal & Substack",
    date: "From November 05th, 2023 to March 02nd, 2024",
    dateShort: "Dec 2023",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gustave_Caillebotte_-_Portrait_de_Richard_Gallo_-_Mus%C3%A9e_des_Beaux-Arts_de_Rennes.jpg/800px-Gustave_Caillebotte_-_Portrait_de_Richard_Gallo_-_Mus%C3%A9e_des_Beaux-Arts_de_Rennes.jpg",
    caption: "Drawing Cathedrals in the 19th Century",
    excerpt: "Building an encrypted, offline-first personal notes application using IndexedDB, WebCrypto AES-GCM, and Service Workers.",
    details: "Step-by-step breakdown of using AES-GCM client-side encryption, local IndexedDB persistence, and PWA manifests to guarantee privacy without recurring server costs.",
    tags: ["WebCrypto", "PWA", "JavaScript", "Security"],
    metrics: "6.8K readers",
    link: "https://aadith.dev/blog"
  }
];

// About screen featured artwork
const aboutArtwork = {
  title: "Partie de bateau",
  artist: "Gustave Caillebotte",
  year: "1877-1878",
  location: "Musée d'Orsay, Paris",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Gustave_Caillebotte_-_Partie_de_bateau_-_Mus%C3%A9e_d%27Orsay.jpg/800px-Gustave_Caillebotte_-_Partie_de_bateau_-_Mus%C3%A9e_d%27Orsay.jpg"
};
