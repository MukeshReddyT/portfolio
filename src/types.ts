export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  category: 'Python' | 'Web Stack' | 'Algorithm';
  githubUrl: string;
  highlights: string[];
  demoType: 'voter' | 'atm' | 'grade';
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Ideathon' | 'Certification' | 'Academic';
  organization: string;
  period: string;
  description: string;
  keyTakeaway: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
