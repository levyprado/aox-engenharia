import { services } from '@/data/services'
import Image from 'next/image'
import Container from '../ui/container'

type ServicesProps = {
  id: string
} & React.ComponentProps<'section'>

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
                <Image src={service.iconSrc} alt='' className='size-10' />
                <h3 className='text-lg leading-tight font-semibold xl:text-xl'>
                  {service.title}
                </h3>
              </div>
              <p className='text-lg leading-normal font-medium text-primary/60'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
