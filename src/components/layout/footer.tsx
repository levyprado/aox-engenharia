import logo from '@/assets/images/logo.png'
import { siteConfig } from '@/config/site'
import { navItems } from '@/data/navigation'
import Image from 'next/image'
import Container from '../ui/container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-primary pt-16 pb-8 text-light'>
      <Container>
        <div className='grid gap-12 md:grid-cols-3'>
          <div className='flex flex-col gap-4'>
            <Image src={logo} alt={siteConfig.name} className='w-36' />
            <p className='max-w-sm font-medium text-light/70'>
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-bold'>Navegação</h3>
            <ul className='flex flex-col gap-2'>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className='text-light/70 transition-colors hover:text-accent'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='mb-4 text-lg font-bold'>Contato</p>
            <ul className='space-y-3 text-light/70'>
              <li>
                <strong>WhatsApp:</strong> {siteConfig.contact.phone}
              </li>
              <li>
                <strong>Email:</strong> {siteConfig.contact.email}
              </li>
              <li>
                <strong>Localização:</strong> {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-light/10 pt-8 text-center text-sm text-light/40'>
          © {currentYear} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  )
}
