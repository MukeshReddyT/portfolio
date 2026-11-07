import { Project, SkillCategory, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  fullName: 'T. Mukesh Reddy',
  role: 'Aspiring AI Engineer',
  educationSubtitle: 'First-Year B.Tech Student in Computer Science & Engineering (AI & ML)',
  shortBio:
    'First-Year B.Tech AI & ML student dedicated to building robust software systems, exploring modern Generative AI workflows, and solving practical real-world problems. Actively engaged in collegiate hackathons, ideathons, and open-source learning.',
  email: 'mukesh.thummura@gmail.com',
  githubUrl: 'https://github.com/MukeshReddyT',
  linkedinUrl: 'https://www.linkedin.com/in/t-mukesh-reddy-9b8696432/',
  location: 'India',
  degree: 'Bachelor of Technology (B.Tech)',
  specialization: 'Artificial Intelligence & Machine Learning',
  year: 'First Year (2024–2028 Cohort)',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    categoryName: 'Programming Languages',
    description: 'Core foundational syntax and computational logic',
    skills: [
      { name: 'Python', level: 'Foundational & Scripting', focus: 'Data structures, OOP, automated logic scripts' },
      { name: 'JavaScript', level: 'Client-side Basics', focus: 'DOM manipulation, async fetch, interactive UI' },
      { name: 'HTML5', level: 'Semantic Markup', focus: 'Accessible document structure, form semantics' },
      { name: 'CSS3', level: 'Styling & Flexbox/Grid', focus: 'Responsive layouts, modern CSS variables, transitions' },
    ],
  },
  {
    id: 'technical',
    categoryName: 'Technical & Domain Skills',
    description: 'Modern development tools and emerging artificial intelligence paradigms',
    skills: [
      { name: 'Web Development Basics', level: 'Core Stack', focus: 'Clean responsive frontends, component structures' },
      { name: 'Generative AI Foundations', level: 'Conceptual & Applied', focus: 'LLM capabilities, tokenization, AI system architecture' },
      { name: 'Prompt Engineering', level: 'Applied', focus: 'Few-shot framing, structured output schemas, system instructions' },
      { name: 'Git & GitHub', level: 'Version Control', focus: 'Branch management, pull requests, repository hygiene' },
    ],
  },
  {
    id: 'soft',
    categoryName: 'Soft & Practical Skills',
    description: 'Methodologies for problem solving, teamwork, and technical communication',
    skills: [
      { name: 'Problem Solving', level: 'Analytical', focus: 'Decomposing complex requirements into modular algorithms' },
      { name: 'Algorithmic Thinking', level: 'Core Logic', focus: 'Step-by-step optimization, condition handling, validation' },
      { name: 'Hackathon Ideation & Pitching', level: 'Collaborative', focus: 'Rapid concept validation, slide decks, live prototype demo' },
      { name: 'Team Collaboration', level: 'Interpersonal', focus: 'Peer code reviews, sprint coordination, cross-functional synergy' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'voter-eligibility',
    title: 'Voter Eligibility Calculator',
    tagline: 'Civic verification logic engine evaluating legal age and regional voting prerequisites.',
    description:
      'A practical utility logic tool built to evaluate citizen voting status based on age, region, and regulatory parameters. Handles boundary conditions, national legal age thresholds, and voter ID status with explanatory outcome reporting.',
    techStack: ['Python', 'Web Stack', 'Algorithm Logic'],
    category: 'Python',
    githubUrl: 'https://github.com/MukeshReddyT',
    highlights: [
      'Age threshold validation with automated birthdate calculations',
      'Regional constituency compliance and electoral ID verification',
      'Clear, informative guidance for prospective first-time voters',
    ],
    demoType: 'voter',
  },
  {
    id: 'atm-management',
    title: 'ATM Management System',
    tagline: 'Reliable transaction state machine modeling core banking operations and balance safeguards.',
    description:
      'A simulation of banking operations covering PIN authentication, balance checks, deposits, and withdrawal workflows. Implements secure balance verification, daily withdrawal limits, and a ledger transaction history.',
    techStack: ['Python', 'OOP Architecture', 'State Machine'],
    category: 'Python',
    githubUrl: 'https://github.com/MukeshReddyT',
    highlights: [
      'Secure PIN entry validation with lockout guards on repeated attempts',
      'Atomic balance updates preventing overdraft or negative disbursements',
      'Interactive audit mini-statement documenting historical deposits & debits',
    ],
    demoType: 'atm',
  },
  {
    id: 'student-grade-calc',
    title: 'Student Grade Calculator',
    tagline: 'Automated academic computation engine determining GPAs, credit weights, and grade tiers.',
    description:
      'An automated academic tool calculating GPAs, marks distributions, and performance tiers for students. Features flexible credit weighting, grade boundaries, and instant visual performance tier classifications.',
    techStack: ['Python', 'Web Stack', 'Statistical Logic'],
    category: 'Web Stack',
    githubUrl: 'https://github.com/MukeshReddyT',
    highlights: [
      'Weighted GPA/CGPA computation with dynamic course entry',
      'Instant percentile band and academic honor classification',
      'Clean summary breakdown suitable for semester self-assessment',
    ],
    demoType: 'grade',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'hackathon-1',
    title: 'Collegiate Hackathons & Rapid Prototyping',
    category: 'Hackathon',
    organization: 'University Engineering Circuit',
    period: '2024 – Present',
    description:
      'Active participant in competitive collegiate hackathons, collaborating in cross-disciplinary teams to conceptualize, prototype, and pitch functional software solutions within 24 to 36-hour sprint windows.',
    keyTakeaway: 'Mastered agile sprint collaboration, user-centric problem scoping, and technical presentation under tight deadlines.',
  },
  {
    id: 'ideathon-1',
    title: 'AI Innovation & Problem-Solving Ideathons',
    category: 'Ideathon',
    organization: 'Campus Innovation Cell & Tech Forums',
    period: '2024 – Present',
    description:
      'Engaged in technical ideation competitions focusing on applying Artificial Intelligence and Machine Learning to real-world challenges, including civic utilities, academic automation, and accessibility.',
    keyTakeaway: 'Refined structured concept pitching, feasibility modeling, and ethical AI evaluation frameworks.',
  },
  {
    id: 'certification-1',
    title: 'Python Programming Foundations & Data Structures',
    category: 'Certification',
    organization: 'Coursework & Self-Directed Track',
    period: 'Ongoing',
    description:
      'Comprehensive study of Python language mechanics, modular script design, object-oriented principles, and algorithm complexity fundamentals.',
    keyTakeaway: 'Built structured CLI logic tools and foundational automation scripts.',
  },
  {
    id: 'certification-2',
    title: 'Web Development & Generative AI Exploration',
    category: 'Academic',
    organization: 'Self-Directed & Online Technical Workshops',
    period: 'Ongoing',
    description:
      'Continuous hands-on learning covering modern semantic HTML5, responsive CSS3 architectures, modern JavaScript, and the integration of large language model capabilities.',
    keyTakeaway: 'Bridging classic web interfaces with modern intelligent backend interfaces.',
  },
];
