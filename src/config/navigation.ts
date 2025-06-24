import type { Language, NavItem } from '../types'

export const languages: Language[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' }
]

export const navItems: NavItem[] = [
  { href: "#about-me", label: "Acerca de mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" }
]
