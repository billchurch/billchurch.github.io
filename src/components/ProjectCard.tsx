import { Component } from 'solid-js';
import { Motion } from 'solid-motionone';
import { Github, ExternalLink, Star, GitFork } from 'lucide-solid';
import type { Project } from '../types';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: Component<Props> = (props) => {
  return (
    <Motion.div
      class="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
    >
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div class="relative p-6 h-full flex flex-col">
        <div class="flex items-start justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {props.project.name}
          </h3>
          {props.project.language && (
            <span class="flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700">
              <span
                class="w-2 h-2 rounded-full mr-1"
                style={{ 'background-color': props.project.languageColor || '#959da5' }}
              />
              {props.project.language}
            </span>
          )}
        </div>

        <p class="text-gray-600 dark:text-gray-400 flex-grow mb-4">
          {props.project.description || 'No description available'}
        </p>

        {props.project.topics && props.project.topics.length > 0 && (
          <div class="flex flex-wrap gap-2 mb-4">
            {props.project.topics.slice(0, 4).map(topic => (
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300">
                {topic}
              </span>
            ))}
          </div>
        )}

        <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-4">
            {props.project.stars !== undefined && (
              <span class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Star class="w-4 h-4 mr-1" />
                {props.project.stars.toLocaleString()}
              </span>
            )}
            {props.project.forks !== undefined && (
              <span class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <GitFork class="w-4 h-4 mr-1" />
                {props.project.forks}
              </span>
            )}
          </div>

          <div class="flex items-center space-x-2">
            <a
              href={props.project.url}
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="View on GitHub"
            >
              <Github class="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </a>
            {props.project.homepage && (
              <a
                href={props.project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="View Demo"
              >
                <ExternalLink class="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProjectCard;