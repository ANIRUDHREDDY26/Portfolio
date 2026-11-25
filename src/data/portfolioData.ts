import { Project, SkillItem, ExperienceItem, CertificationItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "PEDDIREDDY LEELA ANIRUDH REDDY",
  firstName: "Anirudh",
  title: "Computer Science Engineering | AI & Full-Stack Developer",
  subTitle: "Pursuing B.Tech in Computer Science and Engineering (CSE)",
  tagline: "Computer Science Engineering undergraduate with a strong interest in Cloud Computing, DevOps, AI/ML, and Cloud Solutions Architecture.",
  email: "anirudhleela0@gmail.com",
  phone: "+91 8977720014",
  location: "Chennai, TamilNadu, India-601206",
  github: "https://github.com/ANIRUDHREDDY26",
  linkedin: "https://www.linkedin.com/in/peddireddy-leela-anirudh-reddy-11a511342",
  aboutText: "Computer Science Engineering undergraduate with a strong interest in Cloud Computing, DevOps, AI/ML, and Cloud Solutions Architecture. Focused on building practical skills in cloud infrastructure, automation, AI-powered applications, and backend development. Passionate about designing scalable, reliable, and efficient technology solutions while continuously strengthening problem-solving, programming, and system design skills through hands-on projects and continuous learning.",
  typewriterRoles: [
    "Computer Science Engineer (CSE)",
    "Cloud & DevOps Enthusiast",
    "AI & Full-Stack Developer",
    "Cloud Solutions Architect",
    "Cybersecurity Practitioner"
  ],
  stats: [
    { label: "Problems Solved", value: "1300+", subtitle: "SkillRack" },
    { label: "Certifications", value: "14+", subtitle: "Official Credentials" },
    { label: "Internships", value: "2", subtitle: "Cloud & Cyber Security" },
    { label: "Field of Study", value: "B.Tech CSE", subtitle: "R.M.D. Engg College" }
  ]
};

export const PROFILE_HIGHLIGHTS = [
  {
    title: "AI & Machine Learning",
    description: "Developing intelligent systems leveraging machine learning algorithms, NLP, LLMs, Generative AI, RAG architectures, prompt engineering, and vector search embeddings.",
    iconName: "BrainCircuit",
    gradient: "from-purple-500/20 to-indigo-500/10",
    borderGlow: "group-hover:border-purple-500/50"
  },
  {
    title: "Cloud Computing & DevOps",
    description: "Architecting cloud-native solutions across Microsoft Azure, Google Cloud, and Oracle Cloud Infrastructure (OCI) with a focus on automation, reliability, and scalability.",
    iconName: "Cloud",
    gradient: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "group-hover:border-cyan-500/50"
  },
  {
    title: "Cybersecurity & IoT",
    description: "Implementing cybersecurity fundamentals, anomaly detection, threat analysis, access control principles, and defense-in-depth system protection alongside IoT sensor telemetry.",
    iconName: "ShieldCheck",
    gradient: "from-emerald-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/50"
  },
  {
    title: "Full-Stack Development",
    description: "Engineering robust, reactive frontend interfaces with React.js and reliable backend REST APIs using Java, Spring Boot, modern databases, and workflow automation.",
    iconName: "Layers",
    gradient: "from-fuchsia-500/20 to-pink-500/10",
    borderGlow: "group-hover:border-fuchsia-500/50"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: "Python", category: "Programming", highlight: true },
  { name: "Java", category: "Programming", highlight: true },
  { name: "HTML & CSS", category: "Programming", highlight: true },
  { name: "JavaScript", category: "Programming", highlight: true },

  // AI & Machine Learning
  { name: "Machine Learning Algorithms", category: "AI & Machine Learning", highlight: true },
  { name: "NLP & LLM", category: "AI & Machine Learning", highlight: true },
  { name: "Generative AI", category: "AI & Machine Learning", highlight: true },
  { name: "AI Foundations", category: "AI & Machine Learning", highlight: true },
  { name: "RAG & Vector Embeddings", category: "AI & Machine Learning", highlight: true },
  { name: "Prompt Engineering", category: "AI & Machine Learning", highlight: true },

  // Cloud Computing
  { name: "Microsoft Azure", category: "Cloud Computing", highlight: true },
  { name: "Google Cloud", category: "Cloud Computing", highlight: true },
  { name: "Oracle Cloud Infrastructure (OCI)", category: "Cloud Computing", highlight: true },
  { name: "Cloud Architecture", category: "Cloud Computing", highlight: true },

  // Cybersecurity & IoT
  { name: "Cybersecurity Fundamentals", category: "Cybersecurity & IoT", highlight: true },
  { name: "Internet of Things (IoT)", category: "Cybersecurity & IoT", highlight: true },
  { name: "Computing Foundations", category: "Cybersecurity & IoT", highlight: true },

  // Databases
  { name: "MySQL", category: "Databases", highlight: true },
  { name: "MongoDB Atlas (Vector Search)", category: "Databases", highlight: true },

  // Tools & Frameworks
  { name: "LangChain", category: "Tools & Frameworks", highlight: true },
  { name: "N8N", category: "Tools & Frameworks", highlight: true },
  { name: "React.js", category: "Tools & Frameworks", highlight: true },
  { name: "Spring Boot", category: "Tools & Frameworks", highlight: true },
  { name: "Power BI", category: "Tools & Frameworks", highlight: true }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "cloud-security-threat-detection",
    title: "AI-Powered Cloud Security & Threat Detection System",
    status: "In Progress",
    category: "AI & Cybersecurity",
    problemStatement: "Modern enterprise cloud environments face high-velocity telemetry data and sophisticated cyber threats that conventional static firewalls fail to detect in real-time, resulting in delayed incident responses.",
    solution: "Designed an AI-based security monitoring system to identify suspicious activities, analyze security events, and detect potential cyber threats. Integrated machine learning concepts and cloud-based monitoring to support automated threat analysis and security alerts.",
    technologies: ["AI Foundations", "Cybersecurity", "Python", "Cloud Computing", "Machine Learning"],
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
    solution: "Designed an IoT-based monitoring solution to collect and analyze real-time environmental data using connected sensors. Developed a cloud-integrated monitoring architecture for data storage, visualization, and intelligent analysis of sensor readings.",
    technologies: ["Internet of Things", "Google Cloud", "Python", "Cloud Computing", "Data Analytics"],
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
    title: "Cloud-Based Full-Stack Application & Deployment System",
    status: "In Progress",
    category: "Full-Stack & Cloud",
    problemStatement: "Modern applications demand clean separation of concerns, secure identity verification, and dependable containerized cloud deployment to guarantee high availability and scale.",
    solution: "Developed a full-stack web application using Java, JavaScript, and modern web technologies with cloud-based deployment architecture. Explored cloud infrastructure, application hosting, database integration, and scalable application deployment using Microsoft Azure concepts.",
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
    id: "corizo-cloud-computing",
    title: "Cloud Computing Intern",
    company: "Corizo",
    type: "Internship Training",
    period: "Jan 2026 – Feb 2026",
    badgeColor: "cyan",
    description: [
      "Successfully completed internship training in Cloud Computing, gaining knowledge of cloud computing concepts, technologies, and infrastructure.",
      "Developed foundational understanding of cloud-based solutions and computing environments."
    ],
    skills: ["Cloud Computing", "Cloud Infrastructure", "Cloud-based Solutions", "Virtualization", "Computing Environments"],
    certificateFileName: "corizo-cloud-computing-internship.png"
  },
  {
    id: "corizo-cyber-security",
    title: "Cyber Security Intern",
    company: "Corizo",
    type: "Internship Training",
    period: "Jun 2026 – Jul 2026",
    badgeColor: "emerald",
    description: [
      "Successfully completed Cyber Security internship training, gaining foundational knowledge of cybersecurity concepts and practices.",
      "Enhanced understanding of cybersecurity principles, security awareness, and approaches to protecting digital environments."
    ],
    skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Security Awareness", "Digital Protection", "Network Security"],
    certificateFileName: "corizo-cyber-security-internship.png"
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "oracle-oci-ai-2025",
    title: "Oracle: OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issueDate: "October 2025",
    badge: "Official Certification",
    category: "AI/ML",
    description: "Validates foundational expertise in Artificial Intelligence, Machine Learning, OCI AI Services, generative models, and LLM applications on Oracle Cloud Infrastructure.",
    certificateFileName: "oracle-oci-ai-foundations-2025.pdf"
  },
  {
    id: "gcp-computing-foundations",
    title: "Google Cloud: Google Cloud Career Launchpad – Computing Foundations Track",
    issuer: "Google Cloud",
    issueDate: "June 2026",
    badge: "Career Launchpad",
    category: "Cloud",
    description: "Hands-on foundation covering Google Cloud infrastructure, virtualization, container orchestration, IAM policies, and cloud system administration.",
    certificateFileName: "google-cloud-computing-foundations.pdf"
  },
  {
    id: "nptel-iot",
    title: "NPTEL: Introduction to Internet of Things (Elite – 81%)",
    issuer: "NPTEL",
    issueDate: "April 2026",
    badge: "Elite Grade (81%)",
    category: "IoT",
    description: "Rigorous certification by IIT covering sensor networks, IoT protocols (MQTT, CoAP), wireless communication, cloud integration, and real-time sensor processing.",
    certificateFileName: "nptel-introduction-to-iot-elite.pdf"
  },
  {
    id: "nptel-java",
    title: "NPTEL: Programming in Java",
    issuer: "NPTEL",
    issueDate: "October 2025",
    badge: "Academic Certification",
    category: "Programming",
    description: "Covers Core Java architecture, OOP design principles, exception handling, multithreading, collections framework, and robust application development.",
    certificateFileName: "nptel-programming-in-java.pdf"
  },
  {
    id: "nptel-soft-skills",
    title: "NPTEL: Soft Skill Development",
    issuer: "NPTEL",
    issueDate: "March 2025",
    badge: "Professional Skills",
    category: "Soft Skills",
    description: "Professional workplace communication, team collaboration, technical presentations, problem-solving mindset, and corporate readiness.",
    certificateFileName: "nptel-soft-skill-development.pdf"
  },
  {
    id: "infosys-cloud-computing",
    title: "Infosys Springboard: Cloud Computing",
    issuer: "Infosys Springboard",
    issueDate: "March 2026",
    badge: "Industry Certified",
    category: "Cloud",
    description: "Comprehensive training in distributed cloud computing, cloud architecture patterns, scalability, fault tolerance, and multi-tenant security.",
    certificateFileName: "infosys-cloud-computing.pdf"
  },
  {
    id: "infosys-azure-architecture",
    title: "Infosys Springboard: Architecting Cloud Computing Solutions on Microsoft Azure",
    issuer: "Infosys Springboard",
    issueDate: "March 2026",
    badge: "Specialized Track",
    category: "Cloud",
    description: "Designing reliable, resilient, and secure enterprise architectures on Microsoft Azure with Virtual Networks, App Services, and Azure SQL databases.",
    certificateFileName: "infosys-azure-architecture.pdf"
  },
  {
    id: "infosys-javascript-modern",
    title: "Infosys Springboard: JavaScript Essentials for Modern Web Development",
    issuer: "Infosys Springboard",
    issueDate: "March 2026",
    badge: "Web Track",
    category: "Programming",
    description: "Modern ECMAScript standards, asynchronous programming (Promises, async/await), DOM manipulation, and modular web architecture.",
    certificateFileName: "infosys-javascript-essentials.pdf"
  },
  {
    id: "infosys-web-dev-concepts",
    title: "Infosys Springboard: Web Development Concepts",
    issuer: "Infosys Springboard",
    issueDate: "February 2026",
    badge: "Web Track",
    category: "Programming",
    description: "Fundamental architecture of the web, HTTP/HTTPS protocols, client-server models, responsive design paradigms, and browser rendering lifecycle.",
    certificateFileName: "infosys-web-development-concepts.pdf"
  },
  {
    id: "intermediate-12th-board",
    title: "HSC (Senior Secondary) — Sanskriti jr college (Tirupati)",
    issuer: "Board of Intermediate Education, AP",
    issueDate: "March 2024",
    badge: "87.2%",
    category: "Academic",
    description: "Completed Senior Secondary Intermediate Education from Sanskriti Junior College, Tirupati with 87.2% marks.",
    certificateFileName: "intermediate-12th-certificate.jpg"
  },
  {
    id: "ssc-10th-board",
    title: "Secondary School Certificate (SSC / 10th Standard)",
    issuer: "Board of Secondary Education, AP",
    issueDate: "April 2022",
    badge: "First Division (481 Marks)",
    category: "Academic",
    description: "Completed Secondary School Examination from Gautam Talent (E.M.) High School, Balaji Colony, Tirupati in First Division with English medium of instruction.",
    certificateFileName: "ssc-10th-certificate.jpg"
  },
  {
    id: "corizo-cloud-training",
    title: "Corizo: Cloud Computing Internship Training",
    issuer: "Corizo",
    issueDate: "February 2026",
    badge: "Training Completion",
    category: "Cloud",
    description: "Completed intensive practical modules on cloud environments, virtual instances, storage services, and cloud application deployment models.",
    certificateFileName: "corizo-cloud-computing-internship.png"
  },
  {
    id: "corizo-cyber-training",
    title: "Corizo: Cyber Security Internship Training",
    issuer: "Corizo",
    issueDate: "July 2026",
    badge: "Training Completion",
    category: "Cybersecurity",
    description: "Completed comprehensive training modules in digital security defenses, network threat recognition, security postures, and incident response awareness.",
    certificateFileName: "corizo-cyber-security-internship.png"
  },
  {
    id: "codetantra-software-dev",
    title: "CodeTantra: Software Development Practices",
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
    degree: "B.Tech in Computer Science and Engineering",
    institution: "R.M.D. Engineering College (Chennai)",
    location: "Chennai, Tamil Nadu, India",
    period: "2024 – 2028",
    status: "CGPA: 7.04",
    details: [
      "Rigorous undergraduate engineering program in Computer Science and Engineering with an academic CGPA of 7.04.",
      "Focused on Cloud Computing, DevOps, AI/ML, Data Structures & Algorithms, Operating Systems, and Database Management Systems.",
      "Demonstrated programming craftsmanship with 1300+ coding challenges solved on SkillRack."
    ]
  },
  {
    degree: "HSC (Senior Secondary)",
    institution: "Sanskriti jr college (Tirupati)",
    location: "Tirupati, Andhra Pradesh, India",
    period: "2024",
    status: "87.2%",
    details: [
      "Mathematics, Physics, and Chemistry (MPC) stream.",
      "Passed with 87.2% under Board of Intermediate Education, Andhra Pradesh.",
      "Built a solid foundation in analytical thinking, calculus, physics, and computational reasoning."
    ],
    certificateFileName: "intermediate-12th-certificate.jpg",
    certificateTitle: "HSC Senior Secondary Certificate"
  },
  {
    degree: "Secondary School Certificate (SSC / 10th Standard)",
    institution: "Gautam Talent (E.M.) High School",
    location: "Balaji Colony, Tirupati, Andhra Pradesh",
    period: "2021 – 2022",
    status: "First Division (481 Marks)",
    details: [
      "Board of Secondary Education, Andhra Pradesh.",
      "Secured First Division with 481 marks with English as medium of instruction.",
      "Strong foundation in Mathematics, General Science, and analytical problem solving."
    ],
    certificateFileName: "ssc-10th-certificate.jpg",
    certificateTitle: "SSC 10th Certificate"
  }
];

export const PROBLEM_SOLVING_DATA = {
  platform: "SkillRack",
  problemsSolved: "1300+",
  highlight: "Demonstrated strong algorithmic proficiency, data structure mastery, and programming logic across Python, Java, and C through over 1300 solved problems."
};
