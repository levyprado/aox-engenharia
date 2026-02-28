import Image from 'next/image'
import Button from '../ui/button'
import Container from '../ui/container'

type HeroProps = {
  id: string
} & React.ComponentProps<'section'>

export default function Hero({ id, ...props }: HeroProps) {
  return (
    <section
      id={id}
      className='relative flex h-[80svh] w-full flex-col bg-[url(/hero-mobile.webp)] bg-cover bg-center sm:h-[70vh] sm:bg-[url(/hero.webp)]'
      {...props}
    >
      <div className='pointer-events-none absolute inset-0 bg-linear-to-b from-primary via-primary/10 to-transparent' />
      <Container>
        <div className='relative mt-[10%] flex flex-col items-center gap-3 text-center text-light sm:max-w-lg sm:items-start sm:text-start md:mt-[15%] lg:mt-[7%] xl:max-w-2xl xl:gap-6 2xl:max-w-4xl'>
          <Image
            src='/logo.webp'
            alt='AOX'
            width={671}
            height={238}
            className='w-36 sm:w-48 xl:hidden'
          />
          <h1 className='text-3xl font-black text-balance sm:text-4xl xl:text-5xl xl:leading-14 2xl:text-6xl 2xl:leading-16'>
            Engenharia que transforma{' '}
            <span className='text-accent'>projetos em realidade</span>
          </h1>
          <p className='max-w-sm rounded-xl bg-primary/40 p-0.5 text-lg font-medium text-pretty text-light/80 backdrop-blur-xs md:pl-2 xl:max-w-lg xl:text-xl'>
            Construção civil, projetos residenciais, comerciais e outros em
            Cuiabá e região.
          </p>
          <div className='hidden items-center gap-4 text-lg xl:flex'>
            <Button
              href='#servicos'
              className='border-2 border-light/20 bg-light/10 px-6 py-2.5 backdrop-blur-md hover:bg-light/20'
            >
              Ver serviços
            </Button>
            <Button href='#' className='px-6 py-2.5'>
              Fale conosco
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
