import Image from 'next/image'
import Container from '../ui/container'

const navItems = [
  { label: 'Início', href: '#' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className='bg-primary'>
      <Container className='pt-12 text-light'>
        <div className='grid gap-8 md:grid-cols-3'>
          <div>
            <Image
              src='/logo.webp'
              width={128}
              height={45}
              alt='AOX'
              className='w-24 lg:w-32'
            />
            <p className='mt-2 font-medium text-light/60'>
              Engenharia com responsabilidade técnica
            </p>
          </div>

          <div>
            <p className='mb-3 font-bold'>Navegação</p>
            <div className='flex flex-col gap-3'>
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className='text-light/60 transition-colors hover:text-accent'
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className='mb-3 font-bold'>Contato</p>
            <div className='flex flex-col gap-3 text-light/60'>
              <span>WhatsApp: (65) 99958-0809</span>
              <span>Telefone: (65) 99958-0809</span>
              <span>aox.engenharia@gmail.com</span>
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-light/20 py-6 text-center text-sm text-light/40'>
          © 2026 AOX Engenharia. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  )
}
