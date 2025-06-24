import type { Skill } from '../types'

import Code from '../components/icons/general/Code.astro'
import Backend from '../components/icons/general/Backend.astro'
import Tools from '../components/icons/general/Tools.astro'
import HTML from '../components/icons/technologies/HTML.astro'
import CSS from '../components/icons/technologies/Css.astro'
import JavaScript from '../components/icons/technologies/Javascript.astro'
import TypeScript from '../components/icons/technologies/Typescript.astro'
import CSharp from '../components/icons/technologies/Cs.astro'
import Angular from '../components/icons/technologies/Angular.astro'
import React from '../components/icons/technologies/React.astro'
import Tailwind from '../components/icons/technologies/Tailwind.astro'
import Express from '../components/icons/technologies/ExpressJs.astro'
import NodeJS from '../components/icons/technologies/NodeJS.astro'
import NestJS from '../components/icons/technologies/NestJS.astro'
import DotNet from '../components/icons/technologies/Dotnet.astro'
import PostgreSQL from '../components/icons/technologies/PostgreSQL.astro'
import MySQL from '../components/icons/technologies/MySQL.astro'
import SQLServer from '../components/icons/technologies/SQLServer.astro'
import Docker from '../components/icons/technologies/Docker.astro'
import Git from '../components/icons/technologies/Git.astro'
import Linux from '../components/icons/technologies/Linux.astro'
import Bash from '../components/icons/technologies/Bash.astro'

export const skillCategories = {
  languages: {
    translateKey: 'skills.languages',
    icon: Code,
    skills: [
      { name: 'HTML', icon: HTML },
      { name: 'CSS', icon: CSS },
      { name: 'JavaScript', icon: JavaScript },
      { name: 'TypeScript', icon: TypeScript },
      { name: 'C#', icon: CSharp }
    ]
  }, 
  frontend: {
    translateKey: 'skills.frontend',
    icon: Code,
    skills: [
      { name: 'Angular', icon: Angular },
      { name: 'React', icon: React },
      { name: 'Tailwind CSS', icon: Tailwind }
    ]
  }, 
  backend: {
    translateKey: 'skills.backend',
    icon: Backend,
    skills: [
      { name: 'Express', icon: Express },
      { name: 'Node.js', icon: NodeJS },
      { name: 'NestJS', icon: NestJS },
      { name: '.NET', icon: DotNet },
      { name: 'PostgreSQL', icon: PostgreSQL },
      { name: 'MySQL', icon: MySQL },
      { name: 'SQL Server', icon: SQLServer }
    ]
  }, 
  tools: {
    translateKey: 'skills.tools',
    icon: Tools,
    skills: [
      { name: 'Docker', icon: Docker },
      { name: 'Git', icon: Git },
      { name: 'Linux', icon: Linux },
      { name: 'Bash', icon: Bash }
    ]
  }
} as const
