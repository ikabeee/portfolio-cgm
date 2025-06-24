import type { Language, NavItem } from '../types'

export const languages: Language[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' }
]

export const navItems: NavItem[] = [
  { href: "#about", translateKey: "nav.about" },
  { href: "#skills", translateKey: "nav.skills" },
  { href: "#experience", translateKey: "nav.experience" },
  { href: "#projects", translateKey: "nav.projects" },
  { href: "#contact", translateKey: "nav.contact" }
]
