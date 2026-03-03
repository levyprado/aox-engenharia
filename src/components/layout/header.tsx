'use client'

import logo from '@/assets/images/logo.png'
import { siteConfig } from '@/config/site'
import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'
import { ListIcon, XIcon } from '@phosphor-icons/react/ssr'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../ui/button'
import Container from '../ui/container'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className='sticky top-0 left-0 z-10 w-full bg-primary'>
      <Container className='flex h-16 items-center justify-between text-light md:h-20 xl:h-24'>
        <a href='#' className='w-28 lg:w-32 xl:w-40' onClick={closeMenu}>
          <Image src={logo} alt={siteConfig.name} />
        </a>

        <nav className='hidden items-center gap-8 md:flex'>
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className='font-medium transition-colors hover:text-accent'
            >
              {label}
            </a>
          ))}
          <Button
            href={siteConfig.social.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
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
            alt='Abrir Menu'
            className={cn(
              'absolute transition-transform duration-300 ease-in-out',
              isOpen ? 'scale-0 opacity-70' : 'scale-100 opacity-100',
            )}
          />
        </button>

        <div
          className={cn(
            'absolute top-full left-0 w-full origin-top rounded-b-xl bg-primary shadow-lg transition-all duration-300 ease-in-out md:hidden',
            isOpen ? 'scale-y-100' : 'pointer-events-none scale-y-0',
          )}
        >
          <nav className='flex flex-col items-center gap-6 border-t border-light/10 py-6'>
            {navItems.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className='text-xl font-medium text-light/90 hover:text-accent'
              >
                {label}
              </a>
            ))}
            <Button
              href={siteConfig.social.whatsapp}
              className='w-3/4 justify-center'
            >
              Fale conosco
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  )
}
