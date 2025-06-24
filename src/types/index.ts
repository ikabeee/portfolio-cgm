export interface SocialMediaLink {
  name: string
  url: string
  icon: any // Astro component type
}

export interface NavItem {
  href: string
  label: string
}

export interface Language {
  code: string
  label: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  title: string
  description: string
  images: ProjectImage[]
  technologies: string[]
  link?: string
  github?: string
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
}

export interface Skill {
  name: string
  icon?: any // Astro component type
}
