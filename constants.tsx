
import React from 'react';
import { 
  Brain, 
  Code2, 
  Workflow, 
  Layout, 
  ShieldCheck, 
  Rocket, 
  Layers,
  Sparkles
} from 'lucide-react';
import { SkillCategory, Project, FocusArea } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning Fundamentals",
      "Prompt Engineering",
      "AI Workflow Design",
      "API-based AI Integration",
      "Model Deployment Concepts"
    ]
  },
  {
    title: "n8n Automations",
    skills: [
      "Logical Automation",
      "Operational Workflows",
      "API Integration",
      "LLM Integration",
      "Agentic AI"
    ]
  },
  {
    title: "Web3 and Blockchain",
    skills: [
      "Smart Contracts",
      "Decentralized Applications",
      "Ether.js",
      "Blockchain Integration",
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Costumer Service Automations",
    description: "Developed an automated customer service workflow using n8n to handle inquiries, route requests, and integrate APIs, improving response time and operational efficiency.",
    tags: ["n8n", "API Integration", "LLM Integration"],
    liveLink: "#",
    githubLink: "https://github.com/ageng1322-lah/n8n-automations/tree/256663bcd6d39715ed1c308d4b59e02746a555d0",
    image: "photo/Screenshot 2026-01-15 154751.png"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Built a Flutter-based AI content generator application that integrates LLM APIs to create dynamic, user-driven content in real time, delivering a fast, responsive, and intuitive mobile experience.",
    tags: ["Flutter", "API Integration", "LLM Integration"],
    liveLink: "#",
    githubLink: "https://github.com/ageng1322-lah/AI-content-generator/tree/7050a22d3742a51c53dbee4115dce9f9151e524c",
    image: "photo/Screenshot 2026-02-15 083213.png"
  },
  {
    id: 3,
    title: "Online Learning SaaS",
    description: "Designed and developed a responsive Online Learning SaaS user interface using React, featuring structured course layouts, authentication flows, and modern component-based architecture for scalable and maintainable frontend development.",
    tags: ["React", "Next.js", "SaaS"],
    liveLink: "#",
    githubLink: "https://github.com/ageng1322-lah/online-class-Saas.git",
    image: "photo/Screenshot 2026-02-15 094020.png"
  },
  {
    id: 4,
    title: "Recommendation System",
    description: "Built a machine learning–based recommendation system to generate personalized suggestions using user behavior data, improving relevance and user engagement.",
    tags: ["Python", "Machine Learning", "Data Science"],
    liveLink: "https://colab.research.google.com/drive/1IirOn8ewhab7_O-j5dLkxny-S-g4IXqT?usp=sharing",
    githubLink: "https://colab.research.google.com/drive/1IirOn8ewhab7_O-j5dLkxny-S-g4IXqT?usp=sharing",
    image: "photo/Screenshot 2026-02-15 094513.png"
  }
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: "AI Engineer",
    description: "Bridging the gap between complex machine learning models and production-ready applications.",
    icon: "Brain"
  },
  {
    title: "AI Product Builder",
    description: "Designing end-to-end AI experiences with a strong focus on usability and market value.",
    icon: "Rocket"
  },
  {
    title: "Machine Learning Developer",
    description: "Implementing robust ML workflows from data preprocessing to conceptual model deployment.",
    icon: "Workflow"
  },
  {
    title: "Intelligent System Designer",
    description: "Architecting scalable systems that leverage AI to solve real-world operational challenges.",
    icon: "Layers"
  }
];
