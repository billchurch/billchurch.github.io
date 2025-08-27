export interface Project {
  id: string;
  name: string;
  description: string;
  language?: string;
  languageColor?: string;
  stars?: number;
  forks?: number;
  topics?: string[];
  url: string;
  homepage?: string;
  demoUrl?: string;
  isFeatured?: boolean;
  technologies?: string[];
  highlights?: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

export interface Patent {
  id: string;
  number: string;
  title: string;
  abstract: string;
  issuedDate: string;
  assignee: string;
  keyFeatures: string[];
  technicalArea: string;
  usptoUrl: string;
}

export interface Theme {
  mode: 'light' | 'dark';
  toggle: () => void;
}