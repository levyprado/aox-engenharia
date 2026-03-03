import project1 from '@/assets/images/projeto1.jpg'
import project2 from '@/assets/images/projeto2.jpg'
import project3 from '@/assets/images/projeto3.jpg'
import project4 from '@/assets/images/projeto4.jpg'
import project5 from '@/assets/images/projeto5.jpg'
import project6 from '@/assets/images/projeto6.jpg'
import type { StaticImageData } from 'next/image'

export type Project = {
  title: string
  category: 'Residencial' | 'Comercial' | 'Solar'
  description: string
  imgSrc: StaticImageData
}

export const projects: Project[] = [
  {
    title: 'Residência Unifamiliar — Cuiabá',
    category: 'Residencial',
    description:
      'Projeto e execução de residência de alto padrão com 280m², incluindo projeto estrutural e instalações completas.',
    imgSrc: project1,
  },
  {
    title: 'Galpão Comercial — Várzea Grande',
    category: 'Comercial',
    description:
      'Construção de galpão industrial de 1.200m² com estrutura metálica e piso de alta resistência.',
    imgSrc: project2,
  },
  {
    title: 'Sistema Solar 6000kWh — Cuiabá',
    category: 'Solar',
    description:
      'Projeto e instalação de usina solar com monitoramento remoto.',
    imgSrc: project3,
  },
  {
    title: 'Sistema Solar 8000kWh — Várzea Grande',
    category: 'Solar',
    description:
      'Projeto e instalação de usina solar com monitoramento remoto.',
    imgSrc: project4,
  },
  {
    title: 'Sistema Solar 12000kWh — Chapada dos Guimarães',
    category: 'Solar',
    description:
      'Projeto e instalação de usina solar com monitoramento remoto.',
    imgSrc: project5,
  },
  {
    title: 'Centro Comercial — Cuiabá',
    category: 'Comercial',
    description:
      'Projeto e execução de centro comercial com 8 salas, estacionamento e fachada moderna.',
    imgSrc: project6,
  },
]
