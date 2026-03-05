import sobreImg from '@/assets/images/sobre.png'
import { CertificateIcon, MedalIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Container from '../ui/container'

export default function About({ id }: { id: string }) {
  return (
    <section id={id}>
      <Container className='section-padding grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center'>
        <div className='flex flex-col gap-4 lg:gap-6'>
          <h2 className='text-3xl font-extrabold text-balance md:text-4xl'>
            Quem <span className='text-gradient'>Somos</span>
          </h2>
          <p className='text-lg leading-relaxed font-medium text-pretty text-primary/60 xl:text-xl'>
            A AOX Engenharia é uma empresa de engenharia civil com sede em
            Cuiabá, Mato Grosso, atuando em construção residencial, comercial e
            na instalação de sistemas de energia solar fotovoltaica. Com
            profissionais qualificados e registro ativo no CREA-MT, oferecemos
            soluções completas de engenharia com responsabilidade técnica e
            compromisso com a qualidade em cada obra.
          </p>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='flex items-center gap-3 rounded-lg border border-gray-200 p-3'>
              <MedalIcon size={32} weight='regular' className='text-accent' />
              <div className='flex flex-col'>
                <h4 className='font-semibold'>Registro CREA-MT ativo</h4>
                <p className='text-primary/60'>
                  Empresa habilitada e regularizada
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3 rounded-lg border border-gray-200 p-3'>
              <CertificateIcon
                size={32}
                weight='regular'
                className='text-accent'
              />
              <div className='flex flex-col'>
                <h4 className='font-semibold'>
                  Responsabilidade Técnica (ART)
                </h4>
                <p className='text-primary/60'>Em todas as obras realizadas</p>
              </div>
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
