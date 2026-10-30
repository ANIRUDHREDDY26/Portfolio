export interface Project {
  id: string;
  title: string;
  status: 'In Progress' | 'Concept' | 'Completed';
  category: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  architectureHighlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'AI & Machine Learning' | 'Cloud Computing' | 'Cybersecurity & IoT' | 'Databases' | 'Tools & Frameworks' | 'Concepts';
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  description: string[];
  skills: string[];
  badgeColor?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: 'Oracle' | 'Google Cloud' | 'NPTEL' | 'Infosys Springboard' | 'Corizo' | 'CodeTantra';
  issueDate: string;
  badge?: string;
  description: string;
  certificateFileName?: string;
  category: 'Cloud' | 'AI/ML' | 'Programming' | 'Cybersecurity' | 'IoT' | 'Soft Skills';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  details: string[];
}
