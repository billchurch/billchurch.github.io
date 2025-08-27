import { Component } from 'solid-js';
import { Heart } from 'lucide-solid';

const Footer: Component = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p class="text-gray-600 dark:text-gray-400 text-center sm:text-left">
            © {currentYear} Bill Church. All rights reserved.
          </p>
          <div class="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
            <span>Built with</span>
            <Heart class="w-4 h-4 text-red-500" />
            <span>using SolidJS & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;