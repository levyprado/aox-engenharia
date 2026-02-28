import Image from 'next/image'
import Container from './container'

export default function Header() {
  return (
    <header className='sticky top-0 left-0 z-10 w-full bg-primary'>
      <Container
        as='nav'
        className='flex h-16 items-center justify-between md:h-20'
      >
        <a href='#' className='w-28'>
          <Image src='/logo.webp' alt='AOX' width={671} height={238} />
        </a>

        <div className='hidden items-center gap-8 md:flex'>
          <ul className='flex items-center gap-8 text-light'>
            {[...Array(5).keys()].map((i) => (
              <li key={i}>
                <a href='#'>Início</a>
              </li>
            ))}
          </ul>
          <a
            href='https://google.com'
            target='_blank'
            rel='noreferrer noopener'
            className='rounded-lg bg-accent px-4 py-2 font-semibold text-light'
          >
            Fale conosco
          </a>
        </div>

        <button className='md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='#fff'
            viewBox='0 0 256 256'
          >
            <path d='M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z'></path>
          </svg>
        </button>
      </Container>
    </header>
  )
}
