import { Project, SkillItem, ExperienceItem, CertificationItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "PEDDI REDDY LEELA ANIRUDH REDDY",
  firstName: "Anirudh",
  title: "Computer Science Engineering | AI & Full-Stack Developer",
  subTitle: "Pursuing B.Tech in Computer Science and Engineering (CSE)",
  tagline: "Computer Science Engineering undergraduate passionate about building intelligent applications by combining Artificial Intelligence, Generative AI, Cloud Computing, Cybersecurity and modern full-stack technologies.",
  email: "anirudhleela0@gmail.com",
  phone: "+91 8977720014",
  location: "Chennai, Tamil Nadu, India - 601206",
  github: "https://github.com/ANIRUDHREDDY26",
  linkedin: "https://linkedin.com",
  aboutText: "I am a Computer Science Engineering (CSE) undergraduate and aspiring AI & Full-Stack Developer interested in developing intelligent, scalable and user-friendly applications. My technical focus centers on Machine Learning, Generative AI, Cloud Computing, Cybersecurity, IoT and modern Web Development. I continuously strengthen my problem-solving, programming and system design skills through hands-on projects, certifications and real-world architectures.",
  typewriterRoles: [
    "Computer Science Engineer (CSE)",
    "AI & Full-Stack Developer",
    "Generative AI Specialist",
    "Cloud Computing Enthusiast",
    "Cybersecurity Enthusiast"
  ],
  stats: [
    { label: "Problems Solved", value: "1300+", subtitle: "SkillRack" },
    { label: "Certifications", value: "12+", subtitle: "Cloud & AI Verified" },
    { label: "Internships", value: "2", subtitle: "Cloud & Cyber Security" },
    { label: "Field of Study", value: "B.Tech CSE", subtitle: "R.M.D. Engg College" }
  ]
};

export const PROFILE_HIGHLIGHTS = [
  {
    title: "AI & Machine Learning",
    description: "Developing intelligent systems leveraging modern ML algorithms, LLM concepts, RAG architectures, prompt engineering, and vector search embeddings.",
    iconName: "BrainCircuit",
    gradient: "from-purple-500/20 to-indigo-500/10",
    borderGlow: "group-hover:border-purple-500/50"
  },
  {
    title: "Cloud Technologies",
    description: "Architecting cloud-native solutions across Microsoft Azure, Google Cloud, and Oracle Cloud Infrastructure (OCI) with a focus on automation and scalability.",
    iconName: "Cloud",
    gradient: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "group-hover:border-cyan-500/50"
  },
  {
    title: "Cybersecurity",
    description: "Implementing cybersecurity fundamentals, anomaly detection, threat analysis, access control principles, and defense-in-depth system protection.",
    iconName: "ShieldCheck",
    gradient: "from-emerald-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/50"
  },
  {
    title: "Full-Stack Development",
    description: "Engineering robust, reactive frontend interfaces with modern React.js and reliable backend REST APIs using Java, Spring Boot, and modern databases.",
    iconName: "Layers",
    gradient: "from-fuchsia-500/20 to-pink-500/10",
    borderGlow: "group-hover:border-fuchsia-500/50"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming (Core)
  { name: "Python", category: "Programming", highlight: true },
  { name: "Java", category: "Programming", highlight: true },
  { name: "JavaScript", category: "Programming", highlight: true },

  // AI & Machine Learning (Core)
  { name: "Generative AI & LLMs", category: "AI & Machine Learning", highlight: true },
  { name: "Machine Learning", category: "AI & Machine Learning", highlight: true },
  { name: "RAG & Vector Embeddings", category: "AI & Machine Learning", highlight: true },

  // Cloud Computing (Core)
  { name: "Microsoft Azure", category: "Cloud Computing", highlight: true },
  { name: "Google Cloud (GCP)", category: "Cloud Computing", highlight: true },
  { name: "Oracle Cloud Infrastructure (OCI)", category: "Cloud Computing", highlight: true },

  // Full-Stack & Databases (Core)
  { name: "React.js", category: "Tools & Frameworks", highlight: true },
  { name: "Spring Boot", category: "Tools & Frameworks", highlight: true },
  { name: "MySQL", category: "Databases", highlight: true },
  { name: "MongoDB Atlas (Vector Search)", category: "Databases", highlight: true },

  // Cybersecurity & IoT (Core)
  { name: "Cybersecurity Fundamentals", category: "Cybersecurity & IoT", highlight: true },
  { name: "Internet of Things (IoT)", category: "Cybersecurity & IoT", highlight: true }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "cloud-security-threat-detection",
    title: "AI-Powered Cloud Security & Threat Detection System",
    status: "In Progress",
    category: "AI & Cybersecurity",
    problemStatement: "Modern enterprise cloud environments face high-velocity telemetry data and sophisticated cyber threats that conventional static firewalls fail to detect in real-time, resulting in delayed incident responses.",
    solution: "Designed an AI-based security monitoring system that continuously evaluates cloud event streams, detects anomalous patterns and malicious signatures using machine learning, and dispatches automated containment alerts.",
    technologies: ["Python", "Machine Learning", "Cybersecurity", "Cloud Computing", "AI Foundations"],
    features: [
      "Suspicious activity monitoring across multi-source security events",
      "Automated threat analysis and severity classification",
      "Intuitive security event visualization and audit dashboards",
      "Real-time automated alert interface with rapid notification triggers"
    ],
    architectureHighlights: [
      "Event Ingestion Pipeline with timestamp normalization",
      "Anomaly Detection Classifier trained on synthetic telemetry",
      "Security Dashboard with drill-down incident analysis",
      "Webhook-driven alert dispatcher for incident responders"
    ],
    githubUrl: "#",
    liveDemoUrl: "#"
  },
  {
    id: "smart-iot-environmental-monitoring",
    title: "Smart IoT-Based Environmental Monitoring System",
    status: "In Progress",
    category: "IoT & Cloud",
    problemStatement: "Industrial and urban microclimates lack localized, real-time environmental hazard monitoring, leading to delayed warnings for air pollution, thermal anomalies, and hazardous emissions.",
    solution: "Developed an end-to-end IoT monitoring solution that captures sensory readings, transmits telemetry to Google Cloud data infrastructure, and provides actionable visual analytics for environmental parameters.",
    technologies: ["Internet of Things", "Python", "Google Cloud", "Data Analytics", "Cloud Computing"],
    features: [
      "Connected sensor data monitoring (Temperature, Humidity, Air Quality)",
      "Real-time environmental readings processing with telemetry streams",
      "Scalable cloud data storage on Google Cloud infrastructure",
      "Interactive monitoring dashboard with historical time-series analytics"
    ],
    architectureHighlights: [
      "Microcontroller telemetry collector transmitting via MQTT/HTTPS",
      "Google Cloud ingestion service with structured schema",
      "Automated threshold checks with visual warning status",
      "Interactive dashboard for trend analysis and historical logs"
    ],
    githubUrl: "#",
    liveDemoUrl: "#"
  },
  {
    id: "cloud-fullstack-application",
    title: "Cloud-Based Full-Stack Application",
    status: "In Progress",
    category: "Full-Stack & Cloud",
    problemStatement: "Modern applications demand clean separation of concerns, secure identity verification, and dependable containerized cloud deployment to guarantee high availability and scale.",
    solution: "Engineered a scalable full-stack web application with a responsive React.js frontend, an enterprise Spring Boot REST API layer, and secure Microsoft Azure deployment architecture.",
    technologies: ["Java", "JavaScript", "React.js", "Spring Boot", "Microsoft Azure", "REST APIs"],
    features: [
      "Robust user authentication and session management",
      "Structured REST API integration with comprehensive endpoint handling",
      "Enterprise database connectivity for consistent data persistence",
      "Cloud deployment architecture configured for Microsoft Azure"
    ],
    architectureHighlights: [
      "Modular React UI with reusable components and Tailwind CSS styling",
      "Spring Boot backend with secure request filters and validation",
      "Relational & document database layer with connection pooling",
      "Azure App Service hosting plan configuration with continuous deployment"
    ],
    githubUrl: "#",
    liveDemoUrl: "#"
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "corizo-cyber-security",
    title: "Cyber Security Intern",
    company: "Corizo",
    type: "Internship Training",
    period: "June 2026 – July 2026",
    badgeColor: "emerald",
    description: [
      "Successfully completed Cyber Security internship training, gaining foundational knowledge of cybersecurity concepts and practices.",
      "Enhanced understanding of cybersecurity principles, security awareness, and approaches to protecting digital environments.",
      "Explored proactive threat identification, vulnerability recognition, and fundamentals of network and host protection."
    ],
    skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Security Awareness", "Digital Protection", "Network Security"]
  },
  {
    id: "corizo-cloud-computing",
    title: "Cloud Computing Intern",
    company: "Corizo",
    type: "Internship Training",
    period: "January 2026 – February 2026",
    badgeColor: "cyan",
    description: [
      "Successfully completed internship training in Cloud Computing, gaining knowledge of cloud computing concepts, technologies, and infrastructure.",
      "Developed foundational understanding of cloud-based solutions, computing environments, and virtualization principles.",
      "Studied cloud service models (IaaS, PaaS, SaaS) and architectural best practices for modern cloud applications."
    ],
    skills: ["Cloud Computing", "Cloud Infrastructure", "Cloud-based Solutions", "Virtualization", "Computing Environments"]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "oracle-oci-ai-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issueDate: "October 2025",
    badge: "Official Certification",
    category: "AI/ML",
    description: "Validates foundational expertise in Artificial Intelligence, Machine Learning, OCI AI Services, generative models, and LLM applications on Oracle Cloud Infrastructure.",
    certificateFileName: "oracle-oci-ai-foundations-2025.pdf"
  },
  {
    id: "gcp-computing-foundations",
    title: "Google Cloud Career Launchpad – Computing Foundations Track",
    issuer: "Google Cloud",
    issueDate: "June 2026",
    badge: "Career Launchpad",
    category: "Cloud",
    description: "Hands-on foundation covering Google Cloud infrastructure, virtualization, container orchestration, IAM policies, and cloud system administration.",
    certificateFileName: "google-cloud-computing-foundations.pdf"
  },
  {
    id: "nptel-iot",
    title: "Introduction to Internet of Things – Elite (81%)",
    issuer: "NPTEL",
    issueDate: "April 2026",
    badge: "Elite Grade (81%)",
    category: "IoT",
    description: "Rigorous certification by IIT covering sensor networks, IoT protocols (MQTT, CoAP), wireless communication, cloud integration, and real-time sensor processing.",
    certificateFileName: "nptel-introduction-to-iot-elite.pdf"
  },
  {
    id: "nptel-java",
    title: "Programming in Java",
    issuer: "NPTEL",
    issueDate: "October 2025",
    badge: "Academic Certification",
    category: "Programming",
    description: "Covers Core Java architecture, OOP design principles, exception handling, multithreading, collections framework, and robust application development.",
    certificateFileName: "nptel-programming-in-java.pdf"
  },
  {
    id: "nptel-soft-skills",
    title: "Soft Skill Development",
    issuer: "NPTEL",
    issueDate: "March 2025",
    badge: "Professional Skills",
    category: "Soft Skills",
    description: "Professional workplace communication, team collaboration, technical presentations, problem-solving mindset, and corporate readiness.",
    certificateFileName: "nptel-soft-skill-development.pdf"
  },
  {
    id: "infosys-cloud-computing",
    title: "Cloud Computing",
    issuer: "Infosys Springboard",
    issueDate: "March 2026",
    badge: "Industry Certified",
    category: "Cloud",
    description: "Comprehensive training in distributed cloud computing, cloud architecture patterns, scalability, fault tolerance, and multi-tenant security.",
    certificateFileName: "infosys-cloud-computing.pdf"
  },
  {
    id: "infosys-azure-architecture",
    title: "Architecting Cloud Computing Solutions on Microsoft Azure",
    issuer: "Infosys Springboard",
    issueDate: "March 2026",
    badge: "Specialized Track",
    category: "Cloud",
    description: "Designing reliable, resilient, and secure enterprise architectures on Microsoft Azure with Virtual Networks, App Services, and Azure SQL databases.",
    certificateFileName: "infosys-azure-architecture.pdf"
  },
  {
    id: "infosys-javascript-modern",
    title: "JavaScript Essentials for Modern Web Development",
    issuer: "Infosys Springboard",
    issueDate: "March 2026",
    badge: "Web Track",
    category: "Programming",
    description: "Modern ECMAScript standards, asynchronous programming (Promises, async/await), DOM manipulation, and modular web architecture.",
    certificateFileName: "infosys-javascript-essentials.pdf"
  },
  {
    id: "infosys-web-dev-concepts",
    title: "Web Development Concepts",
    issuer: "Infosys Springboard",
    issueDate: "February 2026",
    badge: "Web Track",
    category: "Programming",
    description: "Fundamental architecture of the web, HTTP/HTTPS protocols, client-server models, responsive design paradigms, and browser rendering lifecycle.",
    certificateFileName: "infosys-web-development-concepts.pdf"
  },
  {
    id: "corizo-cyber-training",
    title: "Cyber Security Internship Training",
    issuer: "Corizo",
    issueDate: "July 2026",
    badge: "Training Completion",
    category: "Cybersecurity",
    description: "Completed comprehensive training modules in digital security defenses, network threat recognition, security postures, and incident response awareness.",
    certificateFileName: "corizo-cyber-security-internship.pdf"
  },
  {
    id: "corizo-cloud-training",
    title: "Cloud Computing Internship Training",
    issuer: "Corizo",
    issueDate: "February 2026",
    badge: "Training Completion",
    category: "Cloud",
    description: "Completed intensive practical modules on cloud environments, virtual instances, storage services, and cloud application deployment models.",
    certificateFileName: "corizo-cloud-computing-internship.pdf"
  },
  {
    id: "codetantra-software-dev",
    title: "Software Development Practices",
    issuer: "CodeTantra",
    issueDate: "February 2026",
    badge: "Engineering Track",
    category: "Programming",
    description: "Practical engineering methodology including clean code principles, version control, structured debugging, algorithmic thinking, and modular testing.",
    certificateFileName: "codetantra-software-development-practices.pdf"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE)",
    institution: "R.M.D. Engineering College",
    location: "Chennai, Tamil Nadu, India",
    period: "2024 – 2028",
    status: "Currently Pursuing (CSE)",
    details: [
      "Rigorous undergraduate coursework in Computer Science and Engineering, Data Structures & Algorithms, Operating Systems, Database Management Systems, and Cloud Computing.",
      "Specialized academic focus on Artificial Intelligence, Machine Learning systems, and distributed cloud applications.",
      "Demonstrated programming craftsmanship with 1300+ coding challenges solved on SkillRack."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Senior Secondary",
    institution: "Sanskriti jr college",
    location: "Tirupati, Andhra Pradesh, India",
    period: "2022 – 2024",
    status: "Completed (2024)",
    details: [
      "Mathematics, Physics, and Chemistry (MPC) stream.",
      "Built a solid foundation in analytical thinking, calculus, physics, and computational reasoning."
    ]
  }
];

export const PROBLEM_SOLVING_DATA = {
  platform: "SkillRack",
  problemsSolved: "1300+",
  highlight: "Demonstrated strong algorithmic proficiency, data structure mastery, and programming logic across Python, Java, and C through over 1300 solved problems."
};
