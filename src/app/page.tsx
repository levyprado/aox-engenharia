import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import Hero from '@/components/sections/hero'
import Projects from '@/components/sections/projects'
import Services from '@/components/sections/services'
import Steps from '@/components/sections/steps'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero id='inicio' />
        <Services id='servicos' />
        <About id='sobre' />
        <Projects id='projetos' />
        <Steps />
        <Contact id='contato' />
      </main>
      <Footer />
    </>
  )
}
