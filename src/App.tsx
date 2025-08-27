import { Component, createSignal, onMount } from 'solid-js';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import ProjectGrid from './components/ProjectGrid';
import Patents from './components/Patents';
import Footer from './components/Footer';
import { altWebtopProject, githubProjects } from './data/projects';
import { fetchPinnedRepos } from './data/github';
import { patents } from './data/patents';
import type { Project } from './types';

const App: Component = () => {
  const [projects, setProjects] = createSignal<Project[]>(githubProjects);

  onMount(async () => {
    const repos = await fetchPinnedRepos();
    setProjects(repos);
  });

  return (
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <main class="pt-16">
        <Hero />
        <FeaturedProject project={altWebtopProject} />
        <Patents patents={patents} />
        <ProjectGrid projects={projects()} />
      </main>
      <Footer />
    </div>
  );
};

export default App;