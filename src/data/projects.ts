export interface Project {
  slug: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  fullNarrative: string;
  purposeList: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
  primaryTechCategories: string[];
}

export const projects: Project[] = [
  {
    slug: "find-it-here",
    name: "Find-It-Here",
    type: "Full Stack MVP",
    tagline: "Bridging the gap between online product discovery and local neighborhood vendors.",
    description:
      "A MERN-stack MVP application built to solve local product discovery by connecting consumers with nearby brick-and-mortar vendors for products that are unavailable online or require offline inspection.",
    fullNarrative:
      "Find-It-Here is a MERN stack MVP application built as a complete alternative approach to modern e-commerce. In an era where many products are purchased online, consumers still struggle to locate niche items, verify build quality before paying, or identify local stores that stock specific products immediately. Find-It-Here addresses this challenge by surfacing products stocked by verified local neighborhood vendors. Shoppers can apply refined location-based filters, contact shopkeepers directly, inspect merchandise offline before committing, and contribute reviews based on authentic shopping experiences.",
    purposeList: [
      "Discover rare or hard-to-find products not readily available on conventional e-commerce websites.",
      "Identify verified brick-and-mortar merchants operating in nearby geographic locations.",
      "Apply refined location-based filters to locate items within walking or short driving distances.",
      "Enable consumers to inspect product quality offline before finalizing purchases.",
      "Establish direct communication channels between local buyers and shopkeepers.",
      "Share transparent community reviews to help neighborhood shoppers evaluate product reliability."
    ],
    keyFeatures: [
      {
        title: "Location-Based Merchant Discovery",
        description: "Filtered search engine that maps user proximity to nearby vendor inventories and physical storefronts."
      },
      {
        title: "Vendor Direct Communication",
        description: "Direct contact channels enabling customers to enquire about immediate stock availability and reserve items."
      },
      {
        title: "Community Experience Reviews",
        description: "User review and rating system focused on real-world product quality and vendor responsiveness."
      },
      {
        title: "Lightweight Merchant Ingestion",
        description: "Simple catalog management interface for small businesses to showcase inventory without complex e-commerce overhead."
      }
    ],
    githubUrl: "https://github.com/Gautham-dhana-sai/Find-It-Here",
    liveUrl: "https://find-it-here-live.vercel.app/",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Mongoose",
      "Vercel",
      "Antigravity"
    ],
    primaryTechCategories: ["React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    slug: "open-bot",
    name: "Open-Bot",
    type: "RAG AI Application",
    tagline: "Autonomous multi-tenant RAG chatbot powered by custom knowledge bases and pgvector.",
    description:
      "A Retrieval-Augmented Generation (RAG) platform that empowers users to register independent portals, ingest custom documents or websites, and deploy contextual AI chatbots with dedicated analytics.",
    fullNarrative:
      "Open-Bot is a Retrieval-Augmented Generation (RAG) platform engineered to provide customizable, knowledge-grounded chatbots for any website, web service, or organization. Through a clean client management interface, users register individual portals and upload dedicated domain documents, links, or web domains. The ingestion pipeline chunks source content, creates high-dimensional vector embeddings, and persists them into PostgreSQL with pgvector. Each portal operates as an isolated knowledge repository with its own retrieval boundaries. Furthermore, Open-Bot equips administrators with granular usage analytics, tracking interaction frequencies, activity graphs, and cumulative token consumption.",
    purposeList: [
      "Provide an open, self-hosted knowledge-grounded chatbot solution for external websites and customer portals.",
      "Enable multi-tenant registration where a single account can operate multiple isolated assistant portals.",
      "Support multimodal knowledge ingestion including document file uploads, raw text, and live website link extractions.",
      "Vectorize and chunk unstructured documents into PostgreSQL pgvector for high-precision semantic retrieval.",
      "Ensure response fidelity strictly grounded in user-provided documentation to mitigate hallucinations.",
      "Deliver transparent telemetry on usage frequency, session metrics, and token consumption via interactive charts."
    ],
    keyFeatures: [
      {
        title: "Multi-Portal Administration",
        description: "Unified client dashboard allowing users to create, configure, and isolate knowledge bases across multiple domains independently."
      },
      {
        title: "Automated Document Ingestion & Vector Storage",
        description: "Chunking and embedding pipeline converting raw documents and crawled URLs into vector representations indexed inside PostgreSQL pgvector."
      },
      {
        title: "Contextual Retrieval & Generation",
        description: "Precision semantic search querying embeddings to inject authoritative context into LLM responses with zero hallucination."
      },
      {
        title: "Usage & Token Telemetry",
        description: "Comprehensive analytics suite monitoring daily query volumes, response latencies, and token consumption per portal."
      }
    ],
    githubUrl: "https://github.com/Gautham-dhana-sai/RAG-Bot",
    liveUrl: "https://rag-bot-client.vercel.app/",
    technologies: [
      "React",
      "Nest.js",
      "RAG",
      "Node.js",
      "PostgreSQL",
      "pgvector",
      "Vercel",
      "Antigravity"
    ],
    primaryTechCategories: ["React", "Nest.js", "PostgreSQL", "pgvector", "RAG"]
  }
];
