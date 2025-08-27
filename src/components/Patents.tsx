import { Component, For } from 'solid-js';
import { Motion } from 'solid-motionone';
import { Award, Shield, Key, Calendar, Building, ExternalLink } from 'lucide-solid';
import type { Patent } from '../types';

interface Props {
  patents: Patent[];
}

const Patents: Component<Props> = (props) => {
  return (
    <section id="patents" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="max-w-7xl mx-auto">
        <Motion.div
          class="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div class="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <Award class="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Patents & Innovations
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pioneering network security and authentication technologies at F5 Networks
          </p>
        </Motion.div>

        <div class="grid md:grid-cols-2 gap-8">
          <For each={props.patents}>
            {(patent, index) => (
              <Motion.div
                class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index() * 0.2 }}
              >
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-primary-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div class="relative p-8">
                  <div class="flex items-start justify-between mb-6">
                    <div class="flex items-center space-x-3">
                      {patent.technicalArea.includes('Certificate') ? (
                        <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <Key class="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                      ) : (
                        <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Shield class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      )}
                      <div>
                        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Patent</span>
                        <p class="text-lg font-bold text-gray-900 dark:text-white">{patent.number}</p>
                      </div>
                    </div>
                    <a
                      href={patent.usptoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      aria-label="View on USPTO"
                    >
                      <ExternalLink class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </a>
                  </div>

                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    {patent.title}
                  </h3>

                  <p class="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {patent.abstract}
                  </p>

                  <div class="space-y-4 mb-6">
                    <div class="flex items-start space-x-3">
                      <Calendar class="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Issued</span>
                        <p class="text-sm font-medium text-gray-900 dark:text-white">{patent.issuedDate}</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Building class="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Assignee</span>
                        <p class="text-sm font-medium text-gray-900 dark:text-white">{patent.assignee}</p>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                      Key Innovations
                    </p>
                    <div class="space-y-2">
                      <For each={patent.keyFeatures.slice(0, 2)}>
                        {(feature) => (
                          <div class="flex items-start space-x-2">
                            <div class="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{feature}</p>
                          </div>
                        )}
                      </For>
                    </div>
                  </div>

                  <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                      {patent.technicalArea}
                    </span>
                  </div>
                </div>
              </Motion.div>
            )}
          </For>
        </div>

        <Motion.div
          class="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p class="text-gray-600 dark:text-gray-400">
            View full patent details on{' '}
            <a
              href="https://www.uspto.gov/patents/search"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              USPTO Patent Search
            </a>
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default Patents;