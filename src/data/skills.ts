export interface SkillItem {
  name: string;
  category: string;
  isKey?: boolean;
}

export interface SkillDomain {
  id: string;
  title: string;
  tag: string;
  description: string;
  coreSkills: string[];
  skills: string[];
}

export interface SkillPreset {
  id: string;
  label: string;
  highlightSkills: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: "frontend-languages",
    title: "Languages & Frontend Engineering",
    tag: "Client & Core Systems",
    description: "Robust type-safe languages and modern component architectures for responsive, performant user interfaces.",
    coreSkills: ["TypeScript", "JavaScript", "React", "Angular"],
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "React",
      "Angular",
      "HTML5",
      "CSS3"
    ]
  },
  {
    id: "backend-microservices",
    title: "Backend, APIs & Microservices",
    tag: "Distributed & Scalable Services",
    description: "Modular microservices, asynchronous execution environments, and resilient contract-first API gateways.",
    coreSkills: ["Node.js", "Nest.js", "Microservices", "Serverless"],
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "Microservices",
      "Serverless",
      "RESTful APIs",
      "GraphQL",
      "gRPC"
    ]
  },
  {
    id: "databases-streaming",
    title: "Databases, ORMs & Event Streaming",
    tag: "Data Integrity & Real-Time Sync",
    description: "Relational and document storage systems paired with Kafka.js event-driven replication for zero-downtime consistency.",
    coreSkills: ["PostgreSQL", "Kafka.js", "MongoDB (NoSQL)", "Redis"],
    skills: [
      "PostgreSQL",
      "MongoDB (NoSQL)",
      "SQL",
      "pgvector",
      "Kafka.js",
      "Redis",
      "Socket.io",
      "Mongoose",
      "Objection.js"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure, DevOps & Tooling",
    tag: "Cloud Native & Reliability",
    description: "Containerization, automated cloud provisioning, real-time observability, and production deployment pipelines.",
    coreSkills: ["AWS (S3, EC2, Lambda, SQS, SNS, SSM, STS, EventBridge)", "Docker", "Git & GitHub"],
    skills: [
      "AWS (S3, EC2, Lambda, SQS, SNS, SSM, STS, EventBridge)",
      "Docker",
      "Vercel",
      "Git & GitHub",
      "Bitbucket & Webhooks",
      "Postman",
      "Sentry",
      "Grafana",
      "JIRA",
      "GoDaddy DNS",
      "CertBot SSL"
    ]
  },
  {
    id: "ai-architecture",
    title: "AI Workflows & System Architecture",
    tag: "Modern AI & Resilient Security",
    description: "Production RAG retrieval pipelines with pgvector embeddings, cryptographic session security, and AI workflow integration.",
    coreSkills: ["RAG (Retrieval-Augmented Generation)", "Document Embeddings", "pgvector", "Claude", "Cursor", "Antigravity"],
    skills: [
      "RAG (Retrieval-Augmented Generation)",
      "Document Embeddings",
      "OAuth",
      "Cookies & Session Management",
      "Third-party Integrations",
      "Asymmetric Encryption",
      "Claude",
      "Cursor",
      "Antigravity"
    ]
  }
];

export const skillPresets: SkillPreset[] = [
  {
    id: "all",
    label: "All Technologies",
    highlightSkills: []
  },
  {
    id: "microservices",
    label: "Microservices & APIs",
    highlightSkills: ["Node.js", "Nest.js", "Express.js", "Microservices", "Serverless", "RESTful APIs", "GraphQL", "gRPC", "Kafka.js", "Redis", "PostgreSQL"]
  },
  {
    id: "fullstack",
    label: "Full Stack & Web",
    highlightSkills: ["TypeScript", "JavaScript", "React", "Angular", "HTML5", "CSS3", "Node.js", "Express.js", "MongoDB (NoSQL)", "PostgreSQL"]
  },
  {
    id: "streaming",
    label: "Event-Driven & Streaming",
    highlightSkills: ["Kafka.js", "Redis", "Socket.io", "AWS (S3, EC2, Lambda, SQS, SNS, SSM, STS, EventBridge)", "Microservices", "PostgreSQL"]
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    highlightSkills: ["AWS (S3, EC2, Lambda, SQS, SNS, SSM, STS, EventBridge)", "Docker", "Vercel", "Git & GitHub", "Bitbucket & Webhooks", "Sentry", "Grafana"]
  },
  {
    id: "ai-rag",
    label: "AI & RAG Systems",
    highlightSkills: ["RAG (Retrieval-Augmented Generation)", "Document Embeddings", "pgvector", "PostgreSQL", "Claude", "Cursor", "Antigravity"]
  }
];

// Flat list for easy filtering
export const allSkillsList = skillDomains.flatMap((domain) =>
  domain.skills.map((skill) => ({
    name: skill,
    domainId: domain.id,
    domainTitle: domain.title,
    isCore: domain.coreSkills.includes(skill)
  }))
);
