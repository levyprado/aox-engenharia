import {
  CalculatorIcon,
  CalendarDotsIcon,
  ClipboardTextIcon,
  HardHatIcon,
  ShieldCheckIcon,
} from '@phosphor-icons/react/dist/ssr'
import Container from '../ui/container'

const steps = [
  {
    icon: ClipboardTextIcon,
    title: 'Análise Técnica',
    description:
      'Visita ao local, levantamento de necessidades e estudo de viabilidade do projeto.',
  },
  {
    icon: CalculatorIcon,
    title: 'Orçamento Detalhado',
    description:
      'Proposta transparente com custos, materiais e prazos bem definidos.',
  },
  {
    icon: CalendarDotsIcon,
    title: 'Planejamento e Cronograma',
    description:
      'Definição de etapas, prazos e responsabilidades para execução eficiente.',
  },
  {
    icon: HardHatIcon,
    title: 'Execução da Obra',
    description:
      'Acompanhamento técnico rigoroso com qualidade e segurança em cada fase.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Entrega Garantida',
    description:
      'Entrega no prazo com garantia, laudos técnicos e total satisfação do cliente.',
  },
]

export default function Steps() {
  return (
    <section className='bg-primary text-light'>
      <Container className='section-padding text-center'>
        <h2 className='text-3xl font-extrabold md:text-4xl'>
          Como <span className='text-gradient'>Trabalhamos</span>
        </h2>
        <p className='mx-auto mt-3 max-w-xl text-lg font-medium text-light/60 xl:text-xl'>
          Do primeiro contato à entrega, cada etapa é conduzida com
          responsabilidade técnica
        </p>

        <div className='relative mt-14'>
          <div className='absolute top-10 right-0 left-0 hidden h-0.5 bg-accent/60 lg:block' />

          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5'>
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className='relative flex flex-col items-center gap-3 lg:gap-4'
                >
                  <div className='relative flex size-20 items-center justify-center rounded-full border-2 border-accent/70 bg-light/5 backdrop-blur-sm'>
                    <Icon size={32} weight='regular' className='text-accent' />
                    <span className='absolute -top-1 -right-1 flex size-7 items-center justify-center rounded-full bg-accent font-bold'>
                      {i + 1}
                    </span>
                  </div>

                  <h3 className='text-xl leading-tight font-bold text-balance'>
                    {step.title}
                  </h3>
                  <p className='leading-relaxed font-medium text-pretty text-light/60'>
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
