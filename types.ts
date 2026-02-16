
export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}
