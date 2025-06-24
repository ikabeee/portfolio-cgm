export interface SocialMediaLink {
  name: string
  url: string
  icon: any // Astro component type
}

export interface NavItem {
  href: string
  translateKey: string
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
  titleKey: string
  descriptionKey: string
  images: ProjectImage[]
  technologies: string[]
  link?: string
  github?: string
}

export interface ExperienceItem {
  role: string
  company: string
  startDate: string
  endDate: string
  location: string
  descriptionKey: string
  technologies: string[]
}

export interface Skill {
  name: string
  icon?: any // Astro component type
}
