export interface HighlightCardData {
  id: string;
  title: string;
  statement: string;
  iconName: string;
  domainTag: string;
  signals: string[];
}

export const highlightCards: HighlightCardData[] = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    statement: "Building end-to-end web applications across frontend, backend, APIs, and databases.",
    iconName: "Layers",
    domainTag: "Architecture & Systems",
    signals: ["Frontend", "Backend", "APIs", "Databases"]
  },
  {
    id: "integrations",
    title: "Integration Specialist",
    statement: "Connecting business modules, external platforms, and third-party services to create seamless workflows.",
    iconName: "GitMerge",
    domainTag: "Workflows & Gateways",
    signals: ["Webhooks", "RESTful", "Third-Party Sync", "gRPC"]
  },
  {
    id: "database",
    title: "Database Architecture",
    statement: "Designing and restructuring data systems to support evolving application requirements and scalable solutions.",
    iconName: "Database",
    domainTag: "Data Systems & Search",
    signals: ["PostgreSQL", "MongoDB", "pgvector", "Schema Design"]
  },
  {
    id: "microservices",
    title: "Microservices & Distributed Systems",
    statement: "Developing modular services and reliable communication between interconnected applications.",
    iconName: "Network",
    domainTag: "Event Streaming & Scale",
    signals: ["Kafka.js", "Decoupled Services", "Redis", "Resilience"]
  },
  {
    id: "automation",
    title: "Automation & Infrastructure",
    statement: "Creating automated workflows that simplify application provisioning, infrastructure configuration, and deployment.",
    iconName: "Cpu",
    domainTag: "Cloud & DevOps",
    signals: ["AWS", "Docker", "CI/CD Pipelines", "Vercel"]
  }
];
