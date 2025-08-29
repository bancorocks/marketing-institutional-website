import Header from '../components/Header'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import OpenAccountCTA from '../components/OpenAccountCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <OpenAccountCTA />
      </main>
      <Footer />
    </div>
  )
}
