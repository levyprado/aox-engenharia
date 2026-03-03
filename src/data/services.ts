import comercial from '@/assets/icons/comercial.png'
import consultoria from '@/assets/icons/consultoria.png'
import laudo from '@/assets/icons/laudo.png'
import reforma from '@/assets/icons/reforma.png'
import residencial from '@/assets/icons/residencial.png'
import solar from '@/assets/icons/solar.png'
import { StaticImageData } from 'next/image'

export type Service = {
  title: string
  description: string
  iconSrc: StaticImageData
}

export const services: Service[] = [
  {
    title: 'Construção Residencial',
    description: 'Casas e condomínios planejados com qualidade e segurança',
    iconSrc: residencial,
  },
  {
    title: 'Construção Comercial',
    description: 'Galpões, lojas e edifícios comerciais do projeto à entrega',
    iconSrc: comercial,
  },
  {
    title: 'Energia Solar',
    description:
      'Instalação de painéis solares com projeto elétrico homologado',
    iconSrc: solar,
  },
  {
    title: 'Reformas e Ampliações',
    description:
      'Reforma, ampliação e retrofit de imóveis residenciais e comerciais',
    iconSrc: reforma,
  },
  {
    title: 'Projetos e Laudos Técnicos',
    description: 'Projetos estruturais, elétricos, hidráulicos e ARTs',
    iconSrc: laudo,
  },
  {
    title: 'Consultoria em Engenharia',
    description: 'Assesoria técnica, vistorias e laudos periciais',
    iconSrc: consultoria,
  },
]
