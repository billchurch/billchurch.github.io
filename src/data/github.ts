import type { GitHubRepo, Project } from '../types';
import { githubProjects, languageColors } from './projects';

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'billchurch';

export async function fetchPinnedRepos(): Promise<Project[]> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${USERNAME}/repos?per_page=100&sort=updated`);
    
    if (!response.ok) {
      console.warn('Failed to fetch GitHub repos, using fallback data');
      return githubProjects;
    }

    const repos: GitHubRepo[] = await response.json();
    
    const pinnedRepoNames = ['webssh2', 'bhyve-mqtt', 'ssh_test', 'jsmasker', 'dolos', 'ha-blueprints'];
    
    const pinnedRepos = repos
      .filter(repo => pinnedRepoNames.includes(repo.name))
      .map(repo => ({
        id: repo.name,
        name: repo.name,
        description: repo.description || '',
        language: repo.language || undefined,
        languageColor: repo.language ? languageColors[repo.language] : undefined,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics || [],
        url: repo.html_url,
        homepage: repo.homepage || undefined,
      }));

    return pinnedRepos.length > 0 ? pinnedRepos : githubProjects;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return githubProjects;
  }
}