import BirdsGonnaBeHappy from './components/BirdsGonnaBeHappy'
import ComingSoon from './components/ComingSoon'
import Demo from './components/Demo'
import Ebook from './components/Ebook'
import Footer from './components/Footer'
import GetOver from './components/GetOver'
import Hero from './components/Hero'
import LatestArticle from './components/LatestArticle'
import Navbar from './components/Navbar'
import { StillNotSure } from './components/StillNotSure'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ebook />
      <BirdsGonnaBeHappy />
      <ComingSoon />
      <GetOver />
      <StillNotSure />
      <Demo />
      <LatestArticle />
      <Footer />

    </>
  )
}
