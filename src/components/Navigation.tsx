import { Component } from 'solid-js';
import { Github, Linkedin, Mail } from 'lucide-solid';
import ThemeToggle from './ThemeToggle';

const Navigation: Component = () => {
  return (
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <span class="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Bill Church
            </span>
          </div>
          
          <div class="flex items-center space-x-4">
            <a
              href="https://github.com/billchurch"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github class="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/billchurch"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin class="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:wmchurch@gmail.com"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <Mail class="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
            <div class="w-px h-6 bg-gray-300 dark:bg-gray-700" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;