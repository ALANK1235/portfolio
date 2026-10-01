export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  category: string;
  year: string;
  tech: string[];
  description: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'work' | 'research' | 'education';
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  tag: string;
  skills: { name: string; level: number; note: string }[];
}

export interface PlaygroundExperiment {
  id: string;
  title: string;
  type: string;
  tag: string;
  description: string;
}
