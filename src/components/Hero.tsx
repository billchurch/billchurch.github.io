import { Component, createSignal, onMount } from 'solid-js';
import { Motion } from 'solid-motionone';

const Hero: Component = () => {
  const [typedText, setTypedText] = createSignal('');
  const fullText = 'Building tools that connect systems and people';
  
  onMount(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  });

  return (
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 dark:opacity-30" />
      
      <Motion.div
        class="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Motion.h1
          class="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span class="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Full-Stack
          </span>{' '}
          <span class="text-gray-900 dark:text-white">Developer</span>
        </Motion.h1>
        
        <div class="h-16 flex items-center justify-center">
          <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light">
            {typedText()}
            <span class="animate-pulse">|</span>
          </p>
        </div>
        
        <Motion.div
          class="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="#projects"
            class="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          <a
            href="https://github.com/billchurch"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
          >
            GitHub Profile
          </a>
        </Motion.div>
      </Motion.div>
      
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
    </section>
  );
};

export default Hero;