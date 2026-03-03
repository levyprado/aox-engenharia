import { siteConfig } from '@/config/site'
import {
  ChatCircleIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
} from '@phosphor-icons/react/dist/ssr'
import Container from '../ui/container'

type ContactProps = {
  id: string
} & React.ComponentProps<'section'>

export default function Contact({ id, ...props }: ContactProps) {
  const contacts = [
    {
      icon: ChatCircleIcon,
      label: 'WhatsApp',
      value: siteConfig.contact.phone,
      href: siteConfig.social.whatsapp,
    },
    {
      icon: PhoneIcon,
      label: 'Telefone',
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phoneRaw}`,
    },
    {
      icon: EnvelopeSimpleIcon,
      label: 'Email',
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
  ]

  return (
    <section id={id} className='bg-accent' {...props}>
      <Container className='section-padding text-center text-light'>
        <h2 className='text-3xl font-extrabold text-balance md:text-4xl'>
          Pronto para iniciar seu projeto?
        </h2>
        <p className='mt-3 text-lg leading-relaxed font-medium text-pretty text-light/80 xl:text-xl'>
          Entre em contato e solicite um orçamento sem compromisso
        </p>
        <div className='mt-10 grid gap-4 lg:grid-cols-3 lg:gap-6'>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === 'WhatsApp' ? '_blank' : undefined}
              rel='noopener noreferrer'
              className='flex flex-col items-center gap-2 rounded-xl bg-light/10 p-6 transition-colors hover:bg-light/20'
            >
              <c.icon color='#fff' size={32} weight='regular' />
              <p className='font-bold'>{c.label}</p>
              <p className='text-light/80'>{c.value}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
