export interface ExperienceRole {
  title: string;
  period: string;
  type?: string;
  summary: string;
  highlights: string[];
}

export interface CompanyExperience {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  period: string;
  logo: string;
  productContext: string;
  summaryPreview: string;
  roles: ExperienceRole[];
  keyContributions: {
    title: string;
    description: string;
    impact?: string;
  }[];
  technologies: string[];
}

export const experiences: CompanyExperience[] = [
  {
    slug: "akrivia",
    name: "Akrivia Automation Pvt. Ltd.",
    shortName: "Akrivia HCM",
    location: "Hyderabad, India",
    period: "Sep 2022 – Present",
    logo: "/logos/akrivia.svg",
    productContext:
      "Akrivia HCM is an enterprise HRMS suite comprising modular applications that streamline human capital management, attendance tracking, and automated payroll operations without manual intervention. Key modules include HRF, Payroll, Time & Attendance, Leaves, Recruitment, Expenses, and Surveys.",
    summaryPreview:
      "Engineered core HRMS microservices across Expenses, Surveys, Leaves, and Time & Attendance, delivering high-throughput Excel data pipelines, automated zero-touch expense-to-payroll integrations, and real-time Kafka.js event synchronization.",
    roles: [
      {
        title: "Software Development Engineer",
        period: "Full-Time",
        summary:
          "Owned mission-critical microservice features, high-volume data ingestion pipelines, cross-service synchronization layers, and dynamic document generation across the entire HCM platform.",
        highlights: [
          "Integrated the Expenses module directly with the Payroll team systems to automatically funnel every day approved employee expenses into the monthly payroll cycle, achieving a 100% execution success rate with zero manual intervention required from HR or Finance Managers (FM).",
          "Architected asynchronous bulk Excel upload pipelines for Surveys and Expenses, cutting processing time by 70% with database-level duplicate validation and scaling to 70,000 records per minute.",
          "Migrated the Survey database to an entirely new decoupled schema structure, unlocking new-scope workforce sentiment analytics, Net Promoter Score (NPS) calculations, and architectural foundations for future enhancements.",
          "Constructed a high-reliability event synchronization layer between Leave and Time & Attendance microservices via Kafka.js, maintaining 100% data consistency.",
          "Migrated Timesheet services from a monolithic SQL setup to MongoDB on the Time & Attendance microservice, enabling flexible scheduling schemas and zero-latency sync.",
          "Maintained and enhanced the centralized Letters module for dynamic PDF rendering and secure templated downloads integrated across all HCM modules.",
          "Upgraded Payroll microservice integration with accurate monthly tax slab categorizations and leave encashment workflows."
        ]
      },
      {
        title: "Software Development Engineer Intern",
        period: "Sep 2022 – Transition to Full-Time",
        type: "Internship",
        summary:
          "Developed responsive frontends and backend REST APIs for Expenses and Survey modules, transitioning approved expenses into automated payroll reimbursements.",
        highlights: [
          "Built responsive user interfaces and robust RESTful API endpoints for the corporate Expenses and Survey modules.",
          "Engineered an automated end-to-end integration linking approved daily expenses directly into monthly payroll disbursement with a 100% execution success rate.",
          "Integrated Survey workflows with LMS (Learning Management System) and HRF (HR Foundation) to trigger automated event-based employee feedback surveys and compute real-time analytics."
        ]
      }
    ],
    keyContributions: [
      {
        title: "Automated Expense-to-Payroll Reimbursement Integration",
        description:
          "Integrated the Expenses module directly with the Payroll team systems for reimbursement of every day approved expenses into the monthly payroll cycle without human delay.",
        impact: "100% execution success rate with zero manual intervention required from HR or Finance Managers (FM)."
      },
      {
        title: "High-Throughput Bulk Data Pipeline",
        description:
          "Engineered background worker architecture for bulk Excel uploads supporting all question formats and historical tenant onboarding data. Added in-memory verification against live database records to prevent duplicate submissions.",
        impact: "70% processing time reduction, processing up to 70,000 records per minute."
      },
      {
        title: "Survey Database Migration & NPS Analytics Architecture",
        description:
          "Migrated the Survey database to an entirely new structure to unlock new-scope sentiment analytics, Net Promoter Score (NPS) calculations, and future architectural enhancements.",
        impact: "Transformed survey data processing into high-resolution sentiment reporting and real-time metric evaluation."
      },
      {
        title: "Kafka.js-Driven Event Synchronization",
        description:
          "Designed reliable message-driven synchronization between Leave Management and Time & Attendance microservices using the Kafka.js client with idempotent consumers and failure-retry queues.",
        impact: "Achieved 100% cross-service record consistency in production."
      },
      {
        title: "Platform-Wide Dynamic PDF Engine",
        description:
          "Engineered the Letters module responsible for dynamic document templating and real-time PDF generation used by HR for appointment letters, salary revisions, and official notices across HCM modules.",
        impact: "Standardized document generation across all enterprise tenants."
      }
    ],
    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "Nest.js",
      "SQL",
      "MongoDB",
      "Redis",
      "Kafka.js",
      "AWS S3"
    ]
  },
  {
    slug: "inncircles",
    name: "Inncircles Technologies Pvt. Ltd.",
    shortName: "Inncircles Technologies",
    location: "Hyderabad, India",
    period: "Product Developer",
    logo: "/logos/inncircles.png",
    productContext:
      "Inncircles is a comprehensive construction technology suite comprising 5 interconnected products that manage the complete lifecycle for ASBL constructions: Leads, CRM, Homes, Finance, and Progress. Features real-time integrations with banking, utility boards, and vendor marketplaces.",
    summaryPreview:
      "Delivered key banking and credit integrations, architectural progress tracking in the Arena internal platform, OneDrive hierarchy mirroring, and an automated multi-cloud client provisioning control center.",
    roles: [
      {
        title: "Product Developer",
        period: "Full-Time",
        summary:
          "Contributed to core product features, financial third-party integrations, and end-to-end multi-tenant provisioning automation across AWS, DNS, and CI/CD pipelines.",
        highlights: [
          "Developed automated Client Control Center to provision, configure, and launch tenant instances with zero manual intervention across AWS, GoDaddy DNS, CertBot SSL, and Bitbucket webhooks.",
          "Implemented asymmetric encryption algorithms for Surepass credit integration to fetch real-time CIBIL scores securely.",
          "Integrated HDFC Bank reverse-debit workflows for cheque-bounce transactions, automatically settling milestone ledger balances in the database.",
          "Engineered construction management features in the Arena internal tool, enabling field engineers to track structural quality, equipment, costings, work progress, and architectural blueprints.",
          "Built a two-way Microsoft OneDrive synchronization layer to mirror folder and file hierarchies identically to Arena, securing 100% of data against accidental deletions or loss.",
          "Created an AWS Lambda service to generate optimized image previews for dense tabular and card interfaces, minimizing frontend payload."
        ]
      }
    ],
    keyContributions: [
      {
        title: "Automated Go-Live Tenant Control Center",
        description:
          "Designed and implemented a unified management center that fully automates the creation of new client instances. Orchestrates AWS EC2 infrastructure provisioning, GoDaddy DNS record allocation, CertBot SSL certificate generation, and Bitbucket webhook deployment triggers.",
        impact: "Allowed live client demos on custom domains within minutes with zero manual DevOps steps."
      },
      {
        title: "Banking & Financial Integrations",
        description:
          "Integrated HDFC Bank reverse-debit mechanisms to handle bounced cheques automatically, adjusting customer milestone accounts. Implemented asymmetric public/private key encryption for secure Surepass CIBIL rating retrieval.",
        impact: "Eliminated manual ledger reconciliation and secured sensitive credit communications."
      },
      {
        title: "Arena Construction & OneDrive Sync Layer",
        description:
          "Built full-stack modules for the Arena internal application for tracking equipment, work milestones, costings, and architectural blueprints. Coupled this with a OneDrive sync mechanism that faithfully replicates file and folder trees.",
        impact: "Guaranteed 100% data safety against loss or unintended deletions."
      },
      {
        title: "Serverless Media Optimization",
        description:
          "Deployed AWS Lambda functions triggered to generate lightweight, high-fidelity image thumbnails on the fly for construction plan views.",
        impact: "Significantly accelerated dashboard load times for field teams."
      }
    ],
    technologies: [
      "Angular",
      "Node.js",
      "Nest.js",
      "MongoDB",
      "Redis",
      "AWS S3",
      "AWS SQS",
      "AWS Lambda",
      "AWS SSM",
      "AWS STS",
      "AWS EC2",
      "AWS SNS",
      "Bitbucket Webhooks",
      "GoDaddy DNS",
      "CertBot SSL"
    ]
  },
  {
    slug: "motivity",
    name: "Motivity Labs Pvt. Ltd.",
    shortName: "Motivity Labs",
    location: "Hyderabad, India",
    period: "Software Engineer",
    logo: "/logos/motivity.png",
    productContext:
      "Motivity Labs (part of Magellanic Cloud) delivers global digital engineering services and specialized in-house products across smart surveillance, computer vision analytics, and modern serverless healthcare applications.",
    summaryPreview:
      "Built performant reactive dashboards for edge-box facial recognition and zone analytics, and developed serverless healthcare features with EventBridge and official REMPe prescription integration.",
    roles: [
      {
        title: "Software Engineer",
        period: "Full-Time",
        summary:
          "Developed high-volume reactive user interfaces for camera surveillance analytics and architected serverless microservices for a healthcare application.",
        highlights: [
          "Developed high-performance frontend interfaces for the Facial Recognition System (FRS), rendering large time-series datasets, zone movement trends, and attendance metrics without interface latency.",
          "Handled camera-captured face embeddings processed through edge boxes to display employee zone dwell time and productivity analytics over extended review periods.",
          "Contributed to Limina, a healthcare application architected purely on AWS serverless services with asynchronous communication coordinated through AWS EventBridge.",
          "Engineered doctor-to-patient interactive chat functionality.",
          "Integrated Spain's official REMPe medical prescription platform via an embedded web session, creating an uninterrupted native application experience."
        ]
      }
    ],
    keyContributions: [
      {
        title: "Performant Facial Recognition UI & Zone Analytics",
        description:
          "Created a reactive web interface that processes and displays large surveillance attendance volumes and edge-box embeddings, mapping movements across workplace zones over time without browser freeze.",
        impact: "Maintained smooth UI responsiveness across high-density analytics dashboards."
      },
      {
        title: "Serverless Healthcare Architecture (Limina)",
        description:
          "Implemented microservices on AWS serverless stack using AWS EventBridge for decoupled, event-driven communication between doctor appointments, user records, and messaging queues.",
        impact: "Achieved seamless asynchronous event handling with high resilience."
      },
      {
        title: "REMPe Government Prescription Integration",
        description:
          "Integrated Spain's government-regulated medical prescription platform (REMPe) via an embedded web interface with active session token preservation, enabling physicians to issue valid prescriptions directly from the app.",
        impact: "Delivered a compliant, frictionless prescribing workflow inside Limina."
      }
    ],
    technologies: [
      "React",
      "Node.js",
      "Serverless",
      "PostgreSQL",
      "AWS EventBridge"
    ]
  }
];
