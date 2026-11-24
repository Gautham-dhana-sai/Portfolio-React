export interface RoleTimelineItem {
  title: string;
  period: string;
  description: string;
}

export interface MetricHighlight {
  value: string;
  label: string;
  sublabel: string;
  isVerifiedNumerical: boolean;
}

export interface DeepDiveTopic {
  title: string;
  tagline: string;
  category: string;
  details: string[];
  techStack: string[];
}

export interface ExperienceItem {
  id: 'akrivia' | 'inncircles' | 'motivity';
  slug: string;
  company: string;
  parentCompany?: string;
  role: string;
  location: string;
  mapQuery: string;
  period: string;
  shortSummary: string;
  productBackground: string;
  rolesTimeline: RoleTimelineItem[];
  technologies: string[];
  metrics: MetricHighlight[];
  deepDiveTopics: DeepDiveTopic[];
  keyContributions: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "akrivia",
    slug: "akrivia",
    company: "Akrivia Automation Pvt. Ltd.",
    role: "Software Development Engineer",
    location: "Hyderabad, India",
    mapQuery: "Akrivia Automation Pvt Ltd Hyderabad India",
    period: "Sep 2022 - Present",
    shortSummary:
      "Engineered high-throughput enterprise HRMS modules, optimized bulk processing pipelines by 70% handling up to 70k records/min, automated payroll reimbursement workflows, and implemented a Kafka synchronization layer across microservices.",
    productBackground:
      "Akrivia HCM is an enterprise HRMS platform consisting of tightly integrated modules that streamline corporate HR workflows, tracking, monitoring, and automated payroll operations without manual intervention. Core modules encompass HRF, Payroll, Time & Attendance, Leaves, Recruitment, Expenses, Surveys, and related corporate workflows.",
    rolesTimeline: [
      {
        title: "Software Development Engineer",
        period: "2023 - Present",
        description: "Promoted to lead critical bulk optimization, microservice Kafka sync pipelines, SQL to MongoDB database migrations, and monthly payroll encashment engines."
      },
      {
        title: "Software Development Engineer Intern",
        period: "Sep 1, 2022 - 2023",
        description: "Started during final year of engineering. Developed responsive UIs and REST APIs, automated Expenses-to-Payroll reimbursement, and built event-based survey triggers."
      }
    ],
    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "NestJS",
      "SQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Amazon S3"
    ],
    metrics: [
      {
        value: "70%",
        label: "Bulk Processing Time Reduction",
        sublabel: "Optimized background Excel ingestion pipelines",
        isVerifiedNumerical: true
      },
      {
        value: "70,000",
        label: "Records Processed Per Minute",
        sublabel: "With deduplication against database & uploaded sheets",
        isVerifiedNumerical: true
      },
      {
        value: "100%",
        label: "Microservice Sync Consistency",
        sublabel: "Kafka event-driven layer for Time & Attendance",
        isVerifiedNumerical: true
      }
    ],
    deepDiveTopics: [
      {
        title: "Expenses & Automated Payroll Reimbursement",
        tagline: "Zero-touch financial reimbursement workflow",
        category: "Financial Automation & Integration",
        details: [
          "Integrated the Expenses module directly with the Payroll processing engine, enabling daily approved expense reimbursements to flow automatically into the monthly payroll cycle.",
          "Completely eliminated manual handoffs and reconciliations by HR and Finance managers while guaranteeing 100% calculation accuracy.",
          "Constructed idempotent validation rules and rollback handlers to prevent duplicate reimbursements or inconsistent ledger entries."
        ],
        techStack: ["Node.js", "Express.js", "NestJS", "SQL", "Redis"]
      },
      {
        title: "Event-Driven Survey Engine & Analytics Refactor",
        tagline: "Dynamic feedback loops triggered by enterprise lifecycle milestones",
        category: "Microservice Architecture & Data Modeling",
        details: [
          "Connected the Survey module with LMS and HRF microservices via event-based triggers, automatically dispatching context-aware feedback surveys based on employee milestones.",
          "Completely refactored the legacy survey database schema into a normalized, extensible architecture to accommodate NPS calculations, real-time sentiment metrics, and multi-tenant analytics.",
          "Implemented bulk ingestion pipelines allowing newly onboarded corporate tenants to upload historical survey records and past responses seamlessly."
        ],
        techStack: ["Angular", "NestJS", "MongoDB", "SQL", "Redis"]
      },
      {
        title: "High-Throughput Bulk Processing & Deduplication Engine",
        tagline: "Accelerating upload processing by 70% up to 70,000 records/min",
        category: "Performance Engineering & Scale",
        details: [
          "Re-engineered the asynchronous bulk upload architecture for Excel-based records across survey questions and expense receipts.",
          "Shifted parsing and heavy computations to asynchronous background workers with smart batching and in-memory Redis deduplication.",
          "Cross-checked duplicate records concurrently across incoming spreadsheet rows and active database indexes, preventing data corruption.",
          "Achieved a verified 70% reduction in processing duration while sustaining peak processing rates of up to 70,000 records per minute."
        ],
        techStack: ["Node.js", "Redis", "Kafka", "SQL", "MongoDB"]
      },
      {
        title: "Kafka Real-Time Synchronization & Service Restructuring",
        tagline: "Guaranteed consistency between Time & Attendance and downstream services",
        category: "Distributed Systems & Streaming",
        details: [
          "Designed and deployed a Kafka-based synchronization layer connecting the Time & Attendance microservice with surrounding HCM domain services.",
          "Maintained 100% data consistency for shift records, punch times, and attendance events across distributed nodes.",
          "Migrated the Timesheets module from a legacy SQL database in the monolithic core to MongoDB within the dedicated Time & Attendance microservice.",
          "Maintained and enhanced the unified dynamic PDF generation engine utilized across the entire HCM platform for contracts, letters, and payslips."
        ],
        techStack: ["Kafka", "NestJS", "MongoDB", "SQL", "Amazon S3"]
      }
    ],
    keyContributions: [
      "Integrated daily approved Expenses directly into monthly Payroll, eliminating all manual HR/Finance intervention.",
      "Engineered high-throughput bulk upload pipelines, slashing processing time by 70% and sustaining 70,000 records/minute.",
      "Constructed a resilient Kafka synchronization layer between Time & Attendance and core microservices with 100% consistency.",
      "Restructured Survey data models to power advanced NPS reporting and multi-tenant historical data imports.",
      "Executed the migration of the Timesheets subsystem from monolithic SQL to microservice-oriented MongoDB.",
      "Maintained the platform-wide dynamic PDF letters engine responsible for all official corporate document generation."
    ]
  },
  {
    id: "inncircles",
    slug: "inncircles",
    company: "Inncircles Technologies Pvt. Ltd.",
    role: "Product Developer",
    location: "Hyderabad, India",
    mapQuery: "Inncircles Technologies Pvt Ltd Hyderabad India",
    period: "2023 - 2024",
    shortSummary:
      "Spearheaded core real estate product engineering spanning asymmetric Surepass encryption for CIBIL checks, HDFC bank reverse debits, OneDrive storage hierarchy replication, automated multi-cloud provisioning control center, and serverless Lambda preview pipelines.",
    productBackground:
      "Inncircles develops a specialized 5-product real estate and construction management suite servicing ASBL constructions. The ecosystem encompasses Leads, CRM, Homes, Finance, and Progress microservices handling property marketing, sales pipelines, milestone billing, and day-to-day operations with live integrations to banking institutions, power utilities, and procurement channels.",
    rolesTimeline: [
      {
        title: "Product Developer",
        period: "Hyderabad, India",
        description: "Promoted to lead critical banking integrations, client environment automation, construction management features, and cloud infrastructure pipelines."
      }
    ],
    technologies: [
      "Angular",
      "Node.js",
      "NestJS",
      "MongoDB",
      "Redis",
      "Amazon S3",
      "AWS SQS",
      "AWS Lambda",
      "AWS SSM",
      "AWS STS",
      "AWS EC2",
      "AWS SNS"
    ],
    metrics: [
      {
        value: "100%",
        label: "Storage Continuity Coverage",
        sublabel: "OneDrive folder & file hierarchy synchronization",
        isVerifiedNumerical: true
      },
      {
        value: "0 to Live",
        label: "Automated Environment Provisioning",
        sublabel: "DNS, SSL, AWS EC2 & webhooks deployed via Control Center",
        isVerifiedNumerical: false
      },
      {
        value: "5",
        label: "Connected Ecosystem Modules",
        sublabel: "Leads, CRM, Homes, Finance, and Progress teams",
        isVerifiedNumerical: true
      }
    ],
    deepDiveTopics: [
      {
        title: "Financial Integrations & Asymmetric Security",
        tagline: "Cryptographic Surepass CIBIL retrieval and HDFC milestone reconciliations",
        category: "Fintech Security & Banking Integrations",
        details: [
          "Architected asymmetric encryption routines for Surepass integration to securely fetch applicant CIBIL credit scores for loan qualifications.",
          "Integrated HDFC Bank reverse debit workflows to automatically handle cheque bounce incidents, nullifying affected ledger entries and re-adjusting milestone settlement schedules.",
          "Enforced strict audit logging and cryptographic verification across sensitive transactional data."
        ],
        techStack: ["Node.js", "NestJS", "MongoDB", "Redis"]
      },
      {
        title: "Arena: Construction Management Core",
        tagline: "Comprehensive tracking of construction progress, materials, and architectural blueprints",
        category: "Enterprise Product Engineering",
        details: [
          "Developed modules for Arena, an internal construction tracking platform used on-site to inspect quality, track heavy equipment, monitor costing projections, and document physical milestones.",
          "Built intuitive architectural composure viewers allowing site engineers to reference blueprints, inspect current stage completions, and flag defects directly against structural plans."
        ],
        techStack: ["Angular", "NestJS", "MongoDB", "Redis"]
      },
      {
        title: "OneDrive Folder Hierarchy Replication & Data Continuity",
        tagline: "Fail-safe cloud storage mirroring ensuring 100% continuity against data loss",
        category: "Storage Architecture & Redundancy",
        details: [
          "Integrated Microsoft OneDrive with Arena to replicate full file and folder tree structures between local servers and cloud storage.",
          "Implemented automated file continuity failover, protecting enterprise records against accidental deletions, server corruptions, or interrupted uploads.",
          "Maintained bidirectional metadata sync for instant retrieval across both field devices and central office dashboards."
        ],
        techStack: ["Node.js", "NestJS", "Amazon S3", "AWS SQS"]
      },
      {
        title: "Client-Side Control Center & Automated Infrastructure Provisioning",
        tagline: "One-click isolated tenant environments for demonstrations and production go-lives",
        category: "DevOps & Cloud Automation",
        details: [
          "Engineered a centralized Control Center allowing administrative teams to spin up fully isolated client demonstration environments on demand.",
          "Integrated AWS EC2, SSM, and STS with GoDaddy API, CertBot SSL, and Bitbucket deployment webhooks.",
          "Automated DNS allocation, automated TLS certificate provisioning, instance initialization, and database seeding, enabling clients to test on custom domains with dedicated credentials."
        ],
        techStack: ["AWS EC2", "AWS SSM", "AWS STS", "AWS SNS", "CertBot", "Node.js"]
      },
      {
        title: "Serverless Image Preview Generation",
        tagline: "High-resolution rendering optimized for dense UI tables and cards",
        category: "Serverless Pipelines",
        details: [
          "Constructed an AWS Lambda pipeline that intercepts architectural photo uploads and automatically generates crisp, low-latency thumbnails and previews.",
          "Drastically minimized bandwidth consumption in dense data tables and card layouts while preserving full-fidelity zooms on demand."
        ],
        techStack: ["AWS Lambda", "Amazon S3", "AWS SQS", "Node.js"]
      }
    ],
    keyContributions: [
      "Engineered asymmetric encryption pipelines for Surepass CIBIL score integration.",
      "Integrated HDFC Bank reverse debit workflows for automated cheque bounce reconciliation.",
      "Contributed core modules to the Arena internal construction management application.",
      "Built Microsoft OneDrive folder synchronization safeguarding against data loss with 100% coverage.",
      "Developed an automated Control Center orchestrating AWS EC2, GoDaddy DNS, and CertBot SSL for demo tenant environments.",
      "Deployed an AWS Lambda image processing pipeline delivering instant UI card previews."
    ]
  },
  {
    id: "motivity",
    slug: "motivity",
    company: "Motivity Labs Pvt. Ltd.",
    parentCompany: "Magellanic Cloud",
    role: "Software Engineer",
    location: "Hyderabad, India",
    mapQuery: "Motivity Labs Pvt Ltd Hyderabad India",
    period: "2024 - Present",
    shortSummary:
      "Engineered high-performance reactive interfaces for edge-based CCTV facial recognition employee analytics and built serverless healthcare workflows on AWS EventBridge with real-time doctor-patient chat and Spanish REMPe medical prescription integration.",
    productBackground:
      "Motivity Labs is a digital technology and consulting organization under parent entity Magellanic Cloud, building proprietary platforms and enterprise software across AI, healthcare, and distributed cloud services.",
    rolesTimeline: [
      {
        title: "Software Engineer",
        period: "Hyderabad, India",
        description: "Engineering edge facial recognition analytics dashboards and serverless healthcare microservices."
      }
    ],
    technologies: [
      "React",
      "Node.js",
      "Serverless",
      "PostgreSQL",
      "AWS EventBridge"
    ],
    metrics: [
      {
        value: "0-Lag",
        label: "Reactive Dashboard Rendering",
        sublabel: "Optimized for dense analytical telemetry datasets",
        isVerifiedNumerical: false
      },
      {
        value: "100%",
        label: "Serverless Microservice Event Flow",
        sublabel: "Decoupled asynchronous bus powered by AWS EventBridge",
        isVerifiedNumerical: false
      },
      {
        value: "Seamless",
        label: "Native-Feel REMPe Medical Portal",
        sublabel: "Embedded session-authenticated healthcare prescription gateway",
        isVerifiedNumerical: false
      }
    ],
    deepDiveTopics: [
      {
        title: "Edge Facial Recognition Employee Analytics System",
        tagline: "CCTV facial recognition, zone telemetry, and zero-lag client visualization",
        category: "Computer Vision UI & Performance",
        details: [
          "Developed the primary analytics frontend for an enterprise employee monitoring platform leveraging CCTV cameras and AI edge box embeddings.",
          "Aggregated telemetry to categorize workplace zones, calculate time allocation, and measure productive intervals across teams.",
          "Engineered virtualized data presentation layers in React to stream large historical datasets without browser memory leaks, UI stutter, or tab crashes.",
          "Delivered interactive charts and heatmaps illustrating organizational attendance trends and occupancy patterns."
        ],
        techStack: ["React", "Node.js", "PostgreSQL"]
      },
      {
        title: "Limina Healthcare Platform & Asynchronous Event Architecture",
        tagline: "Serverless healthcare microservices orchestrated via AWS EventBridge",
        category: "Healthcare Cloud & Real-Time Communication",
        details: [
          "Engineered backend microservices for Limina, a healthcare application operating on an entirely serverless cloud paradigm.",
          "Implemented AWS EventBridge event patterns to cleanly decouple asynchronous messaging and consultation state transitions between services.",
          "Constructed real-time chat functionality enabling confidential communication between patients and medical practitioners."
        ],
        techStack: ["Serverless", "AWS EventBridge", "Node.js", "PostgreSQL"]
      },
      {
        title: "REMPe Spain Government Medical Prescription Integration",
        tagline: "Embedded authenticated portal for compliant electronic pharmaceutical prescriptions",
        category: "Third-Party Regulatory Integration",
        details: [
          "Integrated REMPe, the Spain-based government certified electronic medical prescription platform, into the Limina clinic portal.",
          "Built a secure web-embedded interface maintaining persistent session authentication, delivering a unified experience where users interact with official medical systems seamlessly without intrusive external redirects."
        ],
        techStack: ["React", "Node.js", "Serverless", "PostgreSQL"]
      }
    ],
    keyContributions: [
      "Engineered lag-free React analytics dashboards handling massive edge-computed facial recognition datasets.",
      "Developed zone categorization and productivity analytics models for workforce operations.",
      "Built serverless event-driven microservices on AWS EventBridge for the Limina healthcare suite.",
      "Implemented encrypted real-time doctor-patient consultation chat functionality.",
      "Seamlessly integrated REMPe Spain medical prescription platform via an authenticated embedded portal."
    ]
  }
];

export const getExperienceBySlug = (slug: string): ExperienceItem | undefined => {
  return experiences.find(e => e.slug === slug);
};
