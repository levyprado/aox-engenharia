import Image from 'next/image'
import Container from '../ui/container'

type ServicesProps = {
  id: string
} & React.ComponentProps<'section'>

const services = [
  {
    title: 'Construção Residencial',
    descripiton: 'Casas e condomínios planejados com qualidade e segurança',
    iconSrc: '/residencial.png',
  },
  {
    title: 'Construção Comercial',
    descripiton: 'Galpões, lojas e edifícios comerciais do projeto à entrega',
    iconSrc: '/comercial.png',
  },
  {
    title: 'Energia Solar',
    descripiton:
      'Instalação de painéis solares com projeto elétrico homologado',
    iconSrc: '/solar.png',
  },
  {
    title: 'Reformas e Ampliações',
    descripiton:
      'Reforma, ampliação e retrofit de imóveis residenciais e comerciais',
    iconSrc: '/reforma.png',
  },
  {
    title: 'Projetos e Laudos Técnicos',
    descripiton: 'Projetos estruturais, elétricos, hidráulicos e ARTs',
    iconSrc: '/laudo.png',
  },
  {
    title: 'Consultoria em Engenharia',
    descripiton: 'Assesoria técnica, vistorias e laudos periciais',
    iconSrc: '/consultoria.png',
  },
]

export default function Services({ id, ...props }: ServicesProps) {
  return (
    <section id={id} {...props} className='bg-gray-50'>
      <Container className='section-padding'>
        <h2 className='text-3xl font-semibold md:text-4xl'>
          A AOX Engenharia -{' '}
          <span className='text-xl font-medium text-primary/60 md:text-2xl lg:text-3xl'>
            Soluções completas de engenharia para o seu projeto
          </span>
        </h2>
        <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3'>
          {services.map((service) => (
            <div
              key={service.title}
              className='row-span-2 grid grid-rows-subgrid gap-3 rounded-lg bg-light p-4 shadow-sm xl:p-6'
            >
              <div className='flex items-center gap-3'>
                <Image
                  src={service.iconSrc}
                  alt={`Ícone ${service.title}`}
                  width={40}
                  height={40}
                />
                <h3 className='text-lg leading-tight font-semibold xl:text-xl'>
                  {service.title}
                </h3>
              </div>
              <p className='text-lg leading-normal font-medium text-primary/60'>
                {service.descripiton}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
