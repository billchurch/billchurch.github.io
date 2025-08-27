import type { Project } from '../types';

export const altWebtopProject: Project = {
  id: 'alt-webtop',
  name: 'Alt Webtop',
  description: 'Enterprise F5 BIG-IP APM system management interface. Modern, powerful portal for managing 10,000+ systems.',
  language: 'TypeScript',
  languageColor: '#2b7489',
  technologies: ['SolidJS', 'TypeScript', 'Tailwind CSS', 'Vite'],
  demoUrl: 'https://billchurch.github.io/alt-webtop/',
  url: 'https://github.com/billchurch',
  isFeatured: true,
  highlights: [
    'Handles 10,000+ systems with instant search',
    'Sub-second load times',
    'Dark/Light theme support',
    'Keyboard shortcuts for power users',
    'F5 BIG-IP APM native integration'
  ]
};

export const githubProjects: Project[] = [
  {
    id: 'webssh2',
    name: 'webssh2',
    description: 'Web SSH Client using ssh2, socket.io, xterm.js, and express',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 2500,
    url: 'https://github.com/billchurch/webssh2',
    topics: ['ssh', 'websocket', 'terminal', 'xterm']
  },
  {
    id: 'bhyve-mqtt',
    name: 'bhyve-mqtt',
    description: 'MQTT Gateway to unofficial Orbit B-Hyve API',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 54,
    url: 'https://github.com/billchurch/bhyve-mqtt',
    topics: ['iot', 'mqtt', 'home-automation', 'smart-home']
  },
  {
    id: 'ssh_test',
    name: 'ssh_test',
    description: 'A fully configurable SSH server Docker container designed specifically for integration testing',
    language: 'Shell',
    languageColor: '#89e051',
    stars: 1,
    url: 'https://github.com/billchurch/ssh_test',
    topics: ['docker', 'ssh', 'testing', 'devops']
  },
  {
    id: 'jsmasker',
    name: 'jsmasker',
    description: 'JavaScript data masking utility',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 1,
    url: 'https://github.com/billchurch/jsmasker',
    topics: ['javascript', 'security', 'data-masking']
  },
  {
    id: 'dolos',
    name: 'dolos',
    description: 'A test environment for smart-card / ldap authentication',
    language: 'Shell',
    languageColor: '#89e051',
    url: 'https://github.com/billchurch/dolos',
    topics: ['authentication', 'smart-card', 'ldap', 'testing']
  },
  {
    id: 'ha-blueprints',
    name: 'ha-blueprints',
    description: 'Home Assistant Blueprints',
    language: 'YAML',
    languageColor: '#cb171e',
    url: 'https://github.com/billchurch/ha-blueprints',
    topics: ['home-assistant', 'automation', 'smart-home']
  },
  {
    id: 'pica',
    name: 'PiCA',
    description: 'Raspberry Pi Certificate Authority - A comprehensive CA management system with YubiKey integration for secure key storage',
    language: 'Go',
    languageColor: '#00ADD8',
    stars: 1,
    url: 'https://github.com/billchurch/PiCA',
    topics: ['certificate-authority', 'security', 'yubikey', 'raspberry-pi', 'pki']
  }
];

export const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Shell: '#89e051',
  YAML: '#cb171e',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
};