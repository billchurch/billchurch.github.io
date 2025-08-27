import { Component } from 'solid-js';
import { Motion } from 'solid-motionone';
import { ExternalLink, Monitor, Zap, Shield, Keyboard } from 'lucide-solid';
import type { Project } from '../types';

interface Props {
  project: Project;
}

const FeaturedProject: Component<Props> = (props) => {
  return (
    <Motion.section
      id="featured"
      class="py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div class="max-w-7xl mx-auto">
        <Motion.div
          class="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Project
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Enterprise-grade web application in production
          </p>
        </Motion.div>

        <Motion.div
          class="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div class="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
            <div class="space-y-6">
              <div>
                <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {props.project.name}
                </h3>
                <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {props.project.description}
                </p>
              </div>

              <div class="flex flex-wrap gap-2">
                {props.project.technologies?.map(tech => (
                  <span class="px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div class="space-y-3">
                {props.project.highlights?.map(highlight => (
                  <div class="flex items-start space-x-3">
                    <Zap class="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <span class="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>

              <div class="flex gap-4 pt-4">
                <a
                  href={props.project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  <Monitor class="w-5 h-5 mr-2" />
                  View Live Demo
                  <ExternalLink class="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            <Motion.div
              class="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div class="bg-gray-900 rounded-lg shadow-2xl p-1">
                <div class="bg-gray-800 rounded-t px-4 py-2 flex items-center space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500" />
                  <div class="w-3 h-3 rounded-full bg-yellow-500" />
                  <div class="w-3 h-3 rounded-full bg-green-500" />
                  <span class="ml-4 text-xs text-gray-400">alt-webtop.app</span>
                </div>
                <div class="bg-gray-900 p-6 rounded-b">
                  <div class="space-y-4">
                    <div class="flex items-center space-x-4">
                      <Shield class="w-8 h-8 text-green-400" />
                      <div>
                        <div class="text-white font-semibold">Enterprise Security</div>
                        <div class="text-gray-400 text-sm">F5 BIG-IP APM Integration</div>
                      </div>
                    </div>
                    <div class="flex items-center space-x-4">
                      <Keyboard class="w-8 h-8 text-blue-400" />
                      <div>
                        <div class="text-white font-semibold">Power User Features</div>
                        <div class="text-gray-400 text-sm">Keyboard shortcuts & quick actions</div>
                      </div>
                    </div>
                    <div class="flex items-center space-x-4">
                      <Zap class="w-8 h-8 text-yellow-400" />
                      <div>
                        <div class="text-white font-semibold">Lightning Fast</div>
                        <div class="text-gray-400 text-sm">10,000+ systems, instant search</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl" />
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-primary-400/20 rounded-full blur-2xl" />
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default FeaturedProject;