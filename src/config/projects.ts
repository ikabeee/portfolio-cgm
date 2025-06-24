import type { Project } from '../types'

export const projects: Project[] = [
  {
    titleKey: 'projects.university.title',
    descriptionKey: 'projects.university.description',
    images: [
      {
        src: '/project-1-1.jpg',
        alt: 'Vista de escritorio del proyecto'
      },
      {
        src: '/project-1-2.jpg',
        alt: 'Vista de tablet del proyecto'
      },
      {
        src: '/project-1-3.jpg',
        alt: 'Vista móvil del proyecto'
      }
    ],
    technologies: ['React', 'TailwindCSS', 'Node.js'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project'
  }
  // Add more projects as needed
]
