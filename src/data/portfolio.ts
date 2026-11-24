export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  shortName: string;
  designation: string;
  experienceYears: string;
  experienceYearsCount: number;
  organizationsCount: number;
  featuredProjectsCount: number;
  headline: string;
  supportingDescription: string;
  aboutPreview: string;
  aboutFull: {
    paragraphs: string[];
    coreValues: { title: string; description: string }[];
    engineeringFocus: { title: string; description: string }[];
  };
  stats: StatItem[];
  profilePhoto: {
    path: string;
    fallbackInitials: string;
    alt: string;
  };
  resume: {
    path: string;
    filename: string;
    lastUpdated: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneFormatted: string;
    location: string;
    availability: string;
  };
}

export const portfolioData: PortfolioData = {
  name: "Pandiri Goutham Dhana Sai Reddy",
  shortName: "Goutham Reddy",
  designation: "Full Stack Developer",
  experienceYears: "4 Years",
  experienceYearsCount: 4,
  organizationsCount: 3,
  featuredProjectsCount: 2,
  headline: "Building digital experiences that solve real problems.",
  supportingDescription: "Scalable applications. Distributed systems. Thoughtful engineering.",
  aboutPreview:
    "I'm a Full Stack Developer focused on building scalable applications, backend systems and seamless integrations. My experience spans enterprise software, distributed systems, serverless architectures and AI-powered applications.",
  aboutFull: {
    paragraphs: [
      "I'm a Full Stack Developer with 4 years of experience building scalable web applications, developing backend services and delivering end-to-end product solutions.",
      "My work spans enterprise applications, microservices, serverless systems, third-party integrations, data processing optimization and responsive frontend development. I enjoy transforming complex requirements into reliable, efficient and maintainable solutions.",
      "From optimizing large-scale bulk processing and synchronizing distributed services to automating infrastructure and building AI-powered applications, I focus on engineering solutions that are practical, scalable and impactful."
    ],
    coreValues: [
      {
        title: "Architectural Pragmatism",
        description: "Selecting right-sized architectures—from modular monoliths to event-driven serverless—optimized for reliability, maintainability, and domain constraints."
      },
      {
        title: "Performance at Scale",
        description: "Eliminating bottlenecks across the stack through intelligent indexing, asynchronous queuing, batch pipelines, and responsive client-side state."
      },
      {
        title: "Clean End-to-End Delivery",
        description: "Transforming ambiguous business challenges into resilient APIs, rock-solid data models, and fluid user interfaces without technical debt."
      }
    ],
    engineeringFocus: [
      {
        title: "Distributed Synchronization",
        description: "Decoupled microservice coordination via Kafka, AWS EventBridge, and SQS for consistent data flow across mission-critical systems."
      },
      {
        title: "High-Throughput Data Pipelines",
        description: "Bulk data ingestion and processing with deduplication, memory-efficient streams, and background workers handling tens of thousands of records per minute."
      },
      {
        title: "Modern AI & RAG Solutions",
        description: "Semantic search and knowledge-grounded intelligent agents utilizing vector embeddings (pgvector), chunking strategies, and token analytics."
      },
      {
        title: "Serverless & Cloud Automation",
        description: "Automating cloud infrastructure provisioning with AWS Lambda, S3, STS, SSM, EC2, CertBot SSL, and webhook-driven continuous deployments."
      }
    ]
  },
  stats: [
    {
      value: "4+",
      label: "Years of Experience",
      description: "Production engineering across enterprise SaaS, real estate tech & AI"
    },
    {
      value: "3",
      label: "Professional Organizations",
      description: "Engineering contributions at Akrivia, Inncircles & Motivity Labs"
    },
    {
      value: "2",
      label: "Featured Independent Projects",
      description: "Production-ready architectures: Open-Bot (RAG) & Find-It-Here (MERN)"
    }
  ],
  profilePhoto: {
    // Easily configurable path; if the image exists, it is displayed with graceful fallback
    path: "/assets/profile/profile-photo.jpeg",
    fallbackInitials: "PG",
    alt: "Pandiri Goutham Dhana Sai Reddy - Full Stack Developer"
  },
  resume: {
    path: "/assets/resume/Gautham-Resume.pdf",
    filename: "Gautham-Resume.pdf",
    lastUpdated: "2024"
  },
  contact: {
    email: "gautham523sai@gmail.com",
    phone: "9133683491",
    phoneFormatted: "+91 91336 83491",
    location: "Hyderabad, India",
    availability: "Available for high-impact engineering roles & technical collaboration"
  }
};
