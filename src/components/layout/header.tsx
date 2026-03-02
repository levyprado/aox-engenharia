'use client'

import { cn } from '@/lib/utils'
import { ListIcon, XIcon } from '@phosphor-icons/react/ssr'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../ui/button'
import Container from '../ui/container'

const navItems = [
  { label: 'Início', href: '#' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className='sticky top-0 left-0 z-10 w-full bg-primary'>
      <Container className='flex h-16 items-center justify-between text-light md:h-20 xl:h-24'>
        <a href='#' className='w-28 lg:w-32 xl:w-40'>
          <Image src='/logo.webp' alt='AOX' width={671} height={238} />
        </a>

        <nav className='hidden items-center gap-8 md:flex'>
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className='font-medium transition-colors hover:text-accent'
            >
              {label}
            </a>
          ))}
          <Button
            href='https://google.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            Fale conosco
          </Button>
        </nav>

        <button
          onClick={toggleMenu}
          className='relative flex size-8 items-center justify-center md:hidden'
          aria-expanded={isOpen}
          aria-label='Alternar menu'
        >
          <span className='absolute top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden' />
          <XIcon
            color='#fff'
            size={32}
            weight='regular'
            alt='Fechar menu'
            className={cn(
              'absolute transition-transform duration-300 ease-in-out',
              isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-70',
            )}
          />
          <ListIcon
            color='#fff'
            size={32}
            weight='regular'
            alt='Menu'
            className={cn(
              'absolute transition-transform duration-300 ease-in-out',
              isOpen ? 'scale-0 opacity-70' : 'scale-100 opacity-100',
            )}
          />
        </button>

        <div
          className={cn(
            'absolute top-full left-0 w-full origin-top rounded-b-xl bg-primary shadow-md transition-all duration-300 ease-in-out md:hidden',
            isOpen ? 'scale-y-100' : 'pointer-events-none scale-y-0',
          )}
        >
          <nav className='flex flex-col items-center px-6 pb-2'>
            {navItems.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className='flex py-2 text-lg font-medium underline-offset-4 transition-colors hover:underline'
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}
