import { Component, createSignal, onMount } from 'solid-js';
import { Sun, Moon } from 'lucide-solid';
import { getStoredTheme, setStoredTheme, getSystemTheme, applyTheme } from '../utils/theme';

const ThemeToggle: Component = () => {
  const [theme, setTheme] = createSignal<'light' | 'dark'>('light');

  onMount(() => {
    const stored = getStoredTheme();
    const initial = stored || getSystemTheme();
    setTheme(initial);
    applyTheme(initial);
  });

  const toggleTheme = () => {
    const newTheme = theme() === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setStoredTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${theme() === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme() === 'light' ? (
        <Moon class="w-5 h-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <Sun class="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;