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
    title: 'Residência Unifamiliar — Cáceres',
    category: 'Residencial',
    description:
      'Execução e desenvolvimento dos projetos de uma residência unifamiliar com área construída de 88 m², abrangendo todas as etapas do empreendimento, desde a concepção, elaboração e compatibilização dos projetos executivos até a execução integral da obra e entrega final.',
    imgSrc: project1,
  },
  {
    title: 'Residência Unifamiliar — Cuiabá',
    category: 'Residencial',
    description:
      'A AOX Engenharia oferece o desenvolvimento dos projetos e a execução completa de residências unifamiliares de 54,66 m², com 02 quartos, sendo 01 suíte, proporcionando uma solução completa, desde a concepção do projeto até a entrega da obra pronta para uso.',
    imgSrc: project2,
  },
  {
    title: 'Impermeabilização Predial — Cuiabá',
    category: 'Comercial',
    description:
      'A AOX Engenharia e Construções oferece soluções completas em impermeabilização predial, garantindo proteção estrutural contra infiltrações, umidade e degradação das edificações.',
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
    title: 'Usina Fotovoltaica com potência instalada de 1,5 MWp - Cáceres',
    category: 'Solar',
    description:
      'Execução e implantação de uma Usina Fotovoltaica com potência instalada de 1,5 MWp, desenvolvida para atender aos mais elevados padrões de desempenho, segurança e confiabilidade.',
    imgSrc: project6,
  },
]
