import Header from '@/components/layout/header'
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero id='inicio' />
        <Services id='servicos' />
      </main>
      <footer></footer>
    </>
  )
}
