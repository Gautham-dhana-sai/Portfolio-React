export interface ProjectArchitectureLayer {
  layer: string;
  components: string[];
  description: string;
}

export interface ProjectSection {
  title: string;
  heading: string;
  content: string[];
  highlights?: string[];
}

export interface ProjectItem {
  id: 'open-bot' | 'find-it-here';
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  problemStatement: string;
  solutionSummary: string;
  architectureLayers: ProjectArchitectureLayer[];
  sections: ProjectSection[];
  engineeringConsiderations: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "open-bot",
    slug: "open-bot",
    name: "Open-Bot",
    tagline: "Customizable multi-portal RAG platform powered by vector search and automated ingestion",
    category: "AI / RAG / Full Stack Application",
    description:
      "Open-Bot is a Retrieval-Augmented Generation platform designed to provide customizable chatbots for websites and services using their own knowledge sources. The platform allows users to register and manage multiple independent portals, each with its own knowledge base and chatbot context.",
    technologies: [
      "React",
      "Node.js",
      "NestJS",
      "RAG",
      "PostgreSQL",
      "pgvector",
      "Vercel",
      "TypeScript"
    ],
    githubUrl: "https://github.com/Gautham-dhana-sai/RAG-Bot",
    liveUrl: "https://rag-bot-client.vercel.app/",
    features: [
      "Multi-portal management under a single administrative account",
      "Isolated knowledge bases per registered portal",
      "Multi-format file ingestion (PDF, DOCX, TXT)",
      "Automated link ingestion and full website extraction",
      "Embedding generation and pgvector similarity indexing",
      "Context-grounded Retrieval-Augmented Generation (RAG)",
      "Portal-level query analytics and token consumption monitoring",
      "Individual portal widget customizations and access policies"
    ],
    problemStatement:
      "Standard chatbots lack domain knowledge or hallucinate when asked company-specific questions. Meanwhile, building bespoke AI chat integrations usually requires complex infrastructure, custom vector pipelines, and expensive data engineering. Small-to-medium teams need a turn-key solution to create isolated, custom-grounded AI assistants for various websites without managing separate database instances.",
    solutionSummary:
      "Open-Bot provides an intuitive client interface where a single user can create and configure multiple independent portals. Each portal operates as an isolated knowledge container with dedicated ingestion pipelines for files, URLs, and scraped pages. Content is chunked, converted to vector embeddings, and indexed in PostgreSQL via pgvector, enabling fast semantic retrieval and accurate, grounded responses accompanied by token consumption telemetry.",
    architectureLayers: [
      {
        layer: "Client & Presentation",
        components: ["React SPA", "Portal Dashboard", "Embeddable Chat Widget", "Tailwind CSS"],
        description: "Manages portal configuration, file drop zones, link submission, and real-time streaming chatbot interfaces."
      },
      {
        layer: "Backend API & Orchestration",
        components: ["NestJS Framework", "Document Parser", "Web Scraper", "Auth & Token Guard"],
        description: "Handles secure multi-tenant request routing, background document ingestion, chunking, and LLM communication."
      },
      {
        layer: "Vector Storage & Retrieval",
        components: ["PostgreSQL", "pgvector Extension", "Cosine Distance Indexing"],
        description: "Stores portal-isolated document embeddings with high-speed approximate nearest neighbor vector search."
      },
      {
        layer: "Analytics & Telemetry",
        components: ["Query Counter", "Token Consumption Tracker", "Usage Graphs"],
        description: "Tracks query frequency, prompt tokens, completion tokens, and portal engagement over time."
      }
    ],
    sections: [
      {
        title: "Multi-Portal Architecture",
        heading: "Isolated Knowledge Containers Under Unified Management",
        content: [
          "Users can register and administer multiple disparate portals from one central dashboard. Each portal represents an autonomous chatbot identity with its own specific knowledge base, tone parameters, and embed credentials.",
          "Data isolation is strictly enforced at the database level, ensuring semantic queries against Portal A never leak or traverse embeddings belonging to Portal B."
        ],
        highlights: [
          "Centralized user authentication with multi-tenant portal scoping",
          "Distinct API keys and embed snippets for independent domain integration",
          "Granular configuration of bot greetings, system context, and response boundaries"
        ]
      },
      {
        title: "Ingestion Pipelines",
        heading: "Multi-Source Document Processing & Vectorization",
        content: [
          "Open-Bot simplifies knowledge curation through three distinct ingestion channels: direct file uploads (PDF, DOCX, text), direct web links, and automated deep website crawling.",
          "Ingested documents are cleansed, parsed, split into normalized chunks with contextual overlap, and converted to high-dimensional embeddings before indexing in PostgreSQL with pgvector."
        ],
        highlights: [
          "Multi-format parsing preserving document hierarchy and tabular data",
          "Automated recursive link crawler with configurable depth limits",
          "pgvector indexing utilizing cosine similarity for sub-second semantic lookups"
        ]
      },
      {
        title: "Telemetry & Token Monitoring",
        heading: "Real-Time Usage Insights and Cost Governance",
        content: [
          "To provide operational transparency, Open-Bot tracks every interaction, query volume, and token footprint across all managed portals.",
          "Administrators can analyze usage curves, identify trending user inquiries, and monitor token consumption metrics through visual graphs to predict API expenses accurately."
        ],
        highlights: [
          "Visual breakdown of input vs output token consumption",
          "Per-portal usage graphs and query volume trends",
          "Detailed query logs with retrieval latency and confidence indicators"
        ]
      }
    ],
    engineeringConsiderations: [
      "Ensuring clean multi-portal data isolation in PostgreSQL without the overhead of spinning up separate database instances.",
      "Optimizing document chunking and overlap boundaries to maximize semantic relevance while respecting model context windows.",
      "Handling asynchronous web extraction and large document parsing efficiently to avoid blocking API request cycles.",
      "Designing a lightweight embeddable React chat widget with zero stylesheet collisions on host sites."
    ]
  },
  {
    id: "find-it-here",
    slug: "find-it-here",
    name: "Find-It-Here",
    tagline: "Hyperlocal marketplace and product discovery engine connecting offline vendors with consumers",
    category: "MERN / Local Product Discovery / Marketplace",
    description:
      "Find-It-Here is a MERN stack MVP designed as an alternative to conventional e-commerce discovery. The platform connects consumers with nearby local merchants for specialty and hard-to-find items, bridging digital discovery with verified in-person purchasing.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Vercel",
      "JavaScript"
    ],
    githubUrl: "https://github.com/Gautham-dhana-sai/Find-It-Here",
    liveUrl: "https://find-it-here-live.vercel.app/",
    features: [
      "Location-based product search and geographic radius filtering",
      "Verified local vendor storefront profiles and inventories",
      "Direct merchant communication channels via phone and messaging",
      "Offline purchase enablement with store addresses and hours",
      "Community product ratings and peer review aggregation",
      "Category-based browsing for rare, specialty, and artisanal goods"
    ],
    problemStatement:
      "Modern e-commerce platforms excel at mass-market goods, but finding unique, urgent, or rare items locally remains frustrating. Shoppers frequently see niche products on social media or need immediate physical verification, yet standard search engines only display distant online shops with days-long shipping. Meanwhile, neighborhood brick-and-mortar merchants lack visibility for their specialized stock.",
    solutionSummary:
      "Find-It-Here eliminates this discovery gap by offering a location-centric catalog. Users search for desired items and apply geographic proximity filters to identify neighborhood vendors carrying them. Shoppers can inspect photos, read verified peer reviews, contact shop owners directly, and visit nearby stores to inspect items in person before buying.",
    architectureLayers: [
      {
        layer: "Frontend Application",
        components: ["React", "Geo-Location Filtering", "Product Catalog UI", "Responsive Cards"],
        description: "Enables instant search, distance radius sorting, vendor details, and review submission."
      },
      {
        layer: "REST API Layer",
        components: ["Express.js", "Node.js Runtime", "JWT Authentication", "Location Middleware"],
        description: "Coordinates product queries, geospatial proximity calculations, and vendor profile endpoints."
      },
      {
        layer: "Database & Indexing",
        components: ["MongoDB Atlas", "Mongoose ODM", "2dsphere Geo Indexes"],
        description: "Stores structured merchant listings, product catalogs, customer reviews, and coordinate locations."
      },
      {
        layer: "Deployment & Delivery",
        components: ["Vercel Hosting", "CDN Asset Caching", "Serverless Functions"],
        description: "Provides low-latency global delivery and rapid MVP iteration."
      }
    ],
    sections: [
      {
        title: "Hyperlocal Product Discovery",
        heading: "Bridging the Gap Between Online Desire and Offline Availability",
        content: [
          "Users can filter items by location proximity, discovering where specialty products are stocked within their city or neighborhood.",
          "The search index prioritizes physical accessibility, allowing shoppers to verify product quality firsthand rather than taking risks with unvetted online deliveries."
        ],
        highlights: [
          "Dynamic distance-based filtering and neighborhood zoning",
          "Real-time inventory indicators submitted by verified merchants",
          "Rich product detail views featuring photos, specifications, and vendor notes"
        ]
      },
      {
        title: "Vendor Ecosystem & Communication",
        heading: "Empowering Local Merchants with Zero-Commission Visibility",
        content: [
          "Neighborhood merchants receive a streamlined digital presence to showcase unique inventory without being squeezed by high e-commerce commission fees.",
          "Direct contact buttons allow customers to call, message, or request item holds before making the trip to the shop."
        ],
        highlights: [
          "One-touch calling and messaging integration for quick inquiries",
          "Store operating hours, directions, and contact information",
          "Community review system building local trust and merchant reputation"
        ]
      }
    ],
    engineeringConsiderations: [
      "Optimizing MongoDB geospatial queries using 2dsphere indexes for rapid distance sorting across large merchant datasets.",
      "Designing responsive search interfaces that maintain rapid keystroke responsiveness during live filtering.",
      "Structuring flexible Mongoose schemas capable of supporting diverse product categories with distinct attributes.",
      "Keeping client-side bundle size minimal for seamless performance on budget mobile devices and spotty network connections."
    ]
  }
];

export const getProjectBySlug = (slug: string): ProjectItem | undefined => {
  return projects.find(p => p.slug === slug);
};
