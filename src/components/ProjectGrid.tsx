import { Component, For, createSignal, createMemo } from 'solid-js';
import { Motion } from 'solid-motionone';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

interface Props {
  projects: Project[];
}

const ProjectGrid: Component<Props> = (props) => {
  const [filter, setFilter] = createSignal<string>('all');

  const languages = createMemo(() => {
    const langs = new Set<string>();
    props.projects.forEach(p => {
      if (p.language) langs.add(p.language);
    });
    return Array.from(langs).sort();
  });

  const filteredProjects = createMemo(() => {
    if (filter() === 'all') return props.projects;
    return props.projects.filter(p => p.language === filter());
  });

  return (
    <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto">
        <Motion.div
          class="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Open Source Projects
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Contributions to the developer community
          </p>
        </Motion.div>

        <Motion.div
          class="flex flex-wrap gap-2 justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => setFilter('all')}
            class={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter() === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          <For each={languages()}>
            {(lang) => (
              <button
                onClick={() => setFilter(lang)}
                class={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter() === lang
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {lang}
              </button>
            )}
          </For>
        </Motion.div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <For each={filteredProjects()}>
            {(project, index) => (
              <ProjectCard project={project} index={index()} />
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;