export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'tools' | 'cloud';
  categoryLabel: string;
  iconName: string;
  description: string;
  featured: boolean; // Shown in Homepage Preview
}

export interface SkillCategoryGroup {
  id: 'languages' | 'frontend' | 'backend' | 'databases' | 'tools' | 'cloud';
  label: string;
  description: string;
  skills: SkillItem[];
}

export const allSkills: SkillItem[] = [
  // Programming Languages
  {
    name: "TypeScript",
    category: "languages",
    categoryLabel: "Programming Languages",
    iconName: "typescript",
    description: "Strict typing, interface contracts, and scalable backend/frontend architectures",
    featured: true
  },
  {
    name: "JavaScript",
    category: "languages",
    categoryLabel: "Programming Languages",
    iconName: "javascript",
    description: "Modern ES6+, asynchronous event loop, promises, and functional patterns",
    featured: true
  },
  {
    name: "Python",
    category: "languages",
    categoryLabel: "Programming Languages",
    iconName: "python",
    description: "Scripting, data handling, algorithmic tasks, and AI pipeline orchestration",
    featured: true
  },

  // Frontend
  {
    name: "React",
    category: "frontend",
    categoryLabel: "Frontend Engineering",
    iconName: "react",
    description: "Single-page applications, custom hooks, performant rendering, and state flows",
    featured: true
  },
  {
    name: "Angular",
    category: "frontend",
    categoryLabel: "Frontend Engineering",
    iconName: "angular",
    description: "Enterprise modular architectures, RxJS reactive streams, and complex forms",
    featured: true
  },
  {
    name: "HTML",
    category: "frontend",
    categoryLabel: "Frontend Engineering",
    iconName: "html",
    description: "Semantic structures, accessible markup, and clean DOM trees",
    featured: false
  },
  {
    name: "CSS",
    category: "frontend",
    categoryLabel: "Frontend Engineering",
    iconName: "css",
    description: "Responsive layouts, Flexbox, Grid, transitions, and modular styling",
    featured: false
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    categoryLabel: "Backend Engineering",
    iconName: "nodejs",
    description: "Non-blocking event-driven runtimes, streaming I/O, and REST services",
    featured: true
  },
  {
    name: "NestJS",
    category: "backend",
    categoryLabel: "Backend Engineering",
    iconName: "nestjs",
    description: "Structured enterprise TypeScript microservices, dependency injection, and modular architecture",
    featured: true
  },
  {
    name: "Express.js",
    category: "backend",
    categoryLabel: "Backend Engineering",
    iconName: "express",
    description: "Lightweight middleware-driven REST APIs and routing architectures",
    featured: false
  },
  {
    name: "GraphQL",
    category: "backend",
    categoryLabel: "Backend Engineering",
    iconName: "graphql",
    description: "Schema-driven query interfaces, typed resolvers, and selective data fetching",
    featured: false
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "databases",
    categoryLabel: "Databases & Storage",
    iconName: "postgresql",
    description: "Relational modeling, pgvector embedding storage, indexes, and ACID compliance",
    featured: true
  },
  {
    name: "MongoDB",
    category: "databases",
    categoryLabel: "Databases & Storage",
    iconName: "mongodb",
    description: "Document databases, flexible schema design, aggregation pipelines, and sharding",
    featured: true
  },
  {
    name: "SQL",
    category: "databases",
    categoryLabel: "Databases & Storage",
    iconName: "sql",
    description: "Relational schemas, query optimization, indexing, and transactional integrity",
    featured: false
  },
  {
    name: "Redis",
    category: "databases",
    categoryLabel: "Databases & Storage",
    iconName: "redis",
    description: "In-memory caching, distributed locks, session management, and pub/sub queues",
    featured: true
  },

  // Tools & Technologies
  {
    name: "Kafka",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "kafka",
    description: "Distributed event streaming, real-time microservice synchronization, and message logs",
    featured: true
  },
  {
    name: "Docker",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "docker",
    description: "Containerization, reproducible microservice runtime environments, and multi-stage builds",
    featured: true
  },
  {
    name: "Git",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "git",
    description: "Distributed version control, branch management, and collaborative code workflows",
    featured: false
  },
  {
    name: "GitHub",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "github",
    description: "CI/CD automation, pull requests, release packaging, and code collaboration",
    featured: false
  },
  {
    name: "Socket.io",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "socketio",
    description: "Bi-directional WebSocket communication, real-time messaging, and live telemetry",
    featured: false
  },
  {
    name: "Sentry",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "sentry",
    description: "Real-time production error tracking, performance tracing, and exception triage",
    featured: false
  },
  {
    name: "Grafana",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "grafana",
    description: "Metrics visualization, system health telemetry, and service performance dashboards",
    featured: false
  },
  {
    name: "Jira",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "jira",
    description: "Agile sprint cycles, issue tracking, ticket estimation, and workflow management",
    featured: false
  },
  {
    name: "Postman",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "postman",
    description: "API testing, automated collection runners, contract verification, and mocking",
    featured: false
  },
  {
    name: "Claude",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "claude",
    description: "AI-assisted engineering, system prompt design, and reasoning workflow augmentation",
    featured: false
  },
  {
    name: "Cursor",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "cursor",
    description: "Modern AI-integrated IDE for accelerated codebase navigation and refactoring",
    featured: false
  },
  {
    name: "Antigravity",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "antigravity",
    description: "Agentic AI development, custom workflow skills, and autonomous agent orchestration",
    featured: true
  },
  {
    name: "RAG",
    category: "tools",
    categoryLabel: "Tools & Technologies",
    iconName: "rag",
    description: "Retrieval-Augmented Generation, vector embeddings, chunking, and semantic context search",
    featured: true
  },

  // Cloud & Architecture
  {
    name: "AWS",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "aws",
    description: "Cloud infrastructure management, IAM permissions, serverless compute, and networking",
    featured: true
  },
  {
    name: "Amazon S3",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "s3",
    description: "Scalable object storage, pre-signed upload URLs, and asset persistence",
    featured: false
  },
  {
    name: "AWS Lambda",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "lambda",
    description: "Serverless compute triggers, event-driven background processing, and preview generation",
    featured: true
  },
  {
    name: "AWS EventBridge",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "eventbridge",
    description: "Serverless event bus routing asynchronous events between distributed healthcare services",
    featured: true
  },
  {
    name: "AWS SQS",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "sqs",
    description: "Decoupled message queuing for asynchronous jobs, backpressure, and fault tolerance",
    featured: false
  },
  {
    name: "AWS SSM",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "ssm",
    description: "Systems Manager parameter store and secure remote configuration storage",
    featured: false
  },
  {
    name: "AWS STS",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "sts",
    description: "Security Token Service for dynamic cross-account credential delegation",
    featured: false
  },
  {
    name: "AWS EC2",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "ec2",
    description: "Virtual server provisioning, security groups, instance lifecycle, and DNS routing",
    featured: false
  },
  {
    name: "AWS SNS",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "sns",
    description: "Pub/sub notification fanout service for distributed alerts and system webhooks",
    featured: false
  },
  {
    name: "Microservices",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "microservices",
    description: "Decoupled domain-driven services, independently deployable bounded contexts",
    featured: true
  },
  {
    name: "Serverless",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "serverless",
    description: "Zero-infrastructure maintenance, auto-scaling compute, and event-driven architectures",
    featured: true
  },
  {
    name: "REST APIs",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "restapi",
    description: "Idempotent resource-oriented API design, robust status codes, and JSON contracts",
    featured: false
  },
  {
    name: "gRPC",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "grpc",
    description: "High-performance binary RPC serialization over HTTP/2 with protocol buffers",
    featured: false
  },
  {
    name: "OAuth",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "oauth",
    description: "Federated authorization flows, JWT validation, token refresh routines, and scopes",
    featured: false
  },
  {
    name: "Cookies",
    category: "cloud",
    categoryLabel: "Cloud & Distributed Architecture",
    iconName: "cookies",
    description: "Secure, HttpOnly, SameSite session state preservation and token transport",
    featured: false
  }
];

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: "languages",
    label: "Programming Languages",
    description: "Core languages used for robust backend services, scalable frontend apps, and automation scripts",
    skills: allSkills.filter(s => s.category === "languages")
  },
  {
    id: "frontend",
    label: "Frontend Engineering",
    description: "Building responsive, lag-free user interfaces with React, Angular, and modern web standards",
    skills: allSkills.filter(s => s.category === "frontend")
  },
  {
    id: "backend",
    label: "Backend & Microservices",
    description: "Server-side architectures using Node.js, NestJS, Express, and high-performance APIs",
    skills: allSkills.filter(s => s.category === "backend")
  },
  {
    id: "databases",
    label: "Databases & Caching",
    description: "Relational, document, and vector databases optimized for consistency, speed, and scale",
    skills: allSkills.filter(s => s.category === "databases")
  },
  {
    id: "tools",
    label: "Tools, Streaming & AI",
    description: "Event streaming with Kafka, containerization, observability, and AI/RAG integration",
    skills: allSkills.filter(s => s.category === "tools")
  },
  {
    id: "cloud",
    label: "Cloud & Distributed Systems",
    description: "Cloud infrastructure provisioning on AWS, serverless workflows, and microservice networking",
    skills: allSkills.filter(s => s.category === "cloud")
  }
];

export const featuredSkills = allSkills.filter(s => s.featured);
