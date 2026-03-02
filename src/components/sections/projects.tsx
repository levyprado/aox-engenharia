import Image from 'next/image'
import Container from '../ui/container'

type ProjectsProps = {
  id: string
} & React.ComponentProps<'section'>

const projects = [
  {
    title: 'Residência Unifamiliar — Cuiabá',
    category: 'Residencial',
    description:
      'Projeto e execução de residência de alto padrão com 280m², incluindo projeto estrutural e instalações completas.',
    imgSrc: '/projeto1.jpg',
  },
  {
    title: 'Galpão Comercial — Várzea Grande',
    category: 'Comercial',
    description:
      'Construção de galpão industrial de 1.200m² com estrutura metálica e piso de alta resistência.',
    imgSrc: '/projeto2.jpg',
  },
  {
    title: 'Sistema Solar 6000kWh — Cuiabá',
    category: 'Solar',
    description:
      'Projeto e instalação de usina solar com monitoramento remoto.',
    imgSrc: '/projeto3.jpg',
  },
  {
    title: 'Sistema Solar 8000kWh — Várzea Grande',
    category: 'Solar',
    description:
      'Projeto e instalação de usina solar com monitoramento remoto.',
    imgSrc: '/projeto4.jpg',
  },
  {
    title: 'Sistema Solar 12000kWh — Chapada dos Guimarães',
    category: 'Solar',
    description:
      'Projeto e instalação de usina solar com monitoramento remoto.',
    imgSrc: '/projeto5.jpg',
  },
  {
    title: 'Centro Comercial — Cuiabá',
    category: 'Comercial',
    description:
      'Projeto e execução de centro comercial com 8 salas, estacionamento e fachada moderna.',
    imgSrc: '/projeto6.jpg',
  },
]

export default function Projects({ id, ...props }: ProjectsProps) {
  return (
    <section id={id} className='bg-gray-50' {...props}>
      <Container className='section-padding flex flex-col gap-6 lg:gap-12'>
        <div className='space-y-1 text-center lg:space-y-2'>
          <h2 className='text-3xl font-extrabold text-balance md:text-4xl'>
            Obras <span className='text-gradient'>Realizadas</span>
          </h2>
          <p className='text-lg font-medium text-pretty text-primary/60 xl:text-xl'>
            Conheça alguns dos nossos projetos entregues
          </p>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
          {projects.map((project) => (
            <div
              key={project.imgSrc}
              className='group row-span-3 grid grid-rows-subgrid gap-2 overflow-hidden rounded-xl bg-light shadow-sm transition-all duration-500 hover:shadow-lg'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  width={341}
                  height={192}
                  className='size-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <span className='absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-light'>
                  {project.category}
                </span>
              </div>
              <h3 className='px-5 pt-2 font-bold'>{project.title}</h3>
              <p className='px-5 pb-5 font-medium text-primary/60'>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
