import sobreImg from '@/assets/images/sobre.png'
import {
  ClockCountdownIcon,
  HardHatIcon,
  StarIcon,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Container from '../ui/container'

const pillars = [
  {
    icon: StarIcon,
    title: 'Qualidade construtiva',
  },
  {
    icon: ClockCountdownIcon,
    title: 'Compromisso com prazos',
  },
  {
    icon: HardHatIcon,
    title: 'Engenharia aplicada',
  },
]

export default function About({ id }: { id: string }) {
  return (
    <section id={id}>
      <Container className='section-padding grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center'>
        <div className='flex flex-col gap-4 lg:gap-6'>
          <h2 className='text-3xl font-extrabold text-balance md:text-4xl'>
            Quem <span className='text-gradient'>Somos</span>
          </h2>
          <p className='text-lg leading-relaxed font-medium text-pretty text-primary/60 xl:text-xl'>
            A AOX Engenharia e Construções é uma empresa especializada na
            execução de obras e soluções em engenharia civil, atuando nos
            segmentos residencial, comercial e industrial.
            <br />
            <br />
            Com atuação em Cuiabá – MT e região, a empresa desenvolve e executa
            obras com foco em qualidade construtiva, planejamento técnico e
            controle de prazos, garantindo segurança e eficiência em cada
            projeto realizado.
            <br />
            <br />
            Com uma abordagem baseada em engenharia aplicada, responsabilidade
            técnica e compromisso com resultados, a empresa se posiciona como
            parceira na realização de projetos sólidos e duradouros.
            <br />
            <br />
            AOX Engenharia e Construções Execução com confiança.
          </p>

          <div className='flex flex-col gap-3'>
            <p className='text-xs font-bold tracking-widest text-accent uppercase'>
              Nossos pilares
            </p>

            <div className='flex flex-col gap-3 xl:flex-row'>
              {pillars.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className='flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-xs xl:p-4'
                >
                  <div className='flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10'>
                    <Icon size={24} weight='bold' className='text-accent' />
                  </div>
                  <h4 className='leading-tight font-medium text-primary'>
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Image
          src={sobreImg}
          alt='Equipe AOX analisando projetos em obra'
          className='size-full rounded-2xl object-cover'
        />
      </Container>
    </section>
  )
}
